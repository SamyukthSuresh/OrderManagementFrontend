import * as loginConstants from "./BillConstant";
const Axios = require('axios');

const Request = (userDetails) => {
    return {
        type: loginConstants.BILL_REQUEST,
        payload: userDetails,
    };
};

const Success = (userDetails) => {
    return {
        type: loginConstants.BILL_SUCCESS,
        payload: userDetails,
    };
};

const Failure = (errorMessage) => {
    return {
        type: loginConstants.BILL_FAILURE,
        payload: errorMessage,
    };
};

const BillHandler = (userDetails) => {
    return function (dispatch) {
        console.log("Order", userDetails[0].id);
        dispatch(Request(userDetails));

        console.log("login request");

        Axios.post("http://localhost:3000/bill", {
            id: userDetails[0].id,
            sp_id: userDetails[0].sp_id,
            cust_id: userDetails[0].cust_id,
            date: userDetails[0].date,
            incoterm: userDetails[0].incoterm,
            payment_terms: userDetails[0].payment_terms,
            data: userDetails[0].data
        }
        ).then((res) => {
            console.log(res.data);
            console.log("login success");
            dispatch(Success(res.data));
            localStorage.setItem("alert_bill", "Success")
        })
            .catch((err) => {
                if (err.response) {
                    console.log("login failure");
                    console.log(err.response.data);
                    dispatch(Failure(err.response.data));
                    localStorage.setItem("alert_bill", "Fail")
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

export default BillHandler;
