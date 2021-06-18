import * as loginConstants from "./FetchConstant";
const Axios = require('axios');

const Request = (userDetails) => {
    return {
        type: loginConstants.FETCH_REQUEST,
        payload: userDetails,
    };
};

const Success = (userDetails) => {
    return {
        type: loginConstants.FETCH_SUCCESS,
        payload: userDetails,
    };
};

const Failure = (errorMessage) => {
    return {
        type: loginConstants.FETCH_FAILURE,
        payload: errorMessage,
    };
};

const FetchHandler = (userDetails) => {
    return function (dispatch) {
        console.log(userDetails.id);
        dispatch(Request(userDetails));

        console.log("login request");

        Axios.post("http://localhost:3000/updatepass", {
            id: userDetails.id,
            password: userDetails.pass
        }).then((res) => {
            console.log(res.data);
            console.log("login success");
            dispatch(Success(res.data));
            localStorage.setItem("alert_fetch", "Success");
        })
            .catch((err) => {
                if (err.response) {
                    console.log("login failure");
                    console.log(err.response.data);
                    dispatch(Failure(err.response.data));
                    localStorage.setItem("alert_fetch", "Failure");
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

export default FetchHandler;
