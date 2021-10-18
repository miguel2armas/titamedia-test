import React, {useEffect, useState} from "react";
import "./postList.css"
import ImgLike from "../../../assets/images/icons/like.png"
import {getPostData} from "../../../redux/reducers/postFuntions";
import {useDispatch, useSelector} from "react-redux";
import Post from "./post/post";
let moment = require('moment');
const PostList = () => {
    const dispatch = useDispatch();
    let postState = useSelector((state)=>state.postState);
    const [paginateSelect, setPaginateSelect] = useState(0);
    console.log({postState})
    useEffect(()=>{
        getPostData(dispatch, paginateSelect);
    }, [])
    const nextPage = async (state)=>{
            setPaginateSelect(state);
        await getPostData(dispatch, state);
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
  return <>
            <div className="grid-container">
                {postState.data.length===0?(
                    <div>loading</div>
                ):
                    postState.data.map((post)=>{
                        return <Post post={post} key={post.id}/>
                    })
                }

            </div>
              <div className="div-paginate">
                  <button className="btn-paginate" disabled={paginateSelect <= 0} onClick={()=>nextPage(paginateSelect-1)}>Back</button>
                  <span className="text-paginate">{paginateSelect}/{Math.ceil(postState.total / 20)}</span>
                  <button className="btn-paginate" disabled={paginateSelect >= Math.ceil(postState.total / 20)} onClick={()=>nextPage(paginateSelect+1)}>Next</button>
              </div>
        </>
}
export default PostList