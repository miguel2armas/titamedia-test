import React from "react";
import "./login.css"
import GoogleLogin from "react-google-login";
import {useDispatch} from "react-redux";
import {signInUser} from "../../redux/actions/signUserActions";
import ImgLogo from "../../assets/images/logo/logo.png"
import ButtonTheme from "../button_theme/button_theme";

const Login = () => {
  const dispatch = useDispatch();
  const responseGoogle = (e)=>{
    const userData={
      googleId:e.profileObj.googleId,
      name:e.profileObj.name,
      email:e.profileObj.email,
      imageUrl:e.profileObj.imageUrl
    }
    dispatch(signInUser(userData));
  }
  return <div className="div-login">
              <div className="btn-theme-login">
                <ButtonTheme/>
              </div>
                    <section className="section-login">
                      <div className="div1-login">
                        <img className="img-login" src={ImgLogo} alt="logo"/>
                        <h1 className="h1-login">Social Network - TITA MEDIA</h1>
                        <GoogleLogin
                            clientId="341846146220-8g6gupvq3en8g5q0n9u03kg3c5oe898r.apps.googleusercontent.com"
                            buttonText="Login with Google"
                            className="btn-google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            isSignedIn={true}
                            cookiePolicy={'single_host_origin'}
                        />
                      </div>

                    </section>
          </div>
}

export default Login