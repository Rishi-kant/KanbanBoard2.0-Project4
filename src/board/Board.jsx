
import AddBtn from "../components/addButton/AddBtn"
import Column from "../components/column/Column"
import style from "./Board.module.css"
import React from 'react'

function Board() {
  return (
    <div className={style.container}> 
      <Column/>
      <AddBtn/>
    </div>
  )
}

export default Board