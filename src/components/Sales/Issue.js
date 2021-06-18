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
import MenuBar from '../../components/Sales/MenuBar';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import IssueHandler from "../../store/Issue/IssueActions";
import swal from 'sweetalert';

const Issue = (props) => {
    const [id, setOrder] = useState(null);
    const [sp_id, setSales] = useState(null);
    const [name, setName] = useState(null);
    const [category, setCat] = useState(null);
    const [desc, setDesc] = useState(null);
    const submit = () => {
        if (id && sp_id && category && desc) {
            console.log("hello Complete");
            const userDetails = { id, sp_id, name, category, desc };
            console.log(userDetails)
            props.issue(userDetails);
            var delayInMilliseconds = 2000; //1 second
            setTimeout(function () {
                if (localStorage.getItem('alert_issue') == 'Success') {
                    swal({
                        text: "Successfully Registered Issue",
                        icon: "success",
                        button: "Okay",
                    });
                }
                else {
                    swal({
                        text: "Registration Unsuccessful",
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
                    <IonCardTitle color="danger" class="ion-text-center">Register an Issue</IonCardTitle>
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
                                            <Form.Control type="text" placeholder="Order ID" onChange={(e) => setOrder(e.target.value)} />
                                        </Form.Group>
                                        <Form.Group controlId="formGridState" >
                                            <Form.Label>Problem Category</Form.Label>
                                            <Form.Control as="select" defaultValue="Choose..." onChange={(e) => setCat(e.target.value)}>
                                                <option>Choose...</option>
                                                <option>Service Problems</option>
                                                <option>Shipment Problems</option>
                                                <option>Product Mismatch</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control type="multiline" placeholder="Sales Person Id" onChange={(e) => setSales(e.target.value)} />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control type="multiline" placeholder="Problem Description" onChange={(e) => setDesc(e.target.value)} />
                                        </Form.Group>
                                    </div>
                                    <div>
                                        <IonButton size="small" className="ion-margin-top" type="submit" onClick={submit} color="tertiary" expand="block">Register</IonButton>
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
        issue: (userDetails) => {
            dispatch(IssueHandler(userDetails));
        },
    };
}

export default connect(null, mapDispatchToProps)(Issue);