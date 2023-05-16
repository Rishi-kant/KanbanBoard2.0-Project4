
import NavBar from "./navBar/NavBar"
import style from "./App.module.css"
import Board from "./board/board"
import LandingPage from "./landing/LandingPage"
import {Routes,Route} from "react-router-dom"

import Cardinfo from "./components/cards/Cardinfo/Cardinfo"

function App() {
  return (
  <div  className={style.container}>
    <NavBar/>
    <Routes>
      <Route  path="/" element={ <LandingPage/> }/>
      <Route  path="/board" element={ <Board/>}>
      <Route path="/board/card" element={<Cardinfo/>}/>
      </Route>
      
    </Routes>
   
  </div>
  )
}

export default App
