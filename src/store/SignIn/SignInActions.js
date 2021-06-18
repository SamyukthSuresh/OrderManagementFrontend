import * as loginConstants from "./SignInConstant";
const Axios = require('axios');

const loginRequest = (userDetails) => {
    return {
        type: loginConstants.LOGIN_REQUEST,
        payload: userDetails,
    };
};

const loginSuccess = (userDetails) => {
    return {
        type: loginConstants.LOGIN_SUCCESS,
        payload: userDetails,
    };
};

const loginFailure = (errorMessage) => {
    return {
        type: loginConstants.LOGIN_FAILURE,
        payload: errorMessage,
    };
};

const SignInHandler = (userDetails) => {
    return function (dispatch) {
        console.log(userDetails);
        dispatch(loginRequest(userDetails));

        console.log("login request");

        Axios.post("http://localhost:3000/signin", {
            email: userDetails.username,
            password: userDetails.password,
        })
            .then((res) => {
                console.log(res.data);
                console.log("login success");
                dispatch(loginSuccess(res.data));
                localStorage.setItem("alert_signin", "Success");
            })
            .catch((err) => {
                if (err.response) {
                    console.log("login failure");
                    console.log(err.response.data);
                    dispatch(loginFailure(err.response.data));
                    localStorage.setItem("alert_signin", "Failure");
                } else {
                    console.log("not connected to internet");
                    dispatch(loginFailure("not connected to internet"));
                }
            })
            .finally(() => {
                console.log("stop loading");
            });
    };
};

export default SignInHandler;
