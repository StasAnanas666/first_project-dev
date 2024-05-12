import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Contacts from "./Contacts/Contacts";
import Header from "../Header/Header";
import NotFound from "./NotFound/NotFound";

const Main = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </Router>
    );
};

export default Main;
