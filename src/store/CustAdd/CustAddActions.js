import * as loginConstants from "./CustAddConstant";
const Axios = require('axios');

const Request = (userDetails) => {
    return {
        type: loginConstants.CUST_REQUEST,
        payload: userDetails,
    };
};

const Success = (userDetails) => {
    return {
        type: loginConstants.CUST_SUCCESS,
        payload: userDetails,
    };
};

const Failure = (errorMessage) => {
    return {
        type: loginConstants.CUST_FAILURE,
        payload: errorMessage,
    };
};

const CustAddHandler = (userDetails) => {
    return function (dispatch) {
        console.log(userDetails);
        dispatch(Request(userDetails));

        console.log("login request");

        Axios.post("http://localhost:3000/customer", {
            id: userDetails.CustId,
            Name: userDetails.Custname,
            spid: userDetails.Sales,
            address: userDetails.Address,
            finance_id: userDetails.finance,
            account: userDetails.Acc,
            ifs_code: userDetails.Ifsc,
            entity: userDetails.Entity,
            Phone1: userDetails.Phone1,
            Phone2: userDetails.Phone2,
            email: userDetails.Email
        }
        ).then((res) => {
            console.log(res.data);
            console.log("login success");
            dispatch(Success(res.data));
            localStorage.setItem("alert_Cust", "Success")
        })
            .catch((err) => {
                if (err.response) {
                    console.log("login failure");
                    console.log(err.response.data);
                    dispatch(Failure(err.response.data));
                    localStorage.setItem("alert_Cust", "Failure")
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

export default CustAddHandler;
