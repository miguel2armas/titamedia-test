import React, {useEffect, useState} from "react";
import "./postList.css"
import imgLogo from "../../../assets/images/logo/logo.png"
import {getPostData} from "../../../redux/reducers/APIFuntions";
import {useDispatch, useSelector} from "react-redux";
import Post from "./post/post";
import {setPage} from "../../../redux/actions/pageSelectActions";
const PostList = () => {
    const dispatch = useDispatch();
    let postState = useSelector((state)=>state.postState);
    let tagsSelectState = useSelector((state)=>state.tagsSelectState);
    let pageSelectState = useSelector((state)=>state.pageSelectState);
    //const [paginateSelect, setPaginateSelect] = useState(0);
    useEffect(()=>{
        getPostData(dispatch, pageSelectState, tagsSelectState);
    }, [])
    const nextPage = async (state)=>{
            //setPaginateSelect(state);
        dispatch(setPage(state));
        await getPostData(dispatch, state, tagsSelectState);
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
  return <>
                {postState.data.length===0?(
                    <div className="loading-post">
                        <img className="loading-post-img" alt="loading" src={imgLogo}/>
                    </div>
                ):
                    (
                        <div className="grid-container">
                            {postState.data.map((post)=>{
                                return <Post post={post} key={post.id}/>
                            })}
                        </div>
                    )
                }

              <div className="div-paginate">
                  <button className="btn-paginate" disabled={pageSelectState <= 0} onClick={()=>nextPage(pageSelectState-1)}>Back</button>
                  <span className="text-paginate">{pageSelectState}/{Math.floor(postState.total / 20)}</span>
                  <button className="btn-paginate" disabled={pageSelectState >= Math.floor(postState.total / 20)} onClick={()=>nextPage(pageSelectState+1)}>Next</button>
              </div>
        </>
}
export default PostList