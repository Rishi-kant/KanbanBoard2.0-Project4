import React from 'react'
import { useState } from 'react';
import style from "./Background.module.css"
import { Button } from '@mui/material';
//  const[image,setImage]=useState("https://images.pexels.com/photos/235994/pexels-photo-235994.jpeg")

 const imgs = [
  { id: 0, value: "https://wallpaperaccess.com/full/2637581.jpg" },
  {
    id: 1,
    value:
      "https://images.pexels.com/photos/2779863/pexels-photo-2779863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    value:
      "https://images.pexels.com/photos/757240/pexels-photo-757240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    value:
      "https://images.pexels.com/photos/3377405/pexels-photo-3377405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    value:
      "https://images.pexels.com/photos/2020376/pexels-photo-2020376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    value:
    "https://wallpaperaccess.com/full/981788.jpg"
  },
  {
    id: 6,
    value:
    "https://tse1.mm.bing.net/th?id=OIP.Vp85Ze6wa30zLmWE74dzUwHaEK&pid=Api&P=0&h=180"
  },
  {
    id: 6,
    value:
    "https://tse4.mm.bing.net/th?id=OIP.6XjtiLgfKjU9qHDTbpbFmQHaEK&pid=Api&P=0&h=180"
  },
];
function handleClick(ele){
    // setImage(ele.value)
    alert("hello")
   }
const handleSubmit=(e)=>{
    e.preventDefault()
    // setImage(path)
    setPath("")
    alert("hii")
  }

const Background = () => {
    const[path,setPath]=useState("")
  return (
    <div className={style.container}>
        <div className={style.input}>
     <h1> Choose background image</h1>
     <div className={style.submit}>
        <form onSubmit={handleSubmit}>
          <input
          value={path}
          onChange={(e)=>setPath(e.target.value)}
          /><br></br>
          <button  type="submit">submit</button>
        </form>
        </div>
     </div>
     <div className={style.image}>
     {
         imgs.map((ele,ind)=>{
           return(
               <div className={style.btn} key={ind} onClick={()=>handleClick(ele)}>
               <img src={ele.value} alt="images"  className={style.images}/>
               </div>
           )
         })
       }
     
     </div>
    </div>
  )
}

export default Background
