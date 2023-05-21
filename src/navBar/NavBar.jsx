import React from "react";
import style from "./NavBar.module.css";
import { useState } from "react";
import { BsKanbanFill } from "react-icons/bs";
import { AiOutlineQuestionCircle } from "react-icons/ai";

import MoreBtn from "../components/moreButton/MoreBtn";

import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

import ImageChange from "../components/ImageChange/ImageChange";

function NavBar() {
  const [anchor, setanchor] = useState(null);
  const openPop = (event) => {
    setanchor(event.currentTarget);
  };
  const closePop = (event) => {
    setanchor(null);
  };

  return (
    <div className={style.container}>
      <div className={style.innerContainer}>
        <div className={style.logo}>
          <BsKanbanFill className={style.icon} /> <h2>CONWIP</h2>
        </div>
        <div className={style.rightNav}>
          <div>
            <div onClick={openPop}>
              <AiOutlineQuestionCircle className={style.infoIcon} />
            </div>

            <Popover
              open={Boolean(anchor)}
              onClose={closePop}
              anchorEl={anchor}
              className={style.pop}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              sx={{ margin: 3, width: 380 }}
            >
              <Typography varient="body2" sx={{ padding: 3 }}>
                <ImageChange />
              </Typography>
            </Popover>

            {/*  */}
          </div>
          <div className={style.back}>{/* <MoreBtn /> */}</div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
