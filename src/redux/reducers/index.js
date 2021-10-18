import { combineReducers } from "redux";
import {UserReducer} from "./signUserReducer";
import {themeReducer} from "./themeReducer";
import {postReducer} from "./postReducer";
import {postComentReducer} from "./postComentReducer";
import {userDataReducer} from "./userDataReducer";
import {tagsSelectReducer} from "./tagsSelectReducer";
import {pageSelectReducer} from "./pageSelectReducer";


const reducers = combineReducers({
    userState : UserReducer,
    themeState : themeReducer,
    postState: postReducer,
    postComentState: postComentReducer,
    userDataState: userDataReducer,
    tagsSelectState: tagsSelectReducer,
    pageSelectState: pageSelectReducer
});
export default reducers;