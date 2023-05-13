import React, { useState } from "react";
import style from "./Column.module.css";
import { FiMoreHorizontal } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import AddBtn from "../addButton/AddBtn";
import Card from "../cards/CardEditable"
function Column() {
  const [showform, setShowForm] = useState(false);
  const [cardName, setcardName] = useState("");
  const [todo, setTodo] = useState([]);

  const handleShow = () => {
    setShowForm(true);
  };
  const handleClose = () => {
    setShowForm(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const prevtodo = [...todo];
    const newTodo = [...prevtodo, cardName];
    setTodo(newTodo);
    setcardName("");
    setShowForm(false);
  };
  return (
    <div className={style.container}>
      <div className={style.topVeiw}>
        <div contentEditable={true} className={style.contentEditable}></div>
        <div>
          <FiMoreHorizontal className="more" />
        </div>
      </div>
      {todo.map((ele, ind) => {
        return (
          <div>
            <h2>{ele}</h2>
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
              <FiMoreHorizontal className="more" />
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default Column;
