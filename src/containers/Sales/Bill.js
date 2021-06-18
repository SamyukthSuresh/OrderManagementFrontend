import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BillHandler from "../../store/Order/BillActions";
import {
    IonText,
    IonPage,
    IonList,
    IonItem,
    IonLabel,
    IonItemDivider,
    IonCardContent,
    IonCardTitle,
    IonCardSubtitle,
    IonCardHeader,
    IonCard,
    IonChip,
    IonIcon,
    IonContent,
    IonNav,
    IonButton,
    IonBackButton,
} from "@ionic/react";
import { connect } from "react-redux";
import { playOutline, caretBackCircleOutline } from "ionicons/icons";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import { isNullishCoalesce } from "typescript";
import swal from 'sweetalert';

const Bill = (props) => {
    const [id, setOrder] = useState(null);
    const [sp_id, setSales] = useState(null);
    const [cust_id, setCust] = useState(null);
    const [date, setDate] = useState(null);
    const [incoterm, setInco] = useState(null);
    const [payment_terms, setPay] = useState(null);
    const [Cart, setCart] = useState(null);
    let cartItems = [];
    var link = "";
    const [showAlert, setShowAlert] = useState(false);
    const [showInvalidAlert, setShowInvalidAlert] = useState(false);
    const [cartEmpty, setCartEmpty] = useState(true);
    const [pinValid, setPinValidity] = useState(true);
    let total = 0;
    let count = 0;
    const submit = () => {
        cartItems.push({ id, sp_id, cust_id, date, incoterm, payment_terms, data: [] });
        props.details.map((q) => {
            let cartItem = null;
            cartItem = q.data.filter((q) => {
                return q.CurrQty !== 0;
            });
            console.log(cartItem)
            if (cartItem !== null) {
                cartItems
                    .map((n) => {
                        n.data = [...cartItem];
                    });
            }
        });
        if (id && sp_id && cust_id && date && incoterm && payment_terms) {
            console.log("hello Complete", cartItems);
            const userDetails = cartItems;
            console.log(userDetails)
            props.order(userDetails);
            var delayInMilliseconds = 2000; //1 second
            setTimeout(function () {
                if (localStorage.getItem('alert_bill') == 'Success') {
                    swal({
                        text: "Successfully Placed Order",
                        icon: "success",
                        button: "Okay",
                    });
                }
                else {
                    swal({
                        text: "Order Unsuccessful",
                        icon: "error",
                        button: "Okay",
                    });
                }
            }, delayInMilliseconds);
        }
    }
    return (
        <IonPage>
            <div>
                <Navbar bg="dark" variant="dark" ticky="top">
                    <Navbar.Collapse className="justify-content-start">
                        {/* <Link to='/order'> */}
                        <IonButton fill="clear" onClick={() => { window.location.replace('http://localhost:8100/order') }}>
                            <IonIcon
                                className="recharge"
                                color="primary"
                                size="large"
                                icon={caretBackCircleOutline}
                            />
                        </IonButton>
                        {/* </Link> */}
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-start">
                        <NavbarBrand>Detailed Bill</NavbarBrand></Navbar.Collapse>
                </Navbar>
            </div>
            <IonContent>
                <IonCard className="ioncard">
                    <IonCardHeader className="ion-text-center">
                        <IonCardTitle color='danger'>Detailed Bill</IonCardTitle>
                        <IonCardSubtitle>23/10/2000:18:45:00</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                        {props.details
                            ? props.details.map((a) => {
                                return a.data.length != 0 ? (
                                    <IonList lines="none">
                                        <IonItem>
                                            <IonItemDivider color="tertiary">
                                                <IonLabel>{a.category}</IonLabel>
                                            </IonItemDivider>
                                        </IonItem>
                                        {a.data.map((b, i) => {
                                            total += b.prod_price * b.CurrQty
                                            if (b.CurrQty != 0) {
                                                count += 1;
                                                return (
                                                    <IonItem key={i}>
                                                        <IonLabel>
                                                            <IonIcon icon={playOutline} />
                                                            {`${b.name} x ${b.CurrQty}`}
                                                        </IonLabel>
                                                        <IonLabel className="ion-text-right">
                                                            ₹{Number(b.prod_price) * Number(b.CurrQty)}
                                                        </IonLabel>
                                                    </IonItem>
                                                )
                                            }
                                        })}
                                    </IonList>
                                ) : null;
                            })
                            : console.log("Not There")}
                        <IonItem>
                            <IonLabel color="danger">TOTAL</IonLabel>
                            <IonLabel className="ion-text-right">₹{total}</IonLabel>
                        </IonItem>
                        <Form>
                            <div style={{ marginTop: '1px', marginLeft: '2px' }} >
                                <Row>
                                    <Col>
                                        <Form.Group controlId="formBasicEmail" style={{ marginTop: '10px', marginLeft: '1%', marginRight: "70%" }}>
                                            <Form.Label>Customer ID</Form.Label>
                                            <Form.Control type="email" placeholder="CUSTID" onChange={(e) => setCust(e.target.value)} />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="formBasicEmail" style={{ marginTop: '10px', marginLeft: '1%', marginRight: "70%" }}>
                                            <Form.Label>SalesPerson ID</Form.Label>
                                            <Form.Control type="email" placeholder="SalesId" onChange={(e) => setSales(e.target.value)} />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="formGridState" style={{ marginTop: '10px', marginLeft: '1%', marginRight: "70%" }} >
                                            <Form.Label>Pick the Incoterm</Form.Label>
                                            <Form.Control as="select" defaultValue="Choose..." onChange={(e) => setInco(e.target.value)} >
                                                <option>Choose...</option>
                                                <option>CIF</option>
                                                <option>DDP</option>
                                                <option>EXW</option>
                                                <option>FCA</option>
                                                <option>DPU</option>
                                                <option>DAP</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="formBasicEmail" style={{ marginTop: '10px', marginLeft: '1%', marginRight: "70%" }}>
                                            <Form.Label>Promised Delivery Date</Form.Label>
                                            <Form.Control type="email" placeholder="Promised Delivery Date" onChange={(e) => setDate(e.target.value)} />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="formBasicEmail" style={{ marginTop: '10px', marginLeft: '1%', marginRight: "70%" }}>
                                            <Form.Label>Order ID</Form.Label>
                                            <Form.Control type="email" placeholder="OrderId" onChange={(e) => setOrder(e.target.value)} />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="formGridState" style={{ marginTop: '10px', marginLeft: '1%', marginRight: "70%" }} >
                                            <Form.Label>Pick the Payment Term</Form.Label>
                                            <Form.Control as="select" defaultValue="Choose..." onChange={(e) => setPay(e.target.value)}>
                                                <option>Choose...</option>
                                                <option>Net7</option>
                                                <option>Net10</option>
                                                <option>Net20</option>
                                                <option>2/10Net30</option>
                                                <option>COD</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </div>
                        </Form>
                        <div>
                            <IonButton size="medium" style={{ marginLeft: '45%', marginTop: "5px" }} type="submit" onClick={submit} color="tertiary" >Order</IonButton>
                        </div>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

const mapStateToProps = (state) => {
    return {
        details: [...state.menu],
    };
};

const mapdispatchToProps = (dispatch) => {
    return {
        order: (userDetails) => {
            dispatch(BillHandler(userDetails));
        },
    };
};

export default connect(mapStateToProps, mapdispatchToProps)(Bill);
