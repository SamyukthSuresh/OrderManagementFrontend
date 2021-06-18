import React, { useState, useEffect } from "react";
import { IonContent, IonHeader, IonToast, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonText, IonInput, IonList, IonButton } from '@ionic/react';
import { connect } from "react-redux";
import MenuBar from "../../components/Sales/MenuBar";
import MenuList from "../../components/Sales/orderList";
import * as menuActions from "../../store/Sales/orderActions";
import MenuHandler from '../../store/Sales/orderActions';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import { ToastContainer, toast, useToast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Menu = (props) => {
    useEffect(() => {
        console.log("useEffect")
        var id = 'hey fetch order';
        var userDetails = { id }
        props.menu(userDetails)
    }, []);
    const incrementQty = (itemId, CurrQty) => {
        props.increment(itemId);

    };
    const decrementQty = (itemId, CurrQty) => {
        props.decrement(itemId);

    };
    return (
        <IonPage>
            <IonContent>
                <ion-scroll scrollX="true">
                    {console.log("inside return")}
                    <MenuBar />
                    <div style={{ background: "white", height: "100%", width: "100%" }}>
                        {console.log(props.menuState[0].data, "user")}
                        {props.menuState.map((q) => {
                            return (
                                <MenuList
                                    category={q.category}
                                    data={q.data}
                                    incrementQty={incrementQty}
                                    decrementQty={decrementQty}
                                />
                            );
                        })}
                    </div>
                    <Navbar fixed="bottom" sticky="bottom" bg="dark" variant="dark">
                        <Navbar.Collapse className="justify-content-end">
                            <Link to='/cart'>
                                <Button variant="outline-info">View Cart Details</Button>
                            </Link>
                        </Navbar.Collapse>
                    </Navbar>
                    <IonToast
                        isOpen={true}
                        message="Sign In Successful"
                        duration={500}
                        color="success"
                        mode="ios"
                        animated={true}
                    />
                </ion-scroll>
            </IonContent>
        </IonPage>
    );
};

const mapStateToProps = (state) => {
    console.log("mapState", state.menu)
    return {
        menuState: [...state.menu],
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: (id) => {
            dispatch(menuActions.incrementQty(id));
        },
        decrement: (id) => {
            dispatch(menuActions.decrementQty(id));
        },
        menu: (userDetails) => {
            dispatch(MenuHandler(userDetails));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
/*{props.menuState.map((q) => {
    return (
        <MenuList
            category={q.category}
            data={q.data}
            incrementQty={incrementQty}
            decrementQty={decrementQty}
        />
    );
})}*/