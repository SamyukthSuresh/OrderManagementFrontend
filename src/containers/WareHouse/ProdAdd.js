import { IonContent, IonHeader, IonPage, IonToast, IonTitle, IonToolbar, IonItem, IonLabel, IonText, IonInput, IonList, IonSegment } from '@ionic/react';
import Navbar from 'react-bootstrap/Navbar'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import { connect } from "react-redux";
import WareHouseHandler from "../../store/WareHouse/WareHouseActions";
import '../../theme/WareHouse.css'
import Button from 'react-bootstrap/Button'
import React, { useState } from 'react';
import { IonMenu, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonCardSubtitle, IonCardHeader, IonCardTitle, IonButton, IonAlert } from "@ionic/react";
import MenuBar from './MenuBarWar';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import swal from 'sweetalert';

const ProdAdd = (props) => {
    const [name, setName] = useState("set");
    const [category, setCat] = useState("set");
    const [price, setPrice] = useState("set");
    const [qty, setQty] = useState("set");
    const [prod_id, setProd_id] = useState("set");
    const [desc, setDesc] = useState("set");
    const [showAlert3, setShowAlert3] = useState(false);
    const submit = () => {
        if (name && category && price && qty && prod_id && desc) {
            console.log("hello Complete");
            const userDetails = { name, category, price, qty, prod_id, desc };
            console.log(userDetails)
            props.warehouse(userDetails);
            var delayInMilliseconds = 2000; //1 second
            setTimeout(function () {
                if (localStorage.getItem('alert_warehouse') == 'Product Successfully added') {
                    swal({
                        text: "Product Addition Successful",
                        icon: "success",
                        button: "Okay",
                    });
                }
                else {
                    swal({
                        text: "Product Addition Unsuccessful",
                        icon: "error",
                        button: "Okay",
                    });
                }
            }, delayInMilliseconds);
        }
    }
    return (
        <IonPage className="pic">
            <MenuBar />
            <IonCard
                color="dark"
                style={{
                    width: "40%",
                    height: "fit-content",
                    marginLeft: "28%",
                    marginTop: "2%",
                    marginBottom: "auto"
                }}>
                <IonCardHeader>
                    <IonCardTitle color="danger" class="ion-text-center">New Product Information</IonCardTitle>
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
                                            <Form.Label>Product Id</Form.Label>
                                            <Form.Control onChange={(e) => setProd_id(e.target.value)} type="text" />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control onChange={(e) => setName(e.target.value)} type="text" />
                                        </Form.Group>
                                        <Form.Group controlId="formGridState" >
                                            <Form.Label>Product Category</Form.Label>
                                            <Form.Control as="select" defaultValue="Choose..." onChange={(e) => setCat(e.target.value)} >
                                                <option>Choose...</option>
                                                <option>rm</option>
                                                <option>eq</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Product Unit Price</Form.Label>
                                            <Form.Control onChange={(e) => setPrice(e.target.value)} type="text" />
                                        </Form.Group>

                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Avail Qty</Form.Label>
                                            <Form.Control onChange={(e) => setQty(e.target.value)} type="multiline" />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Product Description</Form.Label>
                                            <Form.Control onChange={(e) => setDesc(e.target.value)} type="multiline" />
                                        </Form.Group>
                                    </div>
                                    <div>
                                        <IonButton size="small" className="ion-margin-top" type="submit" color="tertiary" onClick={submit} expand="block">Add Product</IonButton>
                                        <IonAlert
                                            isOpen={showAlert3}
                                            onDidDismiss={() => { setShowAlert3(false) }}
                                            cssClass='my-custom-class'
                                            header={"Alert!"}
                                            message={localStorage.getItem('alert_warehouse')}
                                            buttons={[
                                                {
                                                    text: 'Okay',
                                                    role: 'Okay',
                                                    cssClass: 'secondary',
                                                },
                                            ]}
                                        />
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


const mapdispatchToProps = (dispatch) => {
    return {
        warehouse: (userDetails) => {
            dispatch(WareHouseHandler(userDetails));
        },
    };
};

export default connect(null, mapdispatchToProps)(ProdAdd);