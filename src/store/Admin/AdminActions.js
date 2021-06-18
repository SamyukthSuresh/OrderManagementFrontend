import * as loginConstants from "./AdminConstant";
const Axios = require('axios');

const Request = (userDetails) => {
    return {
        type: loginConstants.ADMIN_REQUEST,
        payload: userDetails,
    };
};

const Success = (userDetails) => {
    return {
        type: loginConstants.ADMIN_SUCCESS,
        payload: userDetails,
    };
};

const Failure = (errorMessage) => {
    return {
        type: loginConstants.ADMIN_FAILURE,
        payload: errorMessage,
    };
};

const AdminHandler = (userDetails) => {
    return function (dispatch) {
        console.log(userDetails);
        dispatch(Request(userDetails));

        console.log("login request");

        Axios.post("http://localhost:3000/admin", {
            fName: userDetails.fname,
            lName: userDetails.lname,
            deptName: userDetails.dept,
            address: userDetails.add,
            dateOfBirth: userDetails.dob,
            DateofJoining: userDetails.doj,
            Phone1: userDetails.phone1,
            Phone2: userDetails.phone2,
            username: userDetails.username,
            password: userDetails.password
        }
        ).then((res) => {
            console.log(res.data);
            console.log("login success");
            localStorage.setItem("alert_admin", "Successfully Registered User")
            dispatch(Success(res.data));
        })
            .catch((err) => {
                if (err.response) {
                    console.log("login failure");
                    console.log(err.response.data);
                    localStorage.setItem("alert_admin", "Unsuccessful Registration of User")
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

export default AdminHandler;
