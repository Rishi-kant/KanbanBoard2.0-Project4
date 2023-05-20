import React, { useState } from 'react'
import image1 from './Images/image1.jpg'
import image2 from './Images/image2.jpg'
import image3 from './Images/image3.jpg'
import image4 from './Images/image4.jpg'
import style from './Image.module.css'
import {MdArrowBackIosNew, MdArrowForwardIos, MdArrowLeft, MdArrowRight} from "react-icons/md"
import { Divider } from '@mui/material'
const images =[
    {
        src:image1,
        content:"New to CONWIP? checkout the guide right now.."


    },
    {
        src:image2,
        content:"It’s easy to get your entire team up and running with CONWIP."


    },
    {
        src:image3,
        content:"Get inspired by dozens of different CONWIP workflows"


    },
    {
        src:image4,
        content:"Make board more powerfull with CONWIP power-up's"


    },

]
function ImageChange() {
    const[selectedImage,setSelectedImage]=useState(0)
   
    function Prev(){
        if(selectedImage>0)
        setSelectedImage((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
    function Next(){
        
        setSelectedImage((prevIndex) => (prevIndex + 1) % images.length)
    }
    const currentImage = images[selectedImage]
  return (
    <div>
      <h3 id={style.head}>Get a new tip</h3>
      <Divider></Divider><br></br>
     <img  width="300" height="200"src={currentImage.src}/>
      <p>{currentImage.content}</p>
     < div className={style.btn}><MdArrowBackIosNew onClick={Prev}/><MdArrowForwardIos  onClick={Next}/></div>
    </div>
  )
}

export default ImageChange
