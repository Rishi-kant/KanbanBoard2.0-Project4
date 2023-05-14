import React from "react";
import style from "./NavBar.module.css";
import { FiMoreHorizontal } from 'react-icons/fi';
import MoreBtn from "../components/moreButton/MoreBtn";
function NavBar() {
  return (
    <div className={style.container}>
      <div className={style.innerContainer}>
      {/* <div className={style.navContent}
      contentEditable={true}
      > 
      </div> */}
      <div>
        <h1>KanBan</h1>
      </div>
      <div>
        {/* <FiMoreHorizontal  className="more"/> */}
        <MoreBtn />
      </div>
      </div>
    </div>
  );
}

export default NavBar;
