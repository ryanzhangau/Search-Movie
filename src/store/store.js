import { createStore, combineReducers, applyMiddleware } from "redux";
import movieReducer from "./reducers/movieReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const store = createStore(
  combineReducers({
    movieReducer
  }),
  {},
  applyMiddleware(logger, thunk)
);

export default store;
