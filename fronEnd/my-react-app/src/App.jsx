
import { Navbar } from "./Components/Navbar"
import { Routes, Route } from "react-router-dom"
import {Home, About, Contact, Projects} from './Components/pages '
import "./Components/Nbar.css";


function App() {

  return (
    <div>
      <Navbar/>
        <Routes>
            <Route path = '/' element = {<Home/>}></Route>
            <Route path = '/About' element = {<About/>}></Route>
            <Route path = '/Contact' element = {<Contact/>}></Route>
            <Route path = '/Project' element = {<Projects/>}></Route>
        </Routes>
    </div>
  )
}

export default App
