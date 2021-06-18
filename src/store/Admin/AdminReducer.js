import * as loginConstants from "./AdminConstant";

const initState = {
    isLoading: false,
    loggedIn: false,
    user: {},
    alertMsg: "",
};

const AdminReducer = (state = initState, action) => {
    switch (action.type) {
        case loginConstants.ADMIN_REQUEST:
            console.log("state changed");
            return {
                ...state,
                isLoading: true,
                error: "",
            };
        case loginConstants.ADMIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                loggedIn: true,
            };
        case loginConstants.ADMIN_FAILURE:
            console.log(action.payload);
            return {
                ...state,
                alertMsg: action.payload,
                loggingIn: false,
            };
        case loginConstants.ADMINOUT:
            localStorage.clear();
            return {
                ...state,
                isLoading: false,
                loggedIn: false,
            };

        default:
            return state;
    }
};

export default AdminReducer;
