import {createStore, compose, applyMiddleware} from "redux";
import rootReducer from "../reducers/index"
import thunk from "redux-thunk";
import logger from "redux-logger";

const middleware = [thunk,logger];
const store = createStore(rootReducer, compose(applyMiddleware(...middleware)));

export default store;