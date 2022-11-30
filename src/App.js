import './App.scss';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home/home";
import Error from "./pages/error/error";
import Menu from "./pages/menu/menu";
import Contact from "./pages/contact/contact";
import Footer from "./components/footer/footer";
import About from "./pages/about/about";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="final-project-cop2822c/" element={<Home/>}/>
        <Route path="final-project-cop2822c/Contact" element={<Contact/>}/>
        <Route path="final-project-cop2822c/Menu" element={<Menu/>}/>
        <Route path="final-project-cop2822c/About" element={<About/>}/>
        <Route path="final-project-cop2822c/*" element={<Error/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
