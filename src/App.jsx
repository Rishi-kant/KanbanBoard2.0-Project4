import Home from "./home/Home"
import NavBar from "./navBar/NavBar"
 import style from "./App.module.css"
function App() {
  return (
  <div  className={style.container}>
    <NavBar/>
    <Home/>
  </div>
  )
}

export default App
