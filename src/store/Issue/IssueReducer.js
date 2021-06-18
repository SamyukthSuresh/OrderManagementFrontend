import * as loginConstants from "./IssueConstant";

const initState = {
    isLoading: false,
    loggedIn: false,
    user: {},
    alertMsg: "",
};

const IssueReducer = (state = initState, action) => {
    switch (action.type) {
        case loginConstants.ISSUE_REQUEST:
            console.log("state changed");
            return {
                ...state,
                isLoading: true,
                error: "",
            };
        case loginConstants.ISSUE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                loggedIn: true,
            };
        case loginConstants.ISSUE_FAILURE:
            console.log(action.payload);
            return {
                ...state,
                alertMsg: action.payload,
                loggingIn: false,
            };
        case loginConstants.ISSUEOUT:
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

export default IssueReducer;
