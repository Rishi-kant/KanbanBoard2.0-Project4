

import React from 'react'
import style from "./LandingPage.module.css"
import {useNavigate} from "react-router-dom"
function LandingPage() {
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
      e.preventDefault()
     
      navigate("/board")
    }
  return (
    <div className={style.container}>
     <div className={style.head}>
        <h3>Create a board</h3>
     </div>
     <form  
     className={style.form}
     onSubmit={handleSubmit}>
     <div  className={style.board}>
        <label  aria-required> Board title :-</label>
        <input className={style.inp}/>
     </div>
     <div className={style.name}>
     <label  aria-required> Your name :-</label>
     <input  className={style.inp}/>
     </div>
     <div>
        <button 
        type='submit'
        className={style.btn}>Create</button>
     </div>
     </form>
    </div>
  )
}

export default LandingPage