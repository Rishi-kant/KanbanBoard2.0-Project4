import React from "react";
import { MdOutlineModeEditOutline} from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import style from "./Card.module.css";
import Cardinfo from "./Cardinfo/Cardinfo";
import {Popover,Typography,Button,TextField} from "@mui/material"
// import makeStyles from '@mui/styles/makeStyles'

// const useStyles = makeStyles({

//   typo:{
//     backgroundColor:"#242B2E"
//   }
// })
// import {
//   Button,
//   Popover,
//   Typography,
//   colors,
//   useColorScheme,
// } from "@mui/material";
import { useState } from "react";

export default function Card({ text ,onClick}) {
  // const classes =useStyles()

  const [anchorEl, setanchorEl] = useState(null);
  const [showModal , setShowModal] = useState(false)

  const openPopover = (event) => {
    setanchorEl(event.currentTarget);
  };
  const closePopover = (event) => {
    setanchorEl(null);
  };
  const updateTask =(e)=>{
   e.preventDefault()
   alert('updated')
  }
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
        
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
          
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{margin:2}}
       
      >
       <div className={style.save}>
         <Typography 
          varient="body2"
          p={2}
        
        >
          <form onSubmit={updateTask}>
          <div className={style.edit}>
           <TextField
          id="outlined-multiline-static"
         
          sx={{ input: { color: 'white' } }}
         
          rows={4}
        value={text}
          
        ></TextField>
        
       
        <Button type="submit" variant="contained" sx={{width:30,margin:2}}>
          save 
        </Button>
        </div>
        </form>
        </Typography>
        </div>
      </Popover>
    </div>
    </>
  );
}






