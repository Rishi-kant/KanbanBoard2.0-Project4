import Board from "./board/Board"
import NavBar from "./navBar/NavBar"
 import style from "./App.module.css"
 import Card from "./components/cards/CardEditable"
function App() {
  return (
  <div  className={style.container}>
    <NavBar/>
    <Board/>
    <Card/>
  </div>
  )
}

export default App
