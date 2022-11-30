import './App.scss';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home/home";
import Error from "./pages/error/error";
import Menu from "./pages/menu/menu";
import Contact from "./pages/contact/contact";
import About from "./pages/about/about";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Menu" element={<Menu/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
