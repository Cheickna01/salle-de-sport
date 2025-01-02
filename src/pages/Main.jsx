import {Route,Routes,BrowserRouter} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Services from "./Services"
import Contact from "./Contact"
import Menu from "./Menu"
import Footer from "./Footer"
export default function Main() {
  return (
    <div className="main">
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
  )
}