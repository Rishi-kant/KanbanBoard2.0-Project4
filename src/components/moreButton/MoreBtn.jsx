

import React from 'react'
import { FiMoreHorizontal } from "react-icons/fi";
import style from "./MoreBtn.module.css"
function MoreBtn({onClick}) {
  return (
    <div>
        <button className={style.btn}
        onClick={onClick}
        ><FiMoreHorizontal/></button>
    </div>
  )
}

export default MoreBtn