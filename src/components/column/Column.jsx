import React, { useState } from "react";
import style from "./Column.module.css";
// import { FiMoreHorizontal } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import AddBtn from "../addButton/AddBtn";
import { Popover, Typography, Divider } from "@mui/material";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addCard, delCard, delColumn, editColumnTitle } from "../../redux/board";
import Card from "../cards/CardEditable";
import MoreBtn from "../moreButton/MoreBtn";
import { Draggable, Droppable } from "react-beautiful-dnd";
function Column(props) {
  const columnInd = props.index
  const { title, cards, id } = props.column

  const [showform, setShowForm] = useState(false);
  const [cardName, setCardName] = useState("");
  const [text, setText] = useState(title);
  const [isEditing, setIsEditing] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [cardNameError, setCardNameError] = useState("");
  const [cardNameLengthError, setCardNameLengthError] = useState("");
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
    if (cardName.trim() === "") {
      setCardNameError("Card name is required");
      return;
    } else {
      setCardNameError("")
    }

    if (cardName.length <2) {
      setCardNameLengthError("Card name must be less than 2 characters");
      return;
    } else {
      setCardNameLengthError("")
    }
    dispatch(
      addCard({
        columnInd,
        task: `${cardName}`,
      })
    );
    setCardName("");
    setShowForm(false);
    setCardNameError("");
    setCardNameLengthError("");
  };

  const deleteCard = (columnInd, taskIndex) => {
    dispatch(delCard({ columnInd, taskIndex }));
  };
  const deleteColumn = (columnInd) => {
    dispatch(delColumn({ columnInd }));
  };

  const openPopover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closePopover = (event) => {
    setAnchorEl(null);
  };
  const handleDivClick = () => {
    setIsEditing(true);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setIsEditing(false);

      dispatch(
        editColumnTitle({
          columnInd,
          newName: `${event.target.innerText}`,
        })
      );
    }
  };
  return (
    
    <Droppable droppableId={id}>
      {(provided, snapshot) => {
       
        return (

          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={style.container}>
            <div className={style.topVeiw}>
              <div
                onClick={handleDivClick}
                contentEditable={isEditing}
                onKeyDown={handleKeyDown}
                className={style.contentEditable}
              >
                {text}
              </div>
              <div>
                <MoreBtn onClick={openPopover} />
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
                    <Typography sx={{ height: 150, width: 200, alignItems: "center" }}>
                      <div className={style.close}>
                        <h3>List actions</h3>
                        <IoMdClose onClick={closePopover} />
                      </div>
                      <Divider></Divider>
                      <div className={style.action}>
                        <h4>Add List...</h4>
                        <h4 onClick={() => deleteColumn(columnInd)}>Delete List</h4>
                      </div>
                    </Typography>
                  </div>
                </div>
              </Popover>
            </div>

            {board[columnInd].cards.map((task, taskIndex) => {
              // console.log(task)
              return (
                <Draggable draggableId={task.id} index={taskIndex} key={task.id}>
                  {(provided) => {
                    return (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                          userSelect: "none",
                          ...provided.draggableProps.style,
                        }}
                      >
                        <div>
                          <h2>
                            <Card
                              text={task.task}
                              onClick={() => deleteCard(columnInd, taskIndex)}
                              columnInd={columnInd}
                              taskIndex={taskIndex}
                              taskId={task.id}
                            />
                          </h2>
                        </div>
                      </div>
                    )
                  }}
                </Draggable>
              );
            })}

            {!showform ? (
              <AddBtn onClick={handleShow} name={"Add a card"} />
            ) : (
              <form onSubmit={handleSubmit}>
                <div>
                  <input
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    className={style.inp}
                    placeholder="Enter a title for this card"
                  />
                  {cardNameError && <p className={style.error}>{cardNameError}</p>}
                  {cardNameLengthError && <p className={style.error}>{cardNameLengthError}</p>}
                </div>
                <div className={style.addcardContainer}>
                  <div className={style.addCont2}>
                    <button type="submit" className={style.addBtn}>
                      Add card
                    </button>
                    <RxCross2 onClick={handleClose} className={style.cross} />
                  </div>
                  <div>
                    <MoreBtn />
                  </div>
                </div>
              </form>
            )}
             {provided.placeholder}
          </div>
        )
      }}
    </Droppable>
    
  );
}

export default Column;
