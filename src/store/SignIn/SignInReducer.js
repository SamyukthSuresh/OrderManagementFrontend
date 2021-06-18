import * as loginConstants from "./SignInConstant";

const initState = {
    isLoading: false,
    loggedIn: false,
    user: {},
    alertMsg: "",
};

const SignInReducer = (state = initState, action) => {
    switch (action.type) {
        case loginConstants.LOGIN_REQUEST:
            console.log("state changed");
            return {
                ...state,
                isLoading: true,
                user: {
                    email: action.payload.username
                },
                error: "",
            };
        case loginConstants.LOGIN_SUCCESS:
            localStorage.setItem("username", state.user.email)
            localStorage.setItem("user", state.user.email.substring(4, 6))
            return {
                ...state,
                isLoading: false,
                loggedIn: true,
                user: {
                    email: state.user.email
                },
            };
        case loginConstants.LOGIN_FAILURE:
            console.log(action.payload);
            return {
                ...state,
                alertMsg: action.payload,
                loggingIn: false,
                user: {},
            };
        case loginConstants.LOGOUT:
            return {
                ...state,
                isLoading: false,
                user: {},
                loggedIn: false,
            };

        default:
            return state;
    }
};

export default SignInReducer;
