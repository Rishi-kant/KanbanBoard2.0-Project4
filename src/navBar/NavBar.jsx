import React from "react";
import style from "./NavBar.module.css";
import { FiMoreHorizontal } from 'react-icons/fi';
function NavBar() {
  return (
    <div className={style.container}>
      <div className={style.innerContainer}>
      <div className={style.navContent}
      contentEditable={true}
      > 
      </div>
      <div>
        <FiMoreHorizontal  className="more"/>
      </div>
      </div>
    </div>
  );
}

export default NavBar;
