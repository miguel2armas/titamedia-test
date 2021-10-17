import React from "react";
import Login from "../login/login";
import {useSelector} from "react-redux";
import Home from "./home";

const HomeInit = () => {
    let userState = useSelector((state)=>state.userState);
    return <>

      {userState.stateLogIn?(
          <Home/>
      ):(
          <Login/>
      )}
  </>
}
export default HomeInit