import React from "react";
import "./postList.css"
import ImgLike from "../../../assets/images/icons/like.png"
const PostList = () => {
  return <>
            <div className="grid-container">
                <div className="grid-item">
                    <div className="top-grip">
                        <img className="img-user-post" src="https://randomuser.me/api/portraits/women/58.jpg"/>

                        <div className="name-user-post">
                            ms. Sara Andersen
                        </div>
                        <div className="date-public-post">
                            12/05/2021
                        </div>
                    </div>
                    <img alt="img-post" className="img-post" src="https://img.dummyapi.io/photo-1564694202779-bc908c327862.jpg"/>
                    <div className="like-post">
                        <div className="div-like">
                            <img className="img-like" alt="img-like" src={ImgLike}/>
                            78
                        </div>
                        <div className="tags-post-list">
                            <div className="tags-post">tags1</div>
                            <div className="tags-post">tags1</div>
                            <div className="tags-post">tags1</div>
                        </div>
                    </div>
                    <div className="post-content">
                        text adult Labrador retrieveradult Labrador retrieveradult Labrador retriever
                    </div>

                </div>


            </div>
        </>
}
export default PostList