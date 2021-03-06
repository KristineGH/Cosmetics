import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducer/reducer";

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

export default store;
