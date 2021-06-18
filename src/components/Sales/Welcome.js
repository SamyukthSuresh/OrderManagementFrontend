import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonText, IonInput, IonList } from '@ionic/react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import React, { useState } from 'react';
import Image from 'react-bootstrap/Image'
import './MenuBar'
import { IonMenu, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonCardSubtitle, IonCardHeader, IonCardTitle, IonButton } from "@ionic/react";
import '../../theme/Welcome.css';
import { Link } from 'react-router-dom';
import Typist from 'react-typist';

const Welcome = (props) => {
    return (
        <IonPage className="main">
            <div>
                <Navbar bg="dark" variant="dark" ticky="top">
                    <Navbar.Brand>CEMENZO</Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <Link to='/signin'>
                            <IonButton fill="clear">
                                Sign In
                            </IonButton>
                        </Link>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            <Typist>
                <IonLabel style={{ fontSize: "5em", margin: 0, padding: 0, textalign: 'center', fontfamily: 'Monospace', position: 'absolute', top: '25%', left: '40%' }}>
                    CEMENZO
                    </IonLabel>
                <IonLabel style={{ fontSize: "2em", margin: 0, padding: 0, textalign: 'center', fontfamily: 'Courier', position: 'absolute', top: '40%', left: '38%' }}>
                    Towards a Sustainable Tomorrow
                </IonLabel>
            </Typist>
        </IonPage>
    );
};

export default Welcome;