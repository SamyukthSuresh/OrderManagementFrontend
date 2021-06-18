import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonText, IonInput, IonList, IonIcon } from '@ionic/react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { connect } from "react-redux";
import ProfileHandler from "../../store/Profile/ProfileActions"
import './MenuBar'
import { IonTextarea, IonMenu, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonCardSubtitle, IonCardHeader, IonCardTitle, IonButton } from "@ionic/react";
import MenuBar from './MenuBar';
import profile from '../../assets/male.svg'
import {
    pencilOutline
} from "ionicons/icons";

const Account = (props) => {
    const [edit, setedit] = useState(false);
    const [modify, setmodify] = useState()
    const [value, setvalue] = useState("EDIT")
    const setModify = () => {
        if (edit == false) {
            setmodify(false);
            setedit(true)
            setvalue("SAVE")
        }
        else {
            setmodify(true);
            setedit(false)
            setvalue("EDIT")
        }
    }
    useEffect(() => {
        var id = localStorage.getItem("username").substring(0, 8)
        var userDetails = { id }
        props.profile(userDetails)
    }, []);
    return (
        <IonPage>
            <IonContent>
                <MenuBar />
                <div>
                    <IonList style={{ marginLeft: "42%", marginTop: "2%" }}>
                        <Image style={{ width: "170px", height: "170px" }} src={profile} roundedCircle />
                    </IonList>
                </div>
                <IonCard
                    style={{
                        width: "44%",
                        height: "fit-content",
                        position: "absolute",
                        marginLeft: "5%",
                        marginTop: "3%"
                    }}>
                    <IonCardHeader>
                        <IonLabel
                            className="font"
                            style={{ display: "inline-block", verticalAlign: "middle" }}
                        >
                            USER PERSONAL INFO
                         </IonLabel>

                        <IonButton
                            fill="clear"
                            onClick={setModify}
                            style={{
                                float: "right",
                                paddingBottom: 11,
                            }}
                            color="disabled"
                            size="medium"
                        >
                            <IonIcon
                                className="recharge"
                                color="primary"
                                size="medium"
                            />
                        </IonButton>
                    </IonCardHeader>
                    <IonCardContent style={{
                        marginLeft: "auto",
                    }}>
                        <Form>
                            <Row>
                                <Form.Group as={Row} controlId="formPlaintextEmail">
                                    <Form.Label column sm="5">
                                        First Name
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control plaintext disabled placeholder={props.details.first_name} />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formPlaintextEmail">
                                    <Form.Label column sm="5">
                                        Last Name
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control plaintext disabled placeholder={props.details.last_name} />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formPlaintextEmail">
                                    <Form.Label column sm="5">
                                        D-O-B
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control plaintext disabled placeholder={props.details.date_of_birth} />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formPlaintextPassword">
                                    <Form.Label column sm="5">
                                        Email
                                        </Form.Label>
                                    <Col sm="10">
                                        <Form.Control plaintext disabled placeholder="samyukth@gmail.com" />
                                    </Col>
                                </Form.Group>
                            </Row>
                        </Form>
                    </IonCardContent>
                </IonCard>
                <IonCard
                    style={{
                        width: "44%",
                        height: "fit-content",
                        position: "absolute",
                        marginLeft: "53%",
                        marginTop: "3%"
                    }}>
                    <IonCardHeader>
                        <IonCardTitle color="danger" class="ion-text-center">User Organisation information</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent style={{
                        marginLeft: "auto",
                    }}>
                        <Form>
                            <Form.Group as={Row} controlId="formPlaintextEmail">
                                <Form.Label column sm="5">
                                    EmpId
                                    </Form.Label>
                                <Col sm="10">
                                    <Form.Control plaintext readOnly defaultValue={props.details.emp_id} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formPlaintextEmail">
                                <Form.Label column sm="5">
                                    Role
                                    </Form.Label>
                                <Col sm="10">
                                    <Form.Control plaintext readOnly defaultValue="Salesperson" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formPlaintextEmail">
                                <Form.Label column sm="5">
                                    Joining Date
                                    </Form.Label>
                                <Col sm="10">
                                    <Form.Control plaintext readOnly defaultValue={props.details.date_of_joining} />
                                </Col>
                            </Form.Group>
                        </Form>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

const mapdispatchToProps = (dispatch) => {
    return {
        profile: (userDetails) => {
            dispatch(ProfileHandler(userDetails));
        },
    };
};

const mapStateToProps = (state) => {
    return {
        details: { ...state.profile.menu },
    };
};

export default connect(mapStateToProps, mapdispatchToProps)(Account);
/*<footer style={{ marginLeft: "auto" }}>
<IonButton size="medium" type="submit" color="tertiary">Register</IonButton>
</footer>*/
