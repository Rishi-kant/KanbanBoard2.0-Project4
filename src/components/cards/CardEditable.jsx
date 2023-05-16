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

export default function Card({ text, onClick, columnInd, taskIndex }) {
  // const classes =useStyles()

  const [anchorEl, setanchorEl] = useState(null);
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
  const updateTask = (e) => {
    e.preventDefault();
    dispatch(
      editCard({
        columnInd,
        taskIndex,
        cardName
        // Newtask: `${cardName}`,
      }))
      setanchorEl(null);
    
  };
  const nav = useNavigate();
  const openShow = () => {
    setShowModal(true);
    nav("/board/card");
  };
  const closeShow = () => {
    setShowModal(false);
    nav("/board");
  };
  console.log(cardName);
  return (
    <>
      {showModal && (
        <Cardinfo
          onClose={closeShow}
          columnInd={columnInd}
          taskIndex={taskIndex}
        />
      )}

      <div className={style.card_title}>
        <div onClick={openShow}>
          <h5>{text}</h5>
        </div>

        <div className={style.icon}>
          <MdOutlineModeEditOutline onClick={openPopover} />
          <MdDeleteForever onClick={onClick} />
        </div>
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
