import React, { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./cardinfo.css";
import { BsCreditCard } from "react-icons/bs";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import {FaRegHandPointRight } from "react-icons/fa";
import EditableText from "../../Editabletext/Editabletext";
import Modal from "../../Modal/Modal";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
function Cardinfo(props) {
  const { boardId,cardId}=useParams()
  const[currentColumn,setCurrentColumn]=useState(" ")
  const[currentTask,setCurrentTask]=useState("")
  const [showList, setShowList] = useState(false);
  const board = useSelector((state) => state.board);
  const navigate=useNavigate()

  const handleClose = () => {
    navigate("/board")

  }; 
  useEffect(()=>{
    let tempCard=[...board];
    let CardIndex=tempCard.findIndex(ele=>ele.id===boardId);
    let currentCard={...tempCard [CardIndex]}
    setCurrentColumn(currentCard)
    let  tempTask=currentCard.cards;
    let  taskIndex=tempTask.findIndex(ele=>ele.id===cardId);
    let currentItem={...tempTask [taskIndex]}
    console.log(currentItem)
    console.log(tempTask)
    setCurrentTask(currentItem)
    console.log("shivani")
  },[])
 
  return (
  
    <Modal onClose={handleClose}>
      <RxCross2 className='cross-icon' onClick={handleClose} />
      <div className="cardinfo-container" >
        <div className="cardinfo-box">
          <div className="cardinfo-box_title">
            <BsCreditCard className="icon-title" />
          {currentTask.task}
         
          <h5>
           in list  { currentColumn.title}
          </h5>
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
          { currentTask && currentTask.activity.map((data,ind)=>{
            return(
            <h4 key={ind}>
             <FaRegHandPointRight className="hand"/>  {data}
            </h4>
            )
          })
          
          }
          </ul>
        </div>
        
      </div>
    </Modal>
    
  );
}

export default Cardinfo;
