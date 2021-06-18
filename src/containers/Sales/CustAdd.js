import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonText, IonInput, IonList } from '@ionic/react';
import Button from 'react-bootstrap/Button'
import React, { useState } from 'react';
import '../../components/Sales/MenuBar'
import { connect } from "react-redux";
import CustAddHandler from "../../store/CustAdd/CustAddActions";
import { IonMenu, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonCardSubtitle, IonCardHeader, IonCardTitle, IonButton } from "@ionic/react";
import MenuBar from '../../components/Sales/MenuBar';
import CustFormat from './CustAddFormat'
import Form from 'react-bootstrap/Form'
import swal from 'sweetalert';
const CustAdd = (props) => {
  const [Custname, setCust] = useState(null);
  const [Address, setAddress] = useState(null);
  const [Sales, setSales] = useState(null);
  const [Entity, setEntity] = useState(null);
  const [Ifsc, setIfsc] = useState(null);
  const [Acc, setAcc] = useState(null);
  const [CustId, setCustId] = useState(null);
  const [Phone1, setPhone1] = useState(null);
  const [Phone2, setPhone2] = useState(null);
  const [Email, setEmail] = useState(null);

  const submit = () => {
    if (Custname && Address && Sales && Entity && Ifsc && Acc && CustId && Phone1 && Phone2 && Email) {
      console.log("hello Complete");
      const userDetails = { Custname, Address, Sales, Entity, Ifsc, Acc, CustId, Phone1, Phone2, Email };
      console.log(userDetails)
      props.register(userDetails);
      var delayInMilliseconds = 2000; //1 second
      setTimeout(function () {
        if (localStorage.getItem('alert_Cust') == 'Success') {
          swal({
            text: "Customer Information Registered Successfully",
            icon: "success",
            button: "Okay",
          });
        }
        else {
          swal({
            text: "Registration Unsuccessfull",
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
      <IonContent>
        <Form>
          <IonText color="tertiary" style={{ marginTop: '10px', marginLeft: '1%' }}>
            {"Customer general Info"}
          </IonText>
          <Form.Group controlId="formBasicEmail" style={{ marginTop: '10px', marginLeft: '1%', marginRight: "50%" }}>
            <Form.Control type="email" onChange={(e) => setCust(e.target.value)} placeholder={"Customer Name"} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" style={{ marginTop: '10px', marginLeft: '1%', marginRight: "50%" }}>
            <Form.Control type="email" placeholder={'Address'} onChange={(e) => setAddress(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" style={{ marginTop: '10px', marginLeft: '1%', marginRight: "50%" }}>
            <Form.Control type="email" placeholder={"SalesPerson"} onChange={(e) => setSales(e.target.value)} />
          </Form.Group>
        </Form>
        <Form>
          <IonText color="tertiary" style={{ marginTop: '10px', marginLeft: '1%' }}>
            {"Customer Financail Info"}
          </IonText>
          <Form.Group controlId="formBasicEmail" style={{ marginTop: '10px', marginLeft: '1%', marginRight: "50%" }}>
            <Form.Control type="email" placeholder={"Entity Name"} onChange={(e) => setEntity(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" style={{ marginTop: '10px', marginLeft: '1%', marginRight: "50%" }}>
            <Form.Control type="email" placeholder={'IFSC CODE'} onChange={(e) => setIfsc(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" style={{ marginTop: '10px', marginLeft: '1%', marginRight: "50%" }}>
            <Form.Control type="email" placeholder={"Accout Number"} onChange={(e) => setAcc(e.target.value)} />
          </Form.Group>
        </Form>
        <Form>
          <IonText color="tertiary" style={{ marginTop: '10px', marginLeft: '1%' }}>
            {"Customer Contact Info"}
          </IonText>
          <Form.Group controlId="formBasicEmail" style={{ marginTop: '10px', marginLeft: '1%', marginRight: "50%" }}>
            <Form.Control type="email" placeholder={"Customer Id"} onChange={(e) => setCustId(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" style={{ marginTop: '10px', marginLeft: '1%', marginRight: "50%" }}>
            <Form.Control type="email" placeholder={'Phone Number 1'} onChange={(e) => setPhone1(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" style={{ marginTop: '10px', marginLeft: '1%', marginRight: "50%" }}>
            <Form.Control type="email" placeholder={"Phone Number 2"} onChange={(e) => setPhone2(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" style={{ marginTop: '10px', marginLeft: '1%', marginRight: "50%" }}>
            <Form.Control type="email" placeholder={"Email"} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>
        </Form>
        <Button variant="primary" onClick={submit} type="submit" style={{ marginTop: '10px', marginLeft: '1%' }}>
          Submit
                </Button>
      </IonContent>
    </IonPage>
  );
}

const mapdispatchToProps = (dispatch) => {
  return {
    register: (userDetails) => {
      dispatch(CustAddHandler(userDetails));
    },
  };
};

export default connect(null, mapdispatchToProps)(CustAdd);