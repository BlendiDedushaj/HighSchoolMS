import "./App.css";
import { Signup } from "./components/Signup";
import { Lenda } from "./components/Lenda";
import { Profesori } from "./components/Profesori";
import { Libri } from "./components/Libri";
import { Orari } from "./components/Orari";
import { Paralelja } from "./components/Paralelja";
import { Klasa } from "./components/Klasa";
import { Vleresimi } from "./components/Vleresimi";
import { Nxenesi} from "./components/Nxenesi";
import { Nota} from "./components/Nota";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hyrja from "./components/Hyrja";
import Login from "./components/Login";
import LoginN from "./components/LoginN";
import LoginPrind from "./components/LoginPrind";


function App() {
  return (
    <div>
      <BrowserRouter>


        <Routes>

         <Route path="/" element={<Hyrja />} />
         <Route path="/libri" element={<Libri/>} />
         <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/loginn" element={<LoginN/>} />
          <Route path="/loginprind" element={<LoginPrind />} />
          <Route path="/lenda" element={<Lenda />} />
          <Route path="/orari" element={<Orari />} />
          <Route path="/paralelja" element={<Paralelja />} />
          <Route path="/klasa" element={<Klasa />} />
          <Route path="/nxenesi" element={<Nxenesi />} />
          <Route path="/nota" element={<Nota />} />
          <Route path="/profesori" element={<Profesori />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
