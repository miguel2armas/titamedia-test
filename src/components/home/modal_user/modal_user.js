import React, {useState} from "react";
import "./modal_user.css"
import {getUserData} from "../../../redux/reducers/APIFuntions";
import {useDispatch, useSelector} from "react-redux";
import imgLoading from "../../../assets/images/svg/load_nav_black.svg";
import moment from "moment";

const ModalUser = (props) => {
    const dispatch = useDispatch();
    let userDataState = useSelector((state)=>state.userDataState);
    const showUser = async (id)=>{
        setShowModal(true)
        await getUserData(dispatch, id)
    }
    const [showModal, setShowModal] = useState(false);
  return <div>
      <img onClick={()=>showUser(props.userData.id)} alt={`${props.userData.firstName} ${props.userData.lastName}`}
           className="img-user-modal" src={props.userData.picture}/>
      <div className={showModal?("bg-modal-user"):("bg-modal-user-none")}>
          <div className="modal-user">
              <div className="modal-user-close">
                  <span onClick={()=>setShowModal(false)}>X</span>
              </div>
              <div className="modal-title-user">
                  {props.userData.firstName} {props.userData.lastName}
              </div>
              <div className="modal-user-body">
                <div>
                    <img alt={`${props.userData.firstName} ${props.userData.lastName}`}
                         className="img-user-modal-profile" src={props.userData.picture}/>
                    <div className="user-profile">
                        <span className="profile-user-title">Name:</span> {props.userData.title} {props.userData.firstName} {props.userData.lastName}
                    </div>
                    {userDataState.id===-1?(
                        <img alt="loading" src={imgLoading} className="img-loading-user"/>
                    ):(
                        <>
                            <div className="user-profile">
                                <span className="profile-user-title">Email:</span> {userDataState.email}
                            </div>
                            <div className="user-profile">
                                <span className="profile-user-title">Phone:</span> {userDataState.phone}
                            </div>
                            <div className="user-profile">
                                <span className="profile-user-title">Date register:</span> {moment(userDataState.registerDate).format("DD/MM/YYYY")}
                            </div>
                            <div className="user-profile">
                                <span className="profile-user-title">Location:</span>
                                {userDataState.location.street?(<> <b>Street:</b> {userDataState.location.street}, </>):(<></>)}
                                {userDataState.location.city?(<><b>City:</b> {userDataState.location.city}, </>):(<></>)}
                                {userDataState.location.state?(<><b>State:</b> {userDataState.location.state}, </>):(<></>)}
                                {userDataState.location.country?(<><b>Country:</b> {userDataState.location.country}, </>):(<></>)}
                            </div>
                        </>
                    )}
                </div>
              </div>
          </div>
      </div>
  </div>
}
export default ModalUser