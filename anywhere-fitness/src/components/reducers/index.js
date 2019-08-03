import { combineReducers } from "redux";
import clientReducer from "./clientReducer";
import instructorReducer from "./InstructorReducer";

export default combineReducers({
    clientReducer,
    instructorReducer,
})