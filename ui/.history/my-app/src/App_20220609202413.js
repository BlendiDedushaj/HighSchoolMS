import "./App.css";
import { Home } from "./components/Home";
import { Lenda } from "./components/Lenda";
import { Profesori } from "./components/Profesori";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="App container">

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/lenda" element={<Lenda />} />
          <Route path="/profesori" element={<Profesori />} />
        </Routes>
      </div>
      hello from world
    </BrowserRouter>
  );
}

export default App;
