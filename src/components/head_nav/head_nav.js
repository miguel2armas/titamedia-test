import React from "react";
import "./head_nav.css"
import ImgLogo from "../../assets/images/logo/logo.png"
import {GoogleLogout} from "react-google-login";
import {useDispatch, useSelector} from "react-redux";
import {signOutUser} from "../../redux/actions/signUserActions";
import Button_theme from "../button_theme/button_theme";
const Head_nav = ()=>{
    const dispatch = useDispatch();
    let userState = useSelector((state)=>state.userState);
    const logout = ()=>{
        dispatch(signOutUser());
    }
    return <div>
            <nav className="nav-home">
                <ul className="nav-home-ul">
                    <li className="nav-home-li-out">
                        <Button_theme/>
                    </li>
                    <li className="nav-home-li-out">
                        <GoogleLogout
                            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                            buttonText="Logout"
                            icon={false}
                            onLogoutSuccess={logout}
                        />
                    </li>
                    <li className="nav-home-li-out user-name-nav">
                        <div>
                            {userState.name}
                        </div>
                        <div className="user-email">
                            {userState.email}
                        </div>
                    </li>
                    <li className="nav-home-li-img">
                        <img alt="img-user" className="user-img" src={userState.imageUrl}/>
                    </li>
                </ul>
            </nav>
        </div>
}
export default Head_nav