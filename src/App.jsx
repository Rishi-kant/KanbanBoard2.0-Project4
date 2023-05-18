
import NavBar from "./navBar/NavBar"
import style from "./App.module.css"
import Board from "./board/board"
import LandingPage from "./landing/LandingPage"
import {Routes,Route} from "react-router-dom"
//  import {useRecoilValue} from "recoil"
import Cardinfo from "./components/cards/Cardinfo/Cardinfo"
import { useDispatch, useSelector } from "react-redux";
import { useRecoilValue } from "recoil"
import { routAtom } from "./recoil/atom"
function App() {
  // this is second repo
  const image=useSelector((state)=>state.background)
  // const rout=useRecoilValue(routAtom)
  return (
  <div  className={style.container} style={{ backgroundImage: `url(${image})`}}>
    <NavBar/>
    <Routes>
      <Route  path="/" element={ <LandingPage/> }/>
      <Route  path="/board" exact element={ <Board/>}/>
      <Route path="/board/card" element={<Board/>}/>
      
    </Routes>
   
  </div>
  )
}

export default App
