import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Menu from "./pages/Menu"
import Pagenotfound from "./pages/Pagenotfound"


function App() {
 return (
   <div className="App">
     <BrowserRouter>
       <Routes>
         
           <Route path="/" element={<Home />} />
           <Route path="about" element={<About />} />
           <Route path="contact" element={<Contact />} />
           <Route path="Menu" element={<Menu />} />
           <Route path="*" element ={<Pagenotfound />} />
         
       </Routes>
     </BrowserRouter>
   </div>
 )
}

export default App
