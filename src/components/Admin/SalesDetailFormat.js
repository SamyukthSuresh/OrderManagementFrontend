import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonText, IonInput, IonList, IonSegment } from '@ionic/react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { IonMenu, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonCardSubtitle, IonCardHeader, IonCardTitle, IonButton } from "@ionic/react";
import MenuBar from '../../components/Sales/MenuBar';

const SalesAddFormat = (props) => {
    return (
        <Form>
            <IonText color="tertiary" style={{ marginTop: '10px', marginLeft: '1%' }}>
                {props.header}
            </IonText>
            <Form.Group controlId="formBasicEmail" style={{ marginTop: '10px', marginLeft: '1%', marginRight: "70%" }}>
                <Form.Label>{props.Name1}</Form.Label>
                <Form.Control type={props.type1} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword" style={{ marginTop: '10px', marginLeft: '1%', marginRight: "70%" }}>
                <Form.Label>{props.Name2}</Form.Label>
                <Form.Control type={props.type2} />
            </Form.Group>
            {props.Name3 != 0 ? <Form.Group controlId="formBasicPassword" style={{ marginTop: '10px', marginLeft: '1%', marginRight: "70%" }}>
                <Form.Label>{props.Name3}</Form.Label>
                <Form.Control type={props.type3} />
            </Form.Group> : null}
        </Form>
    );
};

export default SalesAddFormat;