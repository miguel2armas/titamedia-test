import React from "react";
import "./post.css"
import moment from "moment";
import ImgLike from "../../../../assets/images/icons/like.png";
import ModalComent from "../../modal_coment/modalComent";
import ModalUser from "../../modal_user/modal_user";

const Post = (props) => {
  return <div className="grid-item">
      <div className="top-grip">
            <ModalUser userData={props.post.owner}/>
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
      <div className="coment-post">
          <ModalComent postId={props.post.id}/>
      </div>
  </div>
}
export default Post