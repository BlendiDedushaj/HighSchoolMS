import "./App.css";
import { Home } from "./components/Home";
import { Lenda } from "./components/Lenda";
import { Profesori } from "./components/Profesori";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Hyrja from "./components/Hyrja";

function App() {
  return (
    <div>
      <BrowserRouter>


        <Routes>

         <Route path="/" element={<Hyrja />} />
          <Route path="/home" element={<Home />} />
          <Route path="/lenda" element={<Lenda />} />
          <Route path="/profesori" element={<Profesori />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
