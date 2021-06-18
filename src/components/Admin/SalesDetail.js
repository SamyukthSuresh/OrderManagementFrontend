import { IonContent, IonHeader, IonPage, IonToast, IonTitle, IonToolbar, IonItem, IonLabel, IonText, IonInput, IonList } from '@ionic/react';
import Button from 'react-bootstrap/Button'
import React, { useState } from 'react';
import { IonMenu, IonGrid, IonRow, IonAlert, IonCol, IonCard, IonCardContent, IonCardSubtitle, IonCardHeader, IonCardTitle, IonButton } from "@ionic/react";
import MenuBar from './MenuBarAdmin.js'
import CustFormat from './SalesDetailFormat'
import '../../theme/Admin.css'
import { connect } from "react-redux";
import AdminHandler from "../../store/Admin/AdminActions";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import signpic from '../../assets/forms.svg'
import swal from 'sweetalert';

const SalesAdd = (props) => {
    const [fname, setfname] = useState(null);
    const [lname, setlname] = useState(null);
    const [username, setuser] = useState(null);
    const [password, setpass] = useState(null);
    const [phone1, setPhone1] = useState(null);
    const [showAlert3, setShowAlert3] = useState(false);
    const [phone2, setPhone2] = useState(null);
    const [dob, setdob] = useState(null);
    const [dept, setDept] = useState(null);
    const [doj, setDoj] = useState(null);
    const [add, setAdd] = useState(null);
    const submit = () => {
        if (fname && lname && username && password && phone1 && phone2 && dob && dept && doj && add) {
            console.log("hello Complete");
            const userDetails = { fname, lname, username, password, phone1, phone2, dob, dept, doj, add };
            console.log(userDetails)
            props.admin(userDetails);
            var delayInMilliseconds = 2000; //1 second
            setTimeout(function () {
                if (localStorage.getItem('alert_admin') == 'Successfully Registered User') {
                    swal({
                        text: "Successfully Registered User",
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
        <IonPage className="picture">
            <IonContent>
                <MenuBar />
                <Row style={{ marginLeft: "1%", marginTop: "1%" }}>
                    <Col>
                        <Form>
                            <IonText color="tertiary" style={{ marginTop: '10px', marginLeft: '1%' }}>
                                Employee Login Credentials
                            </IonText>
                            <Form.Group controlId="formBasicEmail" onChange={(e) => setuser(e.target.value)} style={{ marginTop: '10px', marginLeft: '1%', marginRight: "70%" }}>
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword" onChange={(e) => setpass(e.target.value)} style={{ marginTop: '10px', marginLeft: '1%', marginRight: "70%" }}>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col style={{ marginLeft: "-30%" }}>
                        <Form>
                            <IonText color="tertiary" style={{ marginTop: '10px', marginLeft: '-1%' }}>
                                Organisation Information
                            </IonText>
                            <Form.Group controlId="formBasicEmail" onChange={(e) => setDoj(e.target.value)} style={{ marginTop: '10px', marginLeft: '1%', marginRight: "70%" }}>
                                <Form.Label>Date Of Joining</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail" onChange={(e) => setDept(e.target.value)} style={{ marginTop: '10px', marginLeft: '1%', marginRight: "70%" }}>
                                <Form.Label>Department Name</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row style={{ marginLeft: "1%" }}>
                    <Col style={{ marginTop: "0%" }}>
                        <Form>
                            <IonText color="tertiary" style={{ marginTop: '10px', marginLeft: '1%' }}>
                                Contact Information
                            </IonText>
                            <Form.Group controlId="formBasicEmail" onChange={(e) => setPhone1(e.target.value)} style={{ marginTop: '10px', marginLeft: '1%', marginRight: "70%" }}>
                                <Form.Label>Phone 1</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail" onChange={(e) => setPhone2(e.target.value)} style={{ marginTop: '10px', marginLeft: '1%', marginRight: "70%" }}>
                                <Form.Label>Phone 2</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col style={{ marginTop: "1%", marginLeft: "-30%" }}>
                        <Form>
                            <IonText color="tertiary" style={{ marginTop: '10px', marginLeft: '1%' }}>
                                Employee General Info
                            </IonText>
                            <Form.Group controlId="formBasicEmail" onChange={(e) => setfname(e.target.value)} style={{ marginTop: '10px', marginLeft: '1%', marginRight: "70%" }}>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail" onChange={(e) => setlname(e.target.value)} style={{ marginTop: '10px', marginLeft: '1%', marginRight: "70%" }}>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row style={{ marginLeft: "0.3%", marginTop: "-1%" }}>
                    <Col>
                        <Form>
                            <IonText color="tertiary" style={{ marginTop: '10px', marginLeft: '1%' }}>
                                Detailed Information
                            </IonText>
                            <Form.Group controlId="formBasicEmail" onChange={(e) => setdob(e.target.value)} style={{ marginTop: '10px', marginLeft: '1%', marginRight: "85%" }}>
                                <Form.Label>Date of Birth</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail" onChange={(e) => setAdd(e.target.value)} style={{ marginTop: '10px', marginLeft: '1%', marginRight: "85%" }}>
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Button variant="primary" type="submit" onClick={submit} style={{ marginTop: '10px', marginLeft: '45%' }}>
                    Submit
                </Button>
                <IonToast
                    isOpen={true}
                    message="Sign In Successful"
                    duration={500}
                    color="success"
                    mode="ios"
                    animated={true}
                />
            </IonContent>
        </IonPage>
    );
};

const mapdispatchToProps = (dispatch) => {
    return {
        admin: (userDetails) => {
            dispatch(AdminHandler(userDetails));
        },
    };
};

export default connect(null, mapdispatchToProps)(SalesAdd);