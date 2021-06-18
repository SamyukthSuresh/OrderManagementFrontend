import { IonContent, IonHeader, IonPage, IonToast, IonTitle, IonToolbar, IonItem, IonLabel, IonText, IonInput, IonList, IonSegment } from '@ionic/react';
import Navbar from 'react-bootstrap/Navbar'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import ShipmentHandler from "../../store/Shipment/ShipmentActions";
import React, { useState } from 'react';
import { IonMenu, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonCardSubtitle, IonAlert, IonCardHeader, IonCardTitle, IonButton } from "@ionic/react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../../theme/WareHouse.css'
import swal from 'sweetalert';

const ShipInfo = (props) => {
    const [box, setbox] = useState(0);
    const [date, setdate] = useState("set");
    const [prod_id, setProd_id] = useState("set");
    const [desc, setDesc] = useState("set");
    const [add, setAdd] = useState("set");
    const [showAlert3, setShowAlert3] = useState(false);
    const submit = () => {
        if (box && date && add && prod_id && desc) {
            console.log("hello Complete");
            const userDetails = { box, add, date, prod_id, desc };
            console.log(userDetails)
            props.shipment(userDetails);
            console.log(props.ship)
            var delayInMilliseconds = 2000; //1 second
            setTimeout(function () {
                if (localStorage.getItem('alert_ship') == 'Successfully Updated') {
                    swal({
                        text: "Shipment Information Updated Successfully",
                        icon: "success",
                        button: "Okay",
                    });
                }
                else {
                    swal({
                        text: "Updation Unsuccessful",
                        icon: "error",
                        button: "Okay",
                    });
                }
            }, delayInMilliseconds);
        }
    }
    return (
        <IonPage className="pic">
            <div>
                <Navbar bg="dark" variant="dark" ticky="top">
                    <Navbar.Brand>CEMENZO</Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <Link to='/signin'>
                            <IonButton fill="clear">
                                LogOut
                            </IonButton>
                        </Link>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            <IonCard
                color="dark"
                style={{
                    width: "40%",
                    height: "fit-content",
                    marginLeft: "28%",
                    marginTop: "11%",
                    marginBottom: "auto"
                }}>
                <IonCardHeader>
                    <IonCardTitle color="danger" class="ion-text-center">Shipment Information</IonCardTitle>
                </IonCardHeader>
                <IonCardContent style={{
                    marginLeft: "auto",
                }}>
                    <div>
                        <IonGrid>
                            <IonRow color="primary" class="ion-align-items-left">
                                <IonCol >
                                    <div>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control type="text" onChange={(e) => setProd_id(e.target.value)} placeholder="Order ID" />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control type="text" onChange={(e) => setdate(e.target.value)} placeholder="Delivery Date" />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control type="multiline" onChange={(e) => setDesc(e.target.value)} placeholder="Shipment Description" />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control type="multiline" onChange={(e) => setAdd(e.target.value)} placeholder="Address" />
                                        </Form.Group>
                                        <Form.Group controlId="formGridState" >
                                            <Form.Label>Boxes Shipped</Form.Label>
                                            <Form.Control as="select" defaultValue="Choose..." onChange={(e) => setbox(e.target.value)}>
                                                <option>Choose...</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </div>
                                    <div>
                                        <IonButton size="small" className="ion-margin-top" type="submit" onClick={submit} color="tertiary" expand="block">Update</IonButton>
                                        <IonToast
                                            isOpen={true}
                                            message="Sign In Successful"
                                            duration={500}
                                            color="success"
                                            mode="ios"
                                            animated={true}
                                        />
                                    </div>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </div>
                </IonCardContent>
            </IonCard>
        </IonPage>
    );
};

const mapStateToProps = (state) => {
    return {
        ship: state.shipment.alertMsg,
    };
};

const mapdispatchToProps = (dispatch) => {
    return {
        shipment: (userDetails) => {
            dispatch(ShipmentHandler(userDetails));
        },
    };
};

export default connect(mapStateToProps, mapdispatchToProps)(ShipInfo);