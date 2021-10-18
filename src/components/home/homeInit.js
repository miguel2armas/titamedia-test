import React, {useEffect, useState} from "react";
import Login from "../login/login";
import {useSelector} from "react-redux";
import Home from "./home";
import Preloader from "../preloader/preloader";

const HomeInit = () => {
    let userState = useSelector((state)=>state.userState);
    const [preLoader, setPreLoader] = useState(true)
    useEffect(()=>{
        window.onload = ()=>{
            setTimeout(()=>setPreLoader(false), 1000)
        }
    }, [])
    return <div>
                    <Preloader showLoad={preLoader}/>
                  <div className={preLoader?("body-hidden"):("")}>
                      {userState.stateLogIn?(
                          <Home/>
                      ):(
                          <Login/>
                      )}
                  </div>
              </div>
}
export default HomeInit