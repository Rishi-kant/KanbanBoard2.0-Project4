import React from "react";
import style from "./Background.module.css";

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
    value: "https://wallpaperaccess.com/full/981788.jpg",
  },
  {
    id: 6,
    value:
      "https://tse1.mm.bing.net/th?id=OIP.Vp85Ze6wa30zLmWE74dzUwHaEK&pid=Api&P=0&h=180",
  },
  {
    id: 6,
    value:
      "https://tse4.mm.bing.net/th?id=OIP.6XjtiLgfKjU9qHDTbpbFmQHaEK&pid=Api&P=0&h=180",
  },
];

const Background = ({ onClick, onSubmit, value, onChange }) => {
  return (
    <div className={style.container}>
      <div className={style.input}>
      
        <div className={style.submit}>
          <form onSubmit={onSubmit}>
            <input placeholder="Enter image URL...." value={value} onChange={onChange} />
            <br></br>
            <button type="submit">submit</button>
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
