import * as loginConstants from "./ShipmentConstant.js";

const initState = {
    isLoading: false,
    loggedIn: false,
    user: {},
    alertMsg: "",
};

const ShipmentReducer = (state = initState, action) => {
    switch (action.type) {
        case loginConstants.SHIP_REQUEST:
            console.log("state changed");
            return {
                ...state,
                isLoading: true,
                error: "",
            };
        case loginConstants.SHIP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                loggedIn: true,
            };
        case loginConstants.SHIP_FAILURE:
            console.log(action.payload);
            return {
                ...state,
                alertMsg: action.payload,
                loggingIn: false,
            };
        case loginConstants.SHIPOUT:
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

export default ShipmentReducer;
