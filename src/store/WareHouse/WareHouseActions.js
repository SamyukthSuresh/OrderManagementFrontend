import * as loginConstants from "./WareHouseConstant";
const Axios = require('axios');


const Request = (userDetails) => {
    return {
        type: loginConstants.WAREHOUSE_REQUEST,
        payload: userDetails,
    };
};

const Success = (userDetails) => {
    return {
        type: loginConstants.WAREHOUSE_SUCCESS,
        payload: userDetails,
    };
};

const Failure = (errorMessage) => {
    return {
        type: loginConstants.WAREHOUSE_FAILURE,
        payload: errorMessage,
    };
};

const WareHouseHandler = (userDetails) => {
    return function (dispatch) {
        console.log(userDetails);
        dispatch(Request(userDetails));

        console.log("login request");

        Axios.post("http://localhost:3000/warehouse", {
            name: userDetails.name,
            category: userDetails.category,
            price: userDetails.price,
            qty: userDetails.qty,
            prod_id: userDetails.prod_id,
            desc: userDetails.desc
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

export default WareHouseHandler;
