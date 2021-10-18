import React from "react";
import "./button_theme.css"
import {setDarkTheme, setLightTheme} from "../../redux/actions/themeActions";
import {useDispatch, useSelector} from "react-redux";

const Button_theme = () => {
    const dispatch = useDispatch();
    let themedata = useSelector((state)=>state.themeState);
    const checkTheme = () => {
        themedata.theme === "dark"?
            dispatch(setLightTheme())
            :
            dispatch(setDarkTheme())
        ;
    }
  return <div className="login-div-check-theme">
        <div className="login-div1-check-theme">
            <input className="login-check-theme" checked={themedata.theme === "dark"} onChange={()=>checkTheme()} type="checkbox"/>
            <i onClick={()=>checkTheme()}><span>Dark Mode</span></i>
        </div>
    </div>
}
export default Button_theme