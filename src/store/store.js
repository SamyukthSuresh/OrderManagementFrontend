import menuReducer from "./Sales/orderReducer";
import SignInReducer from './SignIn/SignInReducer';
import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";
import CustAddReducer from "./CustAdd/CustAddReducer";
import ProfileReducer from "./Profile/ProfileReducer";
import ShipmentReducer from "./Shipment/ShipmentReducer";

var prevVerifiedNo = 0;

const rootReducer = combineReducers({
  menu: menuReducer,
  login: SignInReducer,
  register: CustAddReducer,
  profile: ProfileReducer,
  shipment: ShipmentReducer
});

// function loadFromLocalStorage() {
//   try {
//     const serializedState = localStorage.getItem("CurrQty");
//     if (serializedState === null) return undefined;
//     return serializedState;
//   } catch (e) {
//     console.log(e);
//     return undefined;
//   }
// }

// const persistedState = loadFromLocalStorage();
localStorage.setItem("user", null);
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
