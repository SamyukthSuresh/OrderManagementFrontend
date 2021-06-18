import * as loginConstants from "./WareHouseConstant";

const initState = {
    isLoading: false,
    loggedIn: false,
    user: {},
    alertMsg: "",
};

const WareHouseReducer = (state = initState, action) => {
    switch (action.type) {
        case loginConstants.WAREHOUSE_REQUEST:
            console.log("state changed");
            return {
                ...state,
                isLoading: true,
                error: "",
            };
        case loginConstants.WAREHOUSE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                loggedIn: true,
            };
        case loginConstants.WAREHOUSE_FAILURE:
            console.log(action.payload);
            return {
                ...state,
                alertMsg: action.payload,
                loggingIn: false,
            };
        case loginConstants.WAREHOUSEOUT:
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

export default WareHouseReducer;
