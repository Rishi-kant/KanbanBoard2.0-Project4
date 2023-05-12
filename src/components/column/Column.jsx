
import React from 'react'
import style from "./Column.module.css"
import { FiMoreHorizontal } from 'react-icons/fi';
import AddBtn from '../addButton/AddBtn';
function Column() {
  return (
    <div className={style.container}>
       <div className={style.topVeiw}>
           <div contentEditable={true} className={style.contentEditable}>

           </div>
           <div>
            <FiMoreHorizontal className="more"/>
           </div>
           
       </div>
       <AddBtn/>
    </div>
  )
}

export default Column