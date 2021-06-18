import * as loginConstants from "./CustAddConstant";

const initState = {
    isLoading: false,
    loggedIn: false,
    user: {},
    alertMsg: "",
};

const CustAddReducer = (state = initState, action) => {
    switch (action.type) {
        case loginConstants.CUST_REQUEST:
            console.log("state changed");
            return {
                ...state,
                isLoading: true,
                error: "",
            };
        case loginConstants.CUST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                loggedIn: true,
            };
        case loginConstants.CUST_FAILURE:
            console.log(action.payload);
            return {
                ...state,
                alertMsg: action.payload,
                loggingIn: false,
            };
        case loginConstants.CUSTOUT:
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

export default CustAddReducer;
