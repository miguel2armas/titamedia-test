import axios from "axios";
import {setPost} from "../actions/postActions";
import {setComentPost} from "../actions/postComentActions";
const header = {
    'app-id': '616aa1931f5bd50152fceaa5',
    'Content-Type': 'application/json'
}
let res = null;
export const getPostData = async (dispatch, page)=>{
    try{
        res = await axios.get(`https://dummyapi.io/data/v1/post/?page=${page}`, {
            headers:header
        });
    }catch (err) {
        console.log(err.response.status);
        console.log(err.response.data);
    }
    if(res?.data.data!==undefined){
        dispatch(setPost(res?.data))
    }

}
export const getPostComentData = async (dispatch, post)=>{
    try{
        res = await axios.get(`https://dummyapi.io/data/v1/post/${post}/comment?limit=10`, {
            headers:header
        });
    }catch (err) {
        console.log(err.response.status);
        console.log(err.response.data);
    }
    console.log(res?.data)
    /*if(res?.data.data!==undefined){
        dispatch(setComentPost(res?.data))
    }*/
}