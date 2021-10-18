import React from "react";
import "./coment.css"
import ModalUser from "../../modal_user/modal_user";
let moment = require('moment');
const Coment = (props) => {
  return <div className="div-coment">
          <div>
            <ModalUser userData={props.coment.owner}/>
          </div>
          <div className="section-coment">
              <div className="section-coment-top">
                  <div className="name-user-coment">
                      <span>{props.coment.owner.title} {props.coment.owner.firstName} {props.coment.owner.lastName}</span>
                  </div>
                  <div>
                      {props.coment.message}
                  </div>
              </div>
              <div className="coment-date">
                  {moment(props.coment.publishDate, "YYYYMMDD").fromNow()}
              </div>
          </div>
          </div>
}
export default Coment