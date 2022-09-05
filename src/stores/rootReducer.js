import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import ToastsReducer from "./toasts/ToastsReducer";
import CommonReducer from "./common/CommonReducer";

export default history => {
  const reducerMap = {
    router: connectRouter(history),
    toasts: new ToastsReducer().reducer,
    common: new CommonReducer().reducer
  };

  return combineReducers(reducerMap);
};
