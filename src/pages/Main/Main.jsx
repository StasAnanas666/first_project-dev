import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Contacts from "./Contacts/Contacts";

const Main = () => {
    return (
        <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contacts" element={<Contacts />}/> 
        </Routes>
      </Router>
    )
}

export default Main;