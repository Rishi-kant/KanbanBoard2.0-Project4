
import React from 'react'
import style from "./AddBtn.module.css"
import { AiOutlinePlus } from 'react-icons/ai';
function AddBtn({name,onClick}) {
  return (
    <div className={style.btnContainer}
     onClick={onClick}
    >
       <AiOutlinePlus/>{name}
    </div>
  )
}

export default AddBtn