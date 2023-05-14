import React from "react";
import { MdOutlineModeEditOutline} from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import style from "./Card.module.css";
import Cardinfo from "./Cardinfo/Cardinfo";
import {
  Button,
  Popover,
  Typography,
  colors,
  useColorScheme,
} from "@mui/material";
import { useState } from "react";

export default function Card({ text ,onClick}) {

  const [anchorEl, setanchorEl] = useState(null);
  const [showModal , setShowModal] = useState(false)

  const openPopover = (event) => {
    setanchorEl(event.currentTarget);
  };
  const closePopover = (event) => {
    setanchorEl(null);
  };
  return (
    <>
    { showModal && <Cardinfo  onClose={()=>setShowModal(false)}  /> }
    
    <div className={style.card_title}  >
      <div onClick={()=> setShowModal(true)}>
        <h5  >{text}</h5>
       
      </div>

      <div className={style.icon}>
        
        <MdOutlineModeEditOutline onClick={openPopover} />
        <MdDeleteForever onClick={onClick}/>
      </div>
      <Popover
        open={Boolean(anchorEl)}
        onClose={closePopover}
        anchorEl={anchorEl}
        className={style.pop}
       
      >
        <div className={style.txt}>
        <input/>
        </div> 
        <div>
        <button className={style.btn}>Save</button>
        </div>
      </Popover>
    </div>
    </>
  );
}
