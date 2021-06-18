import * as loginConstants from "./WarModConstants";
const Axios = require('axios');

const Request = (userDetails) => {
    return {
        type: loginConstants.WARMOD_REQUEST,
        payload: userDetails,
    };
};

const Success = (userDetails) => {
    return {
        type: loginConstants.WARMOD_SUCCESS,
        payload: userDetails,
    };
};

const Failure = (errorMessage) => {
    return {
        type: loginConstants.WARMOD_FAILURE,
        payload: errorMessage,
    };
};

const WarModHandler = (userDetails) => {
    return function (dispatch) {
        console.log(userDetails);
        dispatch(Request(userDetails));

        console.log("login request");

        Axios.post("http://localhost:3000/update", {
            name: userDetails.Name,
            price: userDetails.Price,
            qty: userDetails.Stock,
        }
        ).then((res) => {
            console.log(res.data);
            console.log("login success");
            dispatch(Success(res.data));
            localStorage.setItem("alert_warehouse", "Product Successfully added")
        })
            .catch((err) => {
                if (err.response) {
                    console.log("login failure");
                    console.log(err.response.data);
                    dispatch(Failure(err.response.data));
                    localStorage.setItem("alert_warehouse", "Product addition Unsuccessful")
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

export default WarModHandler;
