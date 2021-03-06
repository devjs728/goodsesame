import { combineReducers } from "redux";
import { applyMiddleware, compose, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import user from "./user/reducer";
import main from "./main/reducer";
import modal from "./modal/reducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const reducers = combineReducers({
  user,
  main,
  modal,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducers,
  composeEnhancers(applyMiddleware(ReduxThunk))
);
