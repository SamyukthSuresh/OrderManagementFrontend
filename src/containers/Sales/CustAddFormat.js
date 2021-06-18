/*Cust_ID (PK)
Company name
Address
Contact_Cust_id (FK)
Finance_id (FK)*/
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonText, IonInput, IonList, IonSegment } from '@ionic/react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import React, { useState } from 'react';
import '../../components/Sales/MenuBar'
import { IonMenu, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonCardSubtitle, IonCardHeader, IonCardTitle, IonButton } from "@ionic/react";
import MenuBar from '../../components/Sales/MenuBar';

const CustAddFormat = (props) => {

  const [customername, setCustomername] = useState("set");
  const [password, setPassword] = useState("set");

  const submit = (ans, name) => {

    console.log(ans);
    if (name == "AccountId") {
      setCustomername(ans)
    }
    console.log(customername);
    /* if (username && password) {
       console.log("hello Complete");
       const userDetails = { username, password };
       props.login(userDetails);*/
  }
  return (
    <Form>
      <IonText color="tertiary" style={{ marginTop: '10px', marginLeft: '1%' }}>
        {props.header}
      </IonText>
      <Form.Group controlId="formBasicEmail" style={{ marginTop: '10px', marginLeft: '1%', marginRight: "50%" }}>
        <Form.Control type="email" placeholder={props.Name1} key={props.Name1} onChange={(e) => submit(e.value, props.Name1)} />
      </Form.Group>

      <Form.Group controlId="formBasicPassword" style={{ marginTop: '10px', marginLeft: '1%', marginRight: "50%" }}>
        <Form.Control type="password" placeholder={props.Name2} />
      </Form.Group>

      {props.Name3 != 0 ? <Form.Group controlId="formBasicPassword" style={{ marginTop: '10px', marginLeft: '1%', marginRight: "50%" }}>
        <Form.Control type="password" placeholder={props.Name3} />
      </Form.Group> : null}

      {props.Name4 != 0 ? <Form.Group controlId="formBasicPassword" style={{ marginTop: '10px', marginLeft: '1%', marginRight: "50%" }}>
        <Form.Control type="password" placeholder={props.Name4} />
      </Form.Group> : null}

    </Form>
  );
};
export default CustAddFormat;