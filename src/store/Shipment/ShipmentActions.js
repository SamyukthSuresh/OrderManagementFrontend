import * as loginConstants from "./ShipmentConstant.js";
const Axios = require('axios');

const Request = (userDetails) => {
    return {
        type: loginConstants.SHIP_REQUEST,
        payload: userDetails,
    };
};

const Success = (userDetails) => {
    return {
        type: loginConstants.SHIP_SUCCESS,
        payload: userDetails,
    };
};

const Failure = (errorMessage) => {
    return {
        type: loginConstants.SHIP_FAILURE,
        payload: errorMessage,
    };
};

const ShipmentHandler = (value) => {
    return function (dispatch) {
        console.log(value);
        dispatch(Request(value));

        console.log("login request");

        Axios.post("http://localhost:3000/shipment", {
            ord_id: value.prod_id,
            date: value.date,
            box: value.box,
            desc: value.desc,
            address: value.add
        }
        ).then((res) => {
            console.log(res.data);
            console.log("login success");
            dispatch(Success(res.data));
            localStorage.setItem("alert_ship", "Successfully Updated")
        })
            .catch((err) => {
                if (err.response) {
                    console.log("login failure");
                    console.log(err.response.data);
                    localStorage.setItem("alert_ship", "Updation Unsuccessfull")
                    dispatch(Failure(err.response.data));
                } else {
                    console.log("not connected to internet");
                    dispatch(Failure("not connected to internet"));
                }
            })
            .finally(() => {
                console.log("stop loading");
            });
    };
};

export default ShipmentHandler;
