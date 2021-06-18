import React from "react";
import {
    IonGrid,
    IonRow,
    IonCol,
    IonText,
} from "@ionic/react";

const orderTile = (props) => {
    { console.log(props.name, "MenuTile") }
    return (
        <IonGrid>
            <IonRow>
                <IonCol size="6">
                    <IonText style={{ color: "black" }}>{props.itemName}</IonText>
                </IonCol>
                <IonCol size="4.5">
                    <button onClick={props.decrement}>-</button>
                    <IonText style={{ paddingLeft: "8%", paddingRight: "8%", color: "black" }}>{props.itemQty}</IonText>
                    <button onClick={props.increment}>+</button>
                </IonCol>
                <IonCol size="1">
                    <IonText style={{ color: "black" }}>Rs.{props.itemPrice}</IonText>
                </IonCol>
            </IonRow>
        </IonGrid>
    );
};

export default orderTile;
