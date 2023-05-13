import React from "react";
import { MdOutlineModeEditOutline} from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import style from "./Card.module.css";
import {
  Button,
  Popover,
  Typography,
  colors,
  useColorScheme,
} from "@mui/material";
import { useState } from "react";
export default function Card({ text }) {
  const [anchorEl, setanchorEl] = useState(null);

  const openPopover = (event) => {
    setanchorEl(event.currentTarget);
  };
  const closePopover = (event) => {
    setanchorEl(null);
  };
  return (
    <div className={style.card_title}>
      <div>
        <h5>{text}</h5>
      </div>
      <div className={style.icon}>
        
        <MdOutlineModeEditOutline onClick={openPopover} />
        <MdDeleteForever />
      </div>
      <Popover
        open={Boolean(anchorEl)}
        onClose={closePopover}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Typography
          varient="body2"
          p={2}
          sx={{
            width: 250,
          }}
        >
          something
        </Typography>
        <Button variant="contained" sx={{ margin: 8 }}>
          save changes
        </Button>
      </Popover>
    </div>
  );
}
