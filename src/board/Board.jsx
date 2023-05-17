import AddBtn from "../components/addButton/AddBtn";
import Column from "../components/column/Column";
import style from "./Board.module.css";
import { RxCross2 } from "react-icons/rx";
import { FiMoreHorizontal } from "react-icons/fi";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addColumn,moveCard} from "../redux/board";
import InfoNav from "../infoNav/InfoNav";
import { DragDropContext } from "react-beautiful-dnd";
function Board() {
  const [colName, setColName] = useState("");
  const [showform, setShowForm] = useState(false);
  const dispatch = useDispatch();
  const board = useSelector((state) => state.board);
  const[listerror,setListerror] = useState("")
  const[listerrorlength,setListerrorlength] = useState("")
  // const board=useSelector((state)=>state.board)
  const handleShow = () => {
    setShowForm(true);
  };
  const handleClose = () => {
    setShowForm(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(colName.trim()==''){
      setListerror("enter lis details here")
      return;
    }else{
      setListerror("")
    }
    if(colName.length<6){
      setListerrorlength("List name must be less than 6 characters")
    return;
    }else{
      setListerrorlength("")
    }
    dispatch(addColumn({ title: `${colName}` }));
    setColName("");
  };

  function onDragEnd(result) {
    const { source, destination } = result;
    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;
    dispatch(
      moveCard({
        sourceColumnId: source.droppableId,
        destColumnId: destination.droppableId,
        sourceIndex: source.index,
        destIndex: destination.index,
      })
    );
  }
  return (
    <>
    <DragDropContext onDragEnd={(result)=>onDragEnd(result)}>
    <div className={style.infonav}>
        <InfoNav  />
      </div>
    <div className={style.container}>
      {/* <Column /> */}
      
      {board.map((column, columnInd) => (
        <div key={column.id}>
          {/* <h2>{column.title}</h2> */}
          <Column column={column} index={columnInd}/>
        </div>
      ))}

      {!showform ? (
        <AddBtn onClick={handleShow} name={"Add a list"} />
      ) : (
        <form className={style.form} onSubmit={handleSubmit}>
          <div>
            <input
              value={colName}
              onChange={(e) => setColName(e.target.value)}
              className={style.inp}
              placeholder="Enter list title ..."
            />
             {listerror && <p className={style.error}>{listerror}</p>}
            {listerrorlength && <p className={style.error}>{listerrorlength}</p>}
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
    </DragDropContext>
    </>
  );
}
export default Board;
