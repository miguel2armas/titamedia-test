import React from "react";
import "./footer.css"
import imgLogo from "../../assets/images/logo/logo.png"
const Footer = () => {
  return <footer className="footer">
              <div className="content-footer">
                  <img src={imgLogo} className="img-logo-footer" alt="logo"/>
              </div>
          </footer>
}
export default Footer