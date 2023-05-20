import React from "react";
import style from "./NavBar.module.css";

import { BsKanbanFill } from "react-icons/bs";
import { AiOutlineClear } from "react-icons/ai";
import MoreBtn from "../components/moreButton/MoreBtn";
import { useDispatch } from "react-redux";
// this is for clear button
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { resetBourd } from "../redux/board";

function NavBar() {

  const dispatch = useDispatch(null);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
   // this function is for clear board
  const clearBoard=()=>{
    dispatch(resetBourd())
  }
  return (
    <div className={style.container}>
      <div className={style.innerContainer}>
        <div className={style.logo}>
          <BsKanbanFill className={style.icon} /> <h2>CONWIP</h2>
        </div>
        <div className={style.rightNav}>
          <div>
            
              <Typography
                aria-owns={open ? "mouse-over-popover" : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
              >
                <div>
                <AiOutlineClear className={style.clearIcon} onClick={clearBoard}/>
                </div>
              </Typography>
              <Popover
                id="mouse-over-popover"
                sx={{
                  pointerEvents: "none",
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
              >
                <Typography sx={{ p: 1 }}>Clear board </Typography>
              </Popover>
           

            {/*  */}
          </div>
          <div className={style.back}>
            <MoreBtn />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
