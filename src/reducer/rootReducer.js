import {combineReducers} from "redux";
import {websocketReducer} from "./websocketReducer";
import messageReducer from "./messageReducer";

const rootReducer = combineReducers({
    websocketReducer,
    messageReducer
});

export default rootReducer;