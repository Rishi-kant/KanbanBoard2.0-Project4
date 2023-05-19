import NavBar from "./navBar/NavBar";
import style from "./App.module.css";
import Board from "./board/Board";
import LandingPage from "./landing/LandingPage";
import { useNavigate, Routes, Route } from "react-router-dom";

import Background from "./BackgroundImg/Background";
import { useState } from "react";

function App() {

  const [img, setImg] = useState(
    "https://images.pexels.com/photos/3377405/pexels-photo-3377405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  );
  const [path, setPath] = useState("");

  const navigate = useNavigate(null);
  function handleClick(ele) {
    setImg(ele.value);
    navigate("/board");
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setImg(path);
    setPath("");
    navigate("/board");
  };
  function handleChange(e) {
    setPath(e.target.value);
  }
  return (
    <div className={style.container} style={{ backgroundImage: `url(${img})` }}>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/back"
          element={
            <Background
              onClick={handleClick}
              onSubmit={handleSubmit}
              value={path}
              onChange={handleChange}
            />
          }
        />
         <Route path="/" element={ <LandingPage/> }/>
         <Route path="/board"  element={ <Board/>}/>
        <Route path="/:boardId/:cardId" element={<Cardinfo/>}/>
      </Routes>
    </div>
  );

}

export default App;
