import React from "react";
import {
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonGrid,
    IonRow,
    IonText,
} from "@ionic/react";
import MenuTile from "./orderTile";

const orderList = (props) => {
    return (
        <div>
            <IonText>
                <h3 style={{ textAlign: "center" }}>{props.category}</h3>
            </IonText>
            <IonGrid>
                {console.log(props.data, "Hi OrderList")}
                {props.data.map((q, i) => {
                    return (
                        <IonRow>
                            <MenuTile
                                key={q.prod_id}
                                itemId={q.prod_id}
                                itemName={q.name}
                                itemQty={q.CurrQty}
                                itemPrice={q.prod_price}
                                increment={() => props.incrementQty(q.prod_id, q.CurrQty)}
                                decrement={() => props.decrementQty(q.prod_id, q.CurrQty)}
                            />
                        </IonRow>
                    );
                })}
            </IonGrid>
        </div>
    );
};

export default orderList;
