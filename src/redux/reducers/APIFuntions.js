import axios from "axios";
import {setPost} from "../actions/postActions";
import {setComentPost} from "../actions/postComentActions";
import {intialStateComent} from "./postComentReducer";
import {setUserData} from "../actions/userDataActions";
import {intialStateuserData} from "./userDataReducer";

const header = {
    'app-id': '616aa1931f5bd50152fceaa5',
    'Content-Type': 'application/json'
}
export const getPostData = async (dispatch, page, tagsSelectState = "")=>{
    let tag ="";
    if(tagsSelectState!==""){
        tag = `/tag/${tagsSelectState}`;
    }
    let res = null;
    try{
        res = await axios.get(`https://dummyapi.io/data/v1${tag}/post/?page=${page}`, {
            headers:header
        });
        dispatch(setPost(res.data));
    }catch (err) {
        console.log(err.response.status);
        console.log(err.response.data);
    }
}
export const getPostComentData = async (dispatch, post)=>{
    dispatch(setComentPost(intialStateComent));
    let res = null;
    try{
        res = await axios.get(`https://dummyapi.io/data/v1/post/${post}/comment?limit=10`, {
            headers:header
        });
        dispatch(setComentPost(res.data));
    }catch (err) {
        console.log(err.response.status);
        console.log(err.response.data);
    }
}
export const getUserData = async (dispatch, id)=>{
    dispatch(setUserData(intialStateuserData));
    let res = null;
    try{
        res = await axios.get(`https://dummyapi.io/data/v1/user/${id}`, {
            headers:header
        });
        dispatch(setUserData(res.data))
    }catch (err) {
        console.log(err.response.status);
        console.log(err.response.data);
    }
}

export const getTagsData = async ()=>{
    let res = null;
    try{
        res = await axios.get(`https://dummyapi.io/data/v1/tag`, {
            headers:header
        });
        return res.data;
    }catch (err) {
        console.log(err.response.status);
        console.log(err.response.data);
    }
}