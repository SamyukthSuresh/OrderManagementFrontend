import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonText, IonInput, IonList, IonSegment } from '@ionic/react';
import Navbar from 'react-bootstrap/Navbar'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { connect } from "react-redux";
import WarModHandler from "../../store/WarMod/WarModActions";
import * as menuActions from "../../store/Sales/orderActions";
import MenuHandler from '../../store/Sales/orderActions';
import React, { useState, useEffect } from 'react';
import { IonMenu, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonCardSubtitle, IonAlert, IonCardHeader, IonCardTitle, IonButton } from "@ionic/react";
import MenuBar from './MenuBarWar';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../../theme/WareHouse.css'
import swal from 'sweetalert';

const ProdMod = (props) => {
    const [Name, setName] = useState(0);
    const [Price, setPrice] = useState("set");
    const [Stock, setStock] = useState("set");
    const [desc, setDesc] = useState("set");
    const [add, setAdd] = useState("set");
    const [showAlert3, setShowAlert3] = useState(false);
    const submit = () => {
        if (Name && Stock && Price) {
            console.log("hello Complete");
            const userDetails = { Name, Stock, Price };
            console.log(userDetails)
            props.warmod(userDetails);
            var delayInMilliseconds = 2000; //1 second
            setTimeout(function () {
                if (localStorage.getItem('alert_warehouse') == 'Product Successfully added') {
                    swal({
                        text: "Product Successfully Updated",
                        icon: "success",
                        button: "Okay",
                    });
                }
            }, delayInMilliseconds);
        }
    }
    useEffect(() => {
        console.log("useEffect")
        var id = 'hey fetch order';
        var userDetails = { id }
        props.menu(userDetails)
    }, []);
    return (
        <IonPage className="pic">
            <MenuBar />
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
                    <IonCardTitle color="danger" class="ion-text-center">Update Product Information</IonCardTitle>
                </IonCardHeader>
                <IonCardContent style={{
                    marginLeft: "auto",
                }}>
                    <div>
                        <IonGrid>
                            <IonRow color="primary" class="ion-align-items-left">
                                <IonCol >
                                    <div>
                                        <Form.Group controlId="formGridState" >
                                            <Form.Label>Select Product</Form.Label>
                                            <Form.Control as="select" defaultValue="Choose..." onChange={(e) => setName(e.target.value)}>
                                                <option>Choose...</option>
                                                {props.menuState.map((q) => {
                                                    return (
                                                        q.data.map((a) => {
                                                            return (<option>{a.name}</option>);
                                                        }))
                                                })}
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control type="text" onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control type="text" onChange={(e) => setStock(e.target.value)} placeholder="Stock" />
                                        </Form.Group>
                                    </div>
                                    <div>
                                        <IonButton size="small" className="ion-margin-top" type="submit" onClick={submit} color="tertiary" expand="block">Update</IonButton>
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
    console.log("MenuState", state.menu)
    return {
        menuState: [...state.menu],
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: (id) => {
            dispatch(menuActions.incrementQty(id));
        },
        decrement: (id) => {
            dispatch(menuActions.decrementQty(id));
        },
        menu: (userDetails) => {
            dispatch(MenuHandler(userDetails));
        },
        warmod: (userDetails) => {
            dispatch(WarModHandler(userDetails));
        }
    };
};
/*const mapdispatchToProps = (dispatch) => {
    return {
        warehouse: (userDetails) => {
            dispatch(WareModHandler(userDetails));
        },
    };
};*/

export default connect(mapStateToProps, mapDispatchToProps)(ProdMod);