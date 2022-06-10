import "./App.css";
import { Signup } from "./components/Signup";
import { Lenda } from "./components/Lenda";
import { Profesori } from "./components/Profesori";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Hyrja from "./components/Hyrja";
import Login from "./components/Login";
import LoginN from "./components/Login";
import LoginPrind from "./components/Login";

function App() {
  return (
    <div>
      <BrowserRouter>


        <Routes>

         <Route path="/" element={<Hyrja />} />
         <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/loginn" element={<Login />} />
          <Route path="/loginprind" element={<Login />} />
          <Route path="/lenda" element={<Lenda />} />
          <Route path="/profesori" element={<Profesori />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
