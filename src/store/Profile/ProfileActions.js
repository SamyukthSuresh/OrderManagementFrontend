import * as loginConstants from "./ProfileConstant";
const Axios = require('axios');

const Request = (userDetails) => {
    return {
        type: loginConstants.PROFILE_REQUEST,
        payload: userDetails,
    };
};

const Success = (userDetails) => {
    return {
        type: loginConstants.PROFILE_SUCCESS,
        payload: userDetails,
    };
};

const Failure = (errorMessage) => {
    return {
        type: loginConstants.PROFILE_FAILURE,
        payload: errorMessage,
    };
};

const ProfileHandler = (userDetails) => {
    return function (dispatch) {
        console.log(userDetails.id);
        dispatch(Request(userDetails));

        console.log("login request");

        Axios.get("http://localhost:3000/profile/" + userDetails.id, {
            params: {
                id: userDetails.id,
            }
        }).then((res) => {
            console.log(res.data);
            console.log("login success");
            dispatch(Success(res.data));
        })
            .catch((err) => {
                if (err.response) {
                    console.log("login failure");
                    console.log(err.response.data);
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

export default ProfileHandler;
