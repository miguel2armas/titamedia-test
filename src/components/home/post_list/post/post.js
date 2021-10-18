import React from "react";
import "./post.css"
import moment from "moment";
import ImgLike from "../../../../assets/images/icons/like.png";
import {getPostComentData} from "../../../../redux/reducers/postFuntions";
import {useDispatch} from "react-redux";

const Post = (props) => {
    const dispatch = useDispatch();
    const showComents = async (id)=>{
        console.log(id)
        await getPostComentData(dispatch, id)
    }
  return <div className="grid-item">
      <div className="top-grip">
          <img alt="img-user" className="img-user-post" src={props.post.owner.picture}/>

          <div className="name-user-post">
              {props.post.owner.title} {props.post.owner.firstName} {props.post.owner.lastName}
          </div>
          <div className="date-public-post">
              {moment(props.post.publishDate).format("DD/MM/YYYY")}
          </div>
      </div>
      <img alt="img-post" className="img-post" src={props.post.image}/>
      <div className="like-post">
          <div className="div-like">
              <img className="img-like" alt="img-like" src={ImgLike}/>
              {props.post.likes}
          </div>
          <div className="tags-post-list">
              {props.post.tags.map((tag, key)=>{
                  return <div key={key} className="tags-post">{tag}</div>
              })}
          </div>
      </div>
      <div className="post-content">
          {props.post.text}
      </div>
      <div onClick={()=>showComents(props.post.id)} className="post-coment">
          Coments
      </div>
  </div>
}
export default Post