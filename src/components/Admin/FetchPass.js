import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonText, IonInput, IonList, IonSegment } from '@ionic/react';
import Navbar from 'react-bootstrap/Navbar'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { connect } from "react-redux";
import { IonMenu, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonCardSubtitle, IonCardHeader, IonCardTitle, IonButton } from "@ionic/react";
import MenuBar from './MenuBarAdmin.js'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FetchHandler from "../../store/Fetch/FetchActions";
import swal from 'sweetalert';

const FetchPass = (props) => {
    const [id, setOrder] = useState(null);
    const [pass, setPass] = useState(null);
    const submit = () => {
        if (id) {
            console.log("hello Complete");
            const userDetails = { id, pass };
            console.log(userDetails)
            props.fetch(userDetails);
            var delayInMilliseconds = 2000; //1 second
            setTimeout(function () {
                if (localStorage.getItem('alert_fetch') == 'Success') {
                    swal({
                        text: "Successfully Updated",
                        icon: "success",
                        button: "Okay",
                    });
                }
                else {
                    swal({
                        text: "Unsuccessful Updation",
                        icon: "error",
                        button: "Okay",
                    });
                }
            }, delayInMilliseconds);
        }
    }
    return (
        <IonPage>
            <MenuBar />
            <IonCard
                color="dark"
                style={{
                    width: "40%",
                    height: "fit-content",
                    marginLeft: "28%",
                    marginTop: "16%",
                    marginBottom: "auto"
                }}>
                <IonCardHeader>
                    <IonCardTitle color="danger" class="ion-text-center">Change Employee Password</IonCardTitle>
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
                                            <Form.Control type="text" placeholder="Enter The SalesPerson ID" onChange={(e) => setOrder(e.target.value)} />
                                        </Form.Group>
                                    </div>
                                    <div>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control type="password" placeholder="Enter New Password" onChange={(e) => setPass(e.target.value)} />
                                        </Form.Group>
                                    </div>
                                    <div>
                                        <IonButton size="small" className="ion-margin-top" type="submit" onClick={submit} color="tertiary" expand="block">Change Password</IonButton>
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

const mapDispatchToProps = (dispatch) => {
    return {
        fetch: (userDetails) => {
            dispatch(FetchHandler(userDetails));
        },
    };
}

export default connect(null, mapDispatchToProps)(FetchPass);