

import React from 'react'
import { FiMoreHorizontal } from "react-icons/fi";
import style from "./MoreBtn.module.css"
function MoreBtn() {
  return (
    <div>
        <button className={style.btn}><FiMoreHorizontal/></button>
    </div>
  )
}

export default MoreBtn