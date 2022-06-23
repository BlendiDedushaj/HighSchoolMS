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
import { Prindi} from "./components/Prindi";
import { Autobusat} from "./components/Autobusat";
import { Syllabusi} from "./components/Syllabusi";
import { Njoftim} from "./components/Njoftim";
import { Testi} from "./components/Testi";
import { KontaktPrind} from "./components/KontaktPrind";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hyrja from "./components/Hyrja";
import Admin from "./components/Admin";
import Login from "./components/Login";
import LoginN from "./components/LoginN";
import LoginPrind from "./components/LoginPrind";
import Navbar from "./components/Navbar";
import NavbarProf from "./components/NavbarProf";
import NavbarPrind from "./components/NavbarPrind";
import NavbarNxenes from "./components/NavbarNxenes";



function App() {
  return (
    <div>
      <BrowserRouter>


        <Routes>

         <Route path="/" element={<Hyrja />} />
         <Route path="/libri" element={<Libri/>} />
         <Route path="/signup" element={<Signup/>} />
         <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loginn" element={<LoginN/>} />
          <Route path="/loginprind" element={<LoginPrind />} />
          <Route path="/lenda" element={<Lenda />} />
          <Route path="/orari" element={<Orari />} />
          <Route path="/paralelja" element={<Paralelja />} />
          <Route path="/klasa" element={<Klasa />} />
          <Route path="/nxenesi" element={<Nxenesi />} />
          <Route path="/nota" element={<Nota />} />
          <Route path="/prindi" element={<Prindi />} />
          <Route path="/autobusat" element={<Autobusat />} />
          <Route path="/syllabusi" element={<Syllabusi />} />
          <Route path="/njoftim" element={<Njoftim />} />
          <Route path="/testi" element={<Testi />} />
          <Route path="/kontaktprind" element={<KontaktPrind />} />
          <Route path="/vleresimi" element={<Vleresimi />} />
          <Route path="/profesori" element={<Profesori />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/navbarprind" element={<NavbarPrind />} />
          <Route path="/navbarprof" element={<NavbarProf />} />
          <Route path="/navbarnxenes" element={<NavbarNxenes />} />
        </Routes>
      </BrowserRouter>
      <img src="https://getlogo.net/wp-content/uploads/2020/11/parents-logo-vector.png" alt="Girl in a jacket" width="400" height="250"></img>

    </div>
  );
}

export default App;
