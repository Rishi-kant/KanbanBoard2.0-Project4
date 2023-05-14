import React, { useState } from "react";
import style from "./Column.module.css";
import { FiMoreHorizontal } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import AddBtn from "../addButton/AddBtn";

//this is for dispatching data
import { useDispatch, useSelector } from "react-redux";
import { addCard, delCard } from "../../redux/reducer";
import Card from "../cards/CardEditable";

import MoreBtn from "../moreButton/MoreBtn";


function Column({ title, columnInd, id }) {
  const [showform, setShowForm] = useState(false);
  const [cardName, setcardName] = useState("");
  // const [todo, setTodo] = useState([]);

  // this is for dispatching data

  const dispatch = useDispatch();
  const board = useSelector((state) => state.board);
  const handleShow = () => {
    setShowForm(true);
  };
  const handleClose = () => {
    setShowForm(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(
      addCard({
        columnInd,
        task: `${cardName}`,
      })
    );
    setcardName("");
    setShowForm(false);
   
  };
  const deleteCard=(columnInd,taskIndex)=>{
    dispatch(delCard({columnInd,taskIndex}))
  }
  return (
    <div className={style.container}>
      <div className={style.topVeiw}>
        <div>
          <h3>{title}</h3>
        </div>

        <div>
          
          <MoreBtn  />
        </div>
      </div>

      {board[columnInd].cards.map((task, taskIndex) => {
        return (
          <div key={taskIndex}>
            <h2><Card text={task.task} onClick={()=>deleteCard(columnInd,taskIndex)}/></h2>
          </div>
        );
      })}

      {!showform ? (
        <AddBtn onClick={handleShow} name={"Add a card"} />
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <input
              value={cardName}
              onChange={(e) => setcardName(e.target.value)}
              className={style.inp}
              placeholder="Enter a tittle for this card"
            />
          </div>
          <div className={style.addcardContainer}>
            <div className={style.addCont2}>
              <button type="submit" className={style.addBtn}>
                Add card
              </button>
              <RxCross2 onClick={handleClose} className={style.cross} />
            </div>
            <div>
            <MoreBtn  />
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default Column;
