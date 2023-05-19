import React from "react";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import style from "./Card.module.css";
import Cardinfo from "./Cardinfo/Cardinfo";
import { Popover, Typography, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCard ,editCard} from "../../redux/board";
import { useState } from "react";
import {v4 as uuid} from "uuid"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { routAtom } from "../../recoil/atom";
import {Link} from "react-router-dom"


export default function Card({ text, onClick, columnInd, taskIndex,taskId}) {
 

  const id = uuid()

  const [anchorEl, setanchorEl] = useState(null);

  const[showBtn,setShowBtn]=useState(false)

  const [showModal, setShowModal] = useState(false);
  const [cardName, setCardName] = useState("");
  const dispatch = useDispatch();
  const board = useSelector((state) => state.board);

  const openPopover = (event) => {
    setanchorEl(event.currentTarget);
  };
  const closePopover = (event) => {
    setanchorEl(null);
  };
   const handleEnter=()=>{
      setShowBtn(true)
  }
  const handleLeave=()=>{
    setShowBtn(false)
  }

  const updateTask = (e) => {
    e.preventDefault();
    dispatch(
      editCard({
        columnInd,
        taskIndex,
        cardName
        
      }))
      setanchorEl(null);
    
  };

  const nav = useNavigate();
  
  const openShow = () => {
    const boardId=board[columnInd].id;
    const cardId=board[columnInd].cards[taskIndex].id;

    setShowModal(true);

    nav("/board/card");

  };
  const closeShow = () => {
    setShowModal(false);
    nav("/board");
  };

  return (
    <>
      {showModal && (
        <Cardinfo
          onClose={closeShow}
          columnInd={columnInd}
          taskIndex={taskIndex}
        />
      )}

      <div className={style.card_title} onMouseEnter={handleEnter}  onMouseLeave={handleLeave}>
       
        <div onClick={openShow}>
          <h5>{text}</h5>

        </div>
       
          {
        showBtn?(
          <div className={style.icon}>
          <MdOutlineModeEditOutline onClick={openPopover} />
          <MdDeleteForever onClick={onClick}/>
        </div>
        ):""
      }
        <Popover
          open={Boolean(anchorEl)}
          onClose={closePopover}
          anchorEl={anchorEl}
          className={style.pop}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          sx={{ margin: 2 }}
        >
          <div className={style.save}>
            <Typography varient="body2" p={2}>
              <form onSubmit={updateTask}>
                <div className={style.edit}>
                  <TextField
                    id="outlined-multiline-static"
                    sx={{ input: { color: "white" } }}
                    rows={4}
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                  ></TextField>

                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ width: 30, margin: 2 }}
                  >
                    save
                  </Button>
                </div>
              </form>
            </Typography>
          </div>
        </Popover>
      </div>
    </>
  );
}
