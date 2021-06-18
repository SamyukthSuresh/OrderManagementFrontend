import * as menuConstants from "./orderConstants"
const Axios = require('axios');

export const incrementQty = (id) => {
  return {
    type: menuConstants.BUY_ITEM,
    payload: id
  }
}

export const decrementQty = (id) => {
  return {
    type: menuConstants.CANCEL_ITEM,
    payload: id
  }
}

const Request = (userDetails) => {
  return {
    type: menuConstants.MENU_REQUEST,
    payload: userDetails,
  };
};

const Success = (userDetails) => {
  return {
    type: menuConstants.MENU_SUCCESS,
    payload: userDetails,
  };
};

const Failure = (errorMessage) => {
  return {
    type: menuConstants.MENU_FAILURE,
    payload: errorMessage,
  };
};

const MenuHandler = (userDetails) => {
  return function (dispatch) {
    dispatch(Request(userDetails));

    console.log("login request");

    Axios.get("http://localhost:3000/menu/" + "fetch", {
    }).then((res) => {
      console.log(res.data);
      console.log("login success");
      dispatch(Success(res.data));
    }).catch((err) => {
      if (err.response) {
        console.log("login failure");
        console.log(err.response.data);
        dispatch(Failure(err.response.data));
      } else {
        console.log("not connected to internet");
        dispatch(Failure("not connected to internet"));
      }
    }).finally(() => {
      console.log("stop loading");
    });
  };
};

export default MenuHandler;
