import React, { useState } from "react";
import style from "./Column.module.css";
import { FiMoreHorizontal } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import AddBtn from "../addButton/AddBtn";
import { Popover,Typography, Divider} from "@mui/material";
import {IoMdClose} from "react-icons/io"

//this is for dispatching data
import { useDispatch, useSelector } from "react-redux";
import { addCard, delCard, delColumn } from "../../redux/reducer";
import Card from "../cards/CardEditable";

import MoreBtn from "../moreButton/MoreBtn";


function Column({ title, columnInd, id }) {
  const [showform, setShowForm] = useState(false);
  const [cardName, setcardName] = useState("");
  // const [todo, setTodo] = useState([]);
  
  const [anchorEl, setanchorEl] = useState(null);

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
  // this is for deleting column
  const deleteColumn=(columnInd)=>{
    dispatch(delColumn({columnInd}))
  }
  const openPopover = (event) => {
    setanchorEl(event.currentTarget);
  };
  const closePopover = (event) => {
    setanchorEl(null);
  };
  return (
    <div className={style.container}>
      <div className={style.topVeiw}>
        <div>
          <h3>{title}</h3>
        </div>

        <div>
          
          <MoreBtn  onClick={openPopover} />
        </div>
        <Popover
        open={Boolean(anchorEl)}
        onClose={closePopover}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{
          marginLeft: 25,
          height: 280,
          width: 700,
          
        }}
      >
        <div className={style.color}>
        <div className={style.typo}>
        <Typography sx={{height:150,width:200,alignItems:"center"}}>
        <div className={style.close}><h3>List actions</h3><IoMdClose onClick={closePopover}/></div> 
         <Divider></Divider>
        
      <div className={style.action}>
        <h4>Add List...</h4>
       <h4 onClick={()=>deleteColumn(columnInd)}>Delete List</h4>
      </div>
        </Typography>
        </div>
        </div>
      </Popover>
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
