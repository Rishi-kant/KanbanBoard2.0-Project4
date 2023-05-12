import Board from "./board/Board"
import NavBar from "./navBar/NavBar"
 import style from "./App.module.css"
function App() {
  return (
  <div  className={style.container}>
    <NavBar/>
    <Board/>
  </div>
  )
}

export default App
