import * as loginConstants from "./BillConstant";


const initState = {
    isLoading: false,
    loggedIn: false,
    user: {},
    alertMsg: "",
};

const BillReducer = (state = initState, action) => {
    switch (action.type) {
        case loginConstants.BILL_REQUEST:
            console.log("state changed");
            return {
                ...state,
                isLoading: true,
                error: "",
            };
        case loginConstants.BILL_SUCCESS:
            return {
                ...state,
                isLoading: false,
                loggedIn: true,
            };
        case loginConstants.BILL_FAILURE:
            console.log(action.payload);
            return {
                ...state,
                alertMsg: action.payload,
                loggingIn: false,
            };
        case loginConstants.BILLOUT:
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

export default BillReducer;
