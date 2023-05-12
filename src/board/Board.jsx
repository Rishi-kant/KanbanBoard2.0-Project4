import AddBtn from "../components/addButton/AddBtn";
import Column from "../components/column/Column";
import style from "./Board.module.css";
import { RxCross2 } from 'react-icons/rx';
import { FiMoreHorizontal } from 'react-icons/fi';
import React, { useState } from "react";

function Board() {
  const [showform, setShowForm] = useState(false);

  const handleShow=()=>{
    setShowForm(true)
  }
  const handleClose=()=>{
    setShowForm(false)
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
  }
  return (
    <div className={style.container}>
      <Column />
      
      {!showform ? (
        <AddBtn onClick={handleShow}  name={"Add a list"}/>
      ) : (
        <form 
        className={style.form}
        onSubmit={handleSubmit}>
          <div>
            <input
              // value={cardName}
              onChange={(e) => setcardName(e.target.value)}
              className={style.inp}
              placeholder="Enter list title ..."
            />
          </div>
          <div className={style.addcardContainer}>
            <div className={style.addCont2}>
              <button type="submit" className={style.addBtn}>
                Add list
              </button>
              <RxCross2 onClick={handleClose} className={style.cross} />
            </div>
            <div>
              <FiMoreHorizontal className="more" />
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default Board;
