import React from "react";
import style from "./Background.module.css";

const imgs = [
  { id: 0, value: "https://wallpaper.dog/large/10872123.jpg" },
  {
    id: 1,
    value:
      "https://i.pinimg.com/originals/3d/12/7c/3d127c64bd8501958892473f04c95ae5.jpg",
  },
  {
    id: 2,
    value:
      "https://wallpaperaccess.com/full/17520.jpg",
  },
  {
    id: 3,
    value:
      "https://images.pexels.com/photos/3377405/pexels-photo-3377405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    value:
      "https://images8.alphacoders.com/712/712496.jpg",
  },
  {
    id: 5,
    value: "https://wallpaperaccess.com/full/981788.jpg",
  },
  {
    id: 6,
    value:
      "https://wallpapers.com/images/featured/p5ztqfie3vnj5kkp.jpg",
  },
  {
    id: 6,
    value:
      "https://cdn.wallpapersafari.com/94/51/NUsItf.jpg",
  },
];

const Background = ({ onClick, onSubmit, value, onChange }) => {
  return (
    <div className={style.container}>
      <div className={style.input}>
      
        <div className={style.submit}>
          <form onSubmit={onSubmit} className={style.form}>
            <input placeholder="Enter image URL...." value={value} onChange={onChange} />
           
            <button type="submit" >submit</button>
          </form>
        </div>
      </div>
      <div className={style.image}>
        {imgs.map((ele, ind) => {
          return (
            <div className={style.btn} key={ind} onClick={() => onClick(ele)}>
              <img src={ele.value} alt="images" className={style.images} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Background;
