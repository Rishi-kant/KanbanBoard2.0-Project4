import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./cardinfo.css";
import { BsCreditCard } from "react-icons/bs";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { FaRegHandPointRight } from "react-icons/fa";
import EditableText from "../../Editabletext/Editabletext";
import Modal from "../../Modal/Modal";
import { RxCross2 } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import { addDescription } from "../../../redux/board";

function Cardinfo(props) {
  const { boardId, cardId } = useParams();
  const [rendering, setRendering] = useState(false);
  const [currentColumn, setCurrentColumn] = useState({});
  const [currentTask, setCurrentTask] = useState({});
  const [showList, setShowList] = useState(false);
  const board = useSelector((state) => state.board);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/board");
  };

  useEffect(() => {
    let tempCard = [...board];
    let CardIndex = tempCard.findIndex((ele) => ele.id === boardId);
    let currentCard = { ...tempCard[CardIndex] };
    setCurrentColumn(currentCard);
    let tempTask = currentCard.cards;
    let taskIndex = tempTask.findIndex((ele) => ele.id === cardId);
    let currentItem = { ...tempTask[taskIndex] };
    setCurrentTask(currentItem);
  }, [board, boardId, cardId]);

  const handleAddDescription = (data) => {
    dispatch(
      addDescription({
        boardId,
        cardId,
        data,
      })
    );
  };

  return (
    <Modal onClose={handleClose}>
      <RxCross2 className="cross-icon" onClick={handleClose} />
      <div className="cardinfo-container">
        <div className="cardinfo-box">
          <div className="cardinfo-box_title">
            <BsCreditCard className="icon-title" />
            {currentTask.task}
            <h5>in list {currentColumn.title}</h5>
          </div>
        </div>
        {/* box for description*/}
        <div className="cardinfo-box">
          <div className="cardinfo-box_title">
            <AiOutlineMenuUnfold className="icon-title" />
            Description
          </div>
          <div>{currentTask.description}</div>
          <div className="title-input" onClick={() => setRendering(!rendering)}>
            <EditableText
              columnId={currentColumn.id}
              taskId={currentTask.id}
              initialValue={currentTask.description}
              onSave={handleAddDescription}
            />
          </div>
        </div>
        {/* box for activity */}
        <div className="cardinfo-box">
          <div className="cardinfo-box_title">
            <AiOutlineMenuUnfold className="con-title" />
            Activity
          </div>
          <button onClick={() => setShowList(!showList)} className="hide-btn">
            {showList ? "Show List" : "Hide List"}
          </button>
          <ul style={{ display: showList ? "none" : "block" }}>
            {currentTask.activity &&
              currentTask.activity.map((data, ind) => (
                <h4 key={ind}>
                  <FaRegHandPointRight className="hand" /> {data}
                </h4>
              ))}
          </ul>
        </div>
      </div>
    </Modal>
  );
}

export default Cardinfo;
