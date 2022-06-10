import "./App.css";
import { Home } from "./components/Home";
import { Lenda } from "./components/Lenda";
import { Profesori } from "./components/Profesori";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App container">

        <h1 class="h1">Hello world!</h1>


        <h3 className="d-flex justify-content-center m-3">React JS Frontend</h3>
       <Navbar />

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
