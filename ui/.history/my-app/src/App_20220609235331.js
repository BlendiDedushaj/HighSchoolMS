import "./App.css";
import { Home } from "./components/Home";
import { Lenda } from "./components/Lenda";
import { Profesori } from "./components/Profesori";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>


        <Routes>

         <Route path="/" element={<Login />} />
       
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
