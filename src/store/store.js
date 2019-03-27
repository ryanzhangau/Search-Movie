import { createStore, combineReducers, applyMiddleware } from "redux";
import movieReducer from "./reducers/movieReducer";
import logger from "redux-logger";

const store = createStore(
  combineReducers({
    movieReducer
  }),
  {},
  applyMiddleware(logger)
);

export default store;
