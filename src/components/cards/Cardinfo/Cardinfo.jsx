import React, { useState } from "react";

import "./cardinfo.css";
import { BsCreditCard } from "react-icons/bs";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import EditableText from "../../Editabletext/Editabletext";
import Modal from "../../Modal/Modal";
import { RxCross2 } from "react-icons/rx";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

function Cardinfo(props ) {
  const [showList, setShowList] = useState(false);
  const board = useSelector((state) => state.board);
  const handleClose = () => {
    props.onClose(); 
    
  };
      
  return (
   
    <Modal onClose={() => props.onClose()}  >
      <RxCross2 className='cross-icon' onClick={handleClose} />
      <div className="cardinfo-container" >
      
        <div className="cardinfo-box">
          <div className="cardinfo-box_title">
            <BsCreditCard className="icon-title" />
          { board[props.columnInd].cards[props.taskIndex].task}
          </div>
          <div className="title-input">
            <input placeholder="Enter your title" />
          </div>
        </div>
        {/* box for description*/}
        <div className="cardinfo-box">
          <div className="cardinfo-box_title">
            <AiOutlineMenuUnfold className="icon-title" />
            Description{" "}
          </div>
          <div className="title-input">
            <EditableText />
          </div>
        </div>
        {/* box for activity */}
        <div className="cardinfo-box">
          <div className="cardinfo-box_title">
            <AiOutlineMenuUnfold className="icon-title" />
            Activity{" "}
          </div>
          <button onClick={() => setShowList(!showList)} className="hide-btn">
            {showList ? "showList" : " HideList"}
          </button>
          <ul style={{ display: showList ? " none" : " block" }}>
          { board[props.columnInd].cards[props.taskIndex].activity.map((data,ind)=>{
            return(
            <h6 key={ind}>
                {data}
            </h6>
            )
          })
          
          }
          </ul>
        </div>
        -
      </div>
    </Modal>
    
  );
}

export default Cardinfo;
