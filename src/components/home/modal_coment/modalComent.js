import React, {useState} from "react";
import "./modalComent.css"
import {useDispatch, useSelector} from "react-redux";
import {getPostComentData} from "../../../redux/reducers/APIFuntions";
import Coment from "./coment/coment";
import imgLoading from "../../../assets/images/svg/load_nav_black.svg"
const ModalComent = (props) => {
    const dispatch = useDispatch();
    let postComentState = useSelector((state)=>state.postComentState);
    const showComents = async (id)=>{
        setShowModal(true)
        await getPostComentData(dispatch, id)
    }
    const [showModal, setShowModal] = useState(false);

  return <div>
          <div onClick={()=>showComents(props.postId)} className="post-coment">
              Coments
          </div>
          <div className={showModal?("bg-modal-coment"):("bg-modal-coment-none")}>
            <div className="modal-coment">
              <div className="modal-coment-close">
                <span onClick={()=>setShowModal(false)}>X</span>
              </div>
                <div className="modal-title-coment">
                    Comentarios
                </div>
                <div className="modal-coment-body">
                    {postComentState.total===-1?(
                        <img alt="loading" src={imgLoading} className="img-loading-coments"/>
                    ):(
                        postComentState.data.length===0?
                            (
                                <div className="text-no-coment">👉 No coments 👈</div>
                            ):(
                                postComentState.data.map((coment)=>{
                                    return <Coment key={coment.id} coment={coment}/>
                                })
                            )
                    )}

                </div>
            </div>
          </div>
          </div>
}
export default ModalComent