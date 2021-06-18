import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonText, IonInput, IonList } from '@ionic/react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import React, { useState } from 'react';
import Image from 'react-bootstrap/Image'
import { IonMenu, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonCardSubtitle, IonCardHeader, IonCardTitle, IonButton } from "@ionic/react";
import { Link } from 'react-router-dom';
import Typist from 'react-typist';

const welcomeAdmin = (props) => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" ticky="top">
                <Navbar.Brand>CEMENZO</Navbar.Brand>
                <Nav>
                    <Nav.Link href="/WareHouse/ProdMod">Modify Product</Nav.Link>
                    <Nav.Link href="/WareHouse/Prod">Add Product</Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Link to='/signin'>
                        <IonButton fill="clear">
                            LogOut
                            </IonButton>
                    </Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default welcomeAdmin;