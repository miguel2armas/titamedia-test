import React, {useEffect, useState} from "react";
import PostList from "./post_list/postList";
import HeadNav from "../head_nav/head_nav";
import Footer from "../footer/footer";
import Tags from "../tags/tags";

const Home = () => {
  return <div>
        <HeadNav/>
        <PostList/>
        <Tags/>
        <Footer/>
        </div>
}
export default Home