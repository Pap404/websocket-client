import {combineReducers} from "redux";
import {websocketReducer} from "./websocketReducer";

const rootReducer = combineReducers({
    websocketReducer
});

export default rootReducer;