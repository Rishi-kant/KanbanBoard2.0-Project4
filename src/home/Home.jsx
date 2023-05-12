
import Card from "../components/cards/Card"
import style from "./Home.module.css"
import React from 'react'

function Home() {
  return (
    <>
    <div className={style.container}> 
       <h1>This is home layout</h1>
      
     <Card/>
    </div>
    
    </>
  )
}

export default Home