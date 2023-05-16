

import React from 'react'
import style from "./InfoNav.module.css"
import {CgProfile} from "react-icons/cg"
import {BiLogOut} from "react-icons/bi"
import { useNavigate } from 'react-router-dom'
import {useSelector} from "react-redux"
// import { reset } from '../redux/board'
function InfoNav() {

  
  const detail=useSelector((state)=>state.detail)
  // const dispatch=useDispatch(null)
  const navigate=useNavigate(null)
    const logoutClick=()=>{
      navigate("/")
     
    }
  return (
    <div className={style.container}>
      <div  className={style.inner}>
         <div  className={style.logOut}>
          <BiLogOut className={style.logIcon}
          onClick={logoutClick}
          />
         <h3>{detail.boardName}</h3>
         </div>
         <div className={style.prof}> 
         <h3>{detail.name}</h3>
         <CgProfile/>
         </div>
      </div>
        
    </div>
  )
}

export default InfoNav