
import React from 'react'
import style from "./AddBtn.module.css"
import { AiOutlinePlus } from 'react-icons/ai';
function AddBtn({}) {
  return (
    <div className={style.btnContainer}>
       <AiOutlinePlus/>Add another list
    </div>
  )
}

export default AddBtn