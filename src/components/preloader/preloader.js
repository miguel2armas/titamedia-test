import React from "react";
import "./preloader.css"
import imgLoader from "../../assets/images/svg/load_nav.svg"
import imgLogo from "../../assets/images/logo/logo.png"
const Preloader = (props) => {
  return <div className={`bg-preloader ${props.showLoad?(""):("body-hidden")}`}>
            <img alt="img logo" className="img-loader-logo" src={imgLogo}/>
            <img alt="loader" src={imgLoader} className="img-loader" />
          </div>
}
export default Preloader