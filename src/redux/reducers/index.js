import { combineReducers } from "redux";
import {UserReducer} from "./signUserReducer";
import {themeReducer} from "./themeReducer";
import {postReducer} from "./postReducer";
import {postComentReducer} from "./postComentReducer";


const reducers = combineReducers({
    userState : UserReducer,
    themeState : themeReducer,
    postState: postReducer,
    postComentState: postComentReducer
});
export default reducers;