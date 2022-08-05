import {combineReducers} from "redux";
import accountReducer from "./accountReducer";

const reducers = combineReducers({
    accout: accountReducer
})

export default reducers