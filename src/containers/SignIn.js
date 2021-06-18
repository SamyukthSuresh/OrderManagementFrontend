import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonText, IonInput } from '@ionic/react';
import React, { useState } from 'react';
import SignInHandler from "../store/SignIn/SignInActions";
import CustAdd from './Sales/CustAdd'
import signpic from '../assets/undraw.svg'
import '../theme/SignIn.css'
import { connect } from "react-redux";
import Alert from 'react-bootstrap/Alert'
import { IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonCardSubtitle, IonCardHeader, IonCardTitle, IonButton } from "@ionic/react";

const SignIn = (props) => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [unameValidity, setunameValidity] = useState(false);
  const [pwordValidity, setpwordValidity] = useState(false);
  const [user, setUser] = useState("");
  const [show, setShow] = useState(false);
  const submit = () => {
    validateUsername();
    validatePassword();
    if (username && password) {
      console.log("hello Complete");
      const userDetails = { username, password };
      props.login(userDetails);
      var delayInMilliseconds = 2000; //1 second
      setTimeout(function () {
        if (localStorage.getItem('alert_signin') == 'Failure') {
          setShow(true);
        }
      }, delayInMilliseconds);
    }
  };

  const validatePassword = () => {
    if (username && !password) setpwordValidity(false);
    else setpwordValidity(true);
  };

  const validateUsername = () => {
    if (!username) setunameValidity(false);
    else setunameValidity(true);
  };


  return (
    <IonPage className="main"
      style={{
        justifyContent: "center",
      }}>
      <div style={{
        marginBottom: "30%",
        marginLeft: "34%"
      }}>
        <img src={signpic} alt="Girl in a jacket" width="400" height="400"></img>
      </div>
      <IonCard
        color="dark"
        style={{
          width: "40%",
          height: "fit-content",
          position: "absolute",
          marginLeft: "28%",
          boxShadow: "4px",
          marginBottom: "-4%",
        }}>
        <IonCardHeader>
          <IonCardTitle color="danger" class="ion-text-center">SignIn</IonCardTitle>
        </IonCardHeader>
        <IonCardContent style={{
          marginLeft: "auto",
        }}>
          <div>
            <IonGrid>
              <IonRow color="primary" class="ion-align-items-center">
                <IonCol >
                  <div>
                    <IonItem>
                      <IonInput onIonChange={(e) => setUsername(e.detail.value)} name="EmpId" type="email" placeholder="Username" ngModel></IonInput>
                    </IonItem>
                    <IonItem >
                      <IonInput onIonChange={event => setPassword(event.detail.value)} name="password" type="password" placeholder="Password" ngModel></IonInput>
                    </IonItem>
                  </div>
                  <div>
                    <IonButton onClick={submit} size="small" className="ion-margin-top" type="submit" color="tertiary" expand="block">Sign In</IonButton>
                  </div>
                  <Alert variant="danger" show={show} onClose={() => setShow(false)} dismissible>
                    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                    <p>
                      Invalid Credentials , Either Your Password Or Email Credentials is Wrong
                      </p>
                  </Alert>
                </IonCol>
              </IonRow>
            </IonGrid>
          </div>
        </IonCardContent>
      </IonCard>
    </IonPage>
  );
};

const mapStateToProps = (state) => {
  return {
    error: state.login.alertMsg,
    loggedIn: state.login.loggedIn,
    user: state.login.user
  };
};

const mapdispatchToProps = (dispatch) => {
  return {
    login: (userDetails) => {
      dispatch(SignInHandler(userDetails));
    },
  };
};

export default connect(mapStateToProps, mapdispatchToProps)(SignIn);
