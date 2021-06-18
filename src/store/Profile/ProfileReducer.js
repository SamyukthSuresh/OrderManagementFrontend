import * as loginConstants from "./ProfileConstant";

const initState = {
    menu: {},
};

const ProfileReducer = (state = initState, action) => {
    switch (action.type) {
        case loginConstants.PROFILE_REQUEST:
            console.log("state changed");
            return {
                ...state,
                isLoading: true,
                menu: {
                    "emp_id": action.payload.emp_id,
                    "first_name": action.payload.first_name,
                    "last_name": action.payload.last_name,
                    "date_of_joining": action.payload.date_of_joining,
                    "date_of_birth": action.payload.date_of_birth,
                    "emp_street_no": action.payload.emp_street_no,
                    "emp_door_no": action.payload.emp_door_no,
                    "emp_pincode": action.payload.emp_pincode
                },
                error: "",
            };
        case loginConstants.PROFILE_SUCCESS:
            console.log(state.menu)
            return {
                ...state,
                isLoading: false,
                loggedIn: true,
                menu: {
                    "emp_id": action.payload.emp_id,
                    "first_name": action.payload.first_name,
                    "last_name": action.payload.last_name,
                    "date_of_joining": action.payload.date_of_joining,
                    "date_of_birth": action.payload.date_of_birth,
                    "emp_street_no": action.payload.emp_street_no,
                    "emp_door_no": action.payload.emp_door_no,
                    "emp_pincode": action.payload.emp_pincode
                },
            };
        case loginConstants.PROFILE_FAILURE:
            console.log(action.payload);
            return {
                ...state,
                alertMsg: action.payload,
                loggingIn: false,
            };
        case loginConstants.PROFILEOUT:
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

export default ProfileReducer;
