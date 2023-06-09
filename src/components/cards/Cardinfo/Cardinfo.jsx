import React, { useState } from "react";

import "./cardinfo.css";
import { BsCreditCard } from "react-icons/bs";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import {FaRegHandPointRight } from "react-icons/fa";
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
    //  const newData=[...props]
    //  console.log(newData)
    
  return (
   
    <Modal onClose={() => props.onClose()}  >
      <RxCross2 className='cross-icon' onClick={handleClose} />
      <div className="cardinfo-container" >
      
        <div className="cardinfo-box">
          <div className="cardinfo-box_title">
            <BsCreditCard className="icon-title" />
          { board[props.columnInd].cards[props.taskIndex].task}
          <h5>
           in list  { board[props.columnInd].title}
          </h5>
          </div>
          
          </div>
        {/* box for description*/}
        <div className="cardinfo-box">
          <div className="cardinfo-box_title">
            <AiOutlineMenuUnfold className="icon-title" />
            Description
          </div>
           <div>
           { board[props.columnInd].cards[props.taskIndex].description}
           </div>
          <div className="title-input">
            <EditableText   columnId={props.columnInd}  taskId={props.taskIndex}/>
          </div>
        </div>
        {/* box for activity */}
        <div className="cardinfo-box">
          <div className="cardinfo-box_title">
            <AiOutlineMenuUnfold className="icon-title" />
            Activity
          </div>
          <button onClick={() => setShowList(!showList)} className="hide-btn">
            {showList ? "showList" : " HideList"}
          </button>
          <ul style={{ display: showList ? " none" : " block" }}>
          { board[props.columnInd].cards[props.taskIndex].activity.map((data,ind)=>{
            return(
            <h4 key={ind}>
             <FaRegHandPointRight className="hand"/>  {data}
            </h4>
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