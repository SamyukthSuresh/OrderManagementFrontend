import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonText, IonInput } from '@ionic/react';
import React, { useState } from 'react';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import {
    logOutOutline
} from "ionicons/icons";
import { IonIcon, IonMenu, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonCardSubtitle, IonCardHeader, IonCardTitle, IonButton, IonList } from "@ionic/react";
const MenuBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" ticky="top">
                <Navbar.Brand>CEMENZO</Navbar.Brand>
                <Nav>
                    <Nav.Link href="/order">Order</Nav.Link>
                    <Nav.Link href="/custadd">Add Customer</Nav.Link>
                    <Nav.Link href="/issues">Issues</Nav.Link>
                    <Nav.Link href="/account">Account</Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Link to='/'>
                        <IonButton
                            fill="clear"
                            style={{
                                float: "right",
                                marginRight: "auto"

                            }}
                            color="disabled"
                            size="medium"
                        >
                            <IonIcon
                                className="recharge"
                                color="primary"
                                size="medium"
                                icon={logOutOutline}
                            />Logout
                    </IonButton>
                    </Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};
export default MenuBar;