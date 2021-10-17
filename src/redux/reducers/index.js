import { combineReducers } from "redux";
import {UserReducer} from "./signUserReducer";
import {themeReducer} from "./themeReducer";


const reducers = combineReducers({
    userState : UserReducer,
    themeState : themeReducer
});
export default reducers;