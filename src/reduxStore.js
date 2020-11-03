import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import logger from "redux-logger";

var middlewares = applyMiddleware(thunk, logger);
const store = createStore(reducers,middlewares);
export default store;