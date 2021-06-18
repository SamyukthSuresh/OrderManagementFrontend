import * as loginConstants from "./IssueConstant";
const Axios = require('axios');

const Request = (userDetails) => {
    return {
        type: loginConstants.ISSUE_REQUEST,
        payload: userDetails,
    };
};

const Success = (userDetails) => {
    return {
        type: loginConstants.ISSUE_SUCCESS,
        payload: userDetails,
    };
};

const Failure = (errorMessage) => {
    return {
        type: loginConstants.ISSUE_FAILURE,
        payload: errorMessage,
    };
};

const IssueHandler = (userDetails) => {
    return function (dispatch) {
        console.log(userDetails);
        dispatch(Request(userDetails));

        console.log("login request");

        Axios.post("http://localhost:3000/issue", {
            id: userDetails.id,
            category: userDetails.category,
            desc: userDetails.desc,
            sp_id: userDetails.sp_id,
        }
        ).then((res) => {
            console.log(res.data);
            console.log("login success");
            dispatch(Success(res.data));
            localStorage.setItem("alert_issue", "Success")
        })
            .catch((err) => {
                if (err.response) {
                    console.log("login failure");
                    console.log(err.response.data);
                    dispatch(Failure(err.response.data));
                    localStorage.setItem("alert_issue", "Failure")
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

export default IssueHandler;
