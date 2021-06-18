import * as loginConstants from "./FetchConstant";

const initState = {
    menu: {},
};

const FetchReducer = (state = initState, action) => {
    switch (action.type) {
        case loginConstants.FETCH_REQUEST:
            console.log("state changed");
            return {
                ...state,
                isLoading: true,
            };
        case loginConstants.FETCH_SUCCESS:
            console.log(state.menu)
            return {
                ...state,
                isLoading: false,
                loggedIn: true,
                menu: {
                    "emp_id": action.payload.emp_id,
                    "password": action.payload.password
                },
            };
        case loginConstants.FETCH_FAILURE:
            console.log(action.payload);
            return {
                ...state,
                alertMsg: action.payload,
                loggingIn: false,
            };
        case loginConstants.FETCHOUT:
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

export default FetchReducer;
