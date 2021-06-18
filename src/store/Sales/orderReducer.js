import { BUY_ITEM, CANCEL_ITEM } from "./orderConstants";
import * as menuConstants from "./orderConstants"


/*const initialState = [
  {
    category: "Materials",
    data: [
      { id: "nci01", Name: "Cement Grade-1", Qty: 10, Price: "100" },
      { id: "nci02", Name: "Cement Grade-2", Qty: 10, Price: "150" },
      { id: "nci03", Name: "Bricks", Qty: 10, Price: "20" },
      { id: "nci04", Name: "Steel", Qty: 10, Price: "50" },
      { id: "nci05", Name: "PFISTER TRW-K", Qty: 30, Price: "35" },
      { id: "nci06", Name: "Airlift", Qty: 30, Price: "50" },
      { id: "nci07", Name: "Multi-Temperature Thermogravimetric Analysers", Qty: 30, Price: "50" },
      { id: "nci08", Name: "Gyratory Crusher TS", Qty: 30, Price: "50" }
    ],
  },
];*/

var initialState = [
  {
    category: "Materials",
    data: [],
  }
]

/*const changeState = () => {
  console.log(initialState[0].data, "data")

  let s = localStorage.getItem("CurrQty");
  if (s !== null) {
    s = s.split(",");
    s = s.map((t) => {
      return parseInt(t);
    });
  }
  let i = 0;
  const tmp = initialState.map(({ category, data }) => {
    return {
      category: category,
      data: data.map((q) => {
        return { ...q, CurrQty: 0 };
      }),
    };
  });
  return tmp;
};
*/


const menuReducer = (state = initialState, action, dispatch) => {
  switch (action.type) {
    case BUY_ITEM:
      return state.map(({ category, data }) => {
        return {
          category: category,
          data: data.map((q) => {
            return q.prod_id === action.payload
              ? {
                ...q,
                CurrQty: q.CurrQty !== q.product_avail ? q.CurrQty + 1 : q.CurrQty,
              }
              : { ...q };
          }),
        };
      });

    case CANCEL_ITEM:
      return state.map(({ category, data }) => {
        return {
          category: category,
          data: data.map((q) => {
            return q.prod_id === action.payload
              ? { ...q, CurrQty: q.CurrQty !== 0 ? q.CurrQty - 1 : 0 }
              : { ...q };
          }),
        };
      });
    case menuConstants.MENU_REQUEST:
      console.log("state changed");
      console.log("cool working request")
      return {
        ...state,
      };
    case menuConstants.MENU_SUCCESS:
      console.log("reducer menu", action.payload)
      action.payload = action.payload.map((data) => {
        return {
          ...data, CurrQty: 0
        };
      });
      return [{
        category: "Materials",
        data: [...action.payload]
      }];
    case menuConstants.MENU_FAILURE:
      console.log(action.payload);
      return {
        ...state,
        error: action.payload
      };
    case menuConstants.MENUOUT:
      return {
        ...state,
        isLoading: false,
        loggedIn: false,
      };
    default:
      return state;
  }
};

export default menuReducer;
