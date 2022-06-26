import "./App.css";
import { Signup } from "./components/Signup";
import { Lenda } from "./components/Lenda";
import { Lendaa } from "./components/Lendaa";
import { Profesori } from "./components/Profesori";
import { Profesorii } from "./components/Profesorii";
import { Libri } from "./components/Libri";
import { Librii } from "./components/Librii";
import { Orari } from "./components/Orari";
import { Paralelja } from "./components/Paralelja";
import { Klasa } from "./components/Klasa";
import { Vleresimi } from "./components/Vleresimi";
import { Vleresimii } from "./components/Vleresimii";
import { Nxenesi} from "./components/Nxenesi";
import { Nota} from "./components/Nota";
import { Prindi} from "./components/Prindi";
import { Autobusat} from "./components/Autobusat";
import { Autobusatt} from "./components/Autobusatt";
import { Syllabusi} from "./components/Syllabusi";
import { Syllabusii} from "./components/Syllabusii";
import { Njoftim} from "./components/Njoftim";
import { Njoftimm} from "./components/Njoftimm";
import { Testi} from "./components/Testi";
import { Testii} from "./components/Testii";
import { KontaktPrind} from "./components/KontaktPrind";
import { KontaktPrindd} from "./components/KontaktPrindd";
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
         <Route path="/librii" element={<Librii/>} />
         <Route path="/signup" element={<Signup/>} />
         <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loginn" element={<LoginN/>} />
          <Route path="/loginprind" element={<LoginPrind />} />
          <Route path="/lenda" element={<Lenda />} />
          <Route path="/lendaa" element={<Lendaa />} />
          <Route path="/orari" element={<Orari />} />
          <Route path="/paralelja" element={<Paralelja />} />
          <Route path="/klasa" element={<Klasa />} />
          <Route path="/nxenesi" element={<Nxenesi />} />
          <Route path="/nota" element={<Nota />} />
          <Route path="/prindi" element={<Prindi />} />
          <Route path="/autobusat" element={<Autobusat />} />
          <Route path="/autobusatt" element={<Autobusatt />} />
          <Route path="/syllabusi" element={<Syllabusi />} />
          <Route path="/syllabusii" element={<Syllabusii />} />
          <Route path="/njoftim" element={<Njoftim />} />
          <Route path="/njoftimm" element={<Njoftimm />} />
          <Route path="/testi" element={<Testi />} />
          <Route path="/testii" element={<Testii />} />
          <Route path="/kontaktprind" element={<KontaktPrind />} />
          <Route path="/kontaktprindd" element={<KontaktPrindd />} />
          <Route path="/vleresimi" element={<Vleresimi />} />
          <Route path="/vleresimii" element={<Vleresimii />} />
          <Route path="/profesori" element={<Profesori />} />
          <Route path="/profesorii" element={<Profesorii />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/navbarprind" element={<NavbarPrind />} />
          <Route path="/navbarprof" element={<NavbarProf />} />
          <Route path="/navbarnxenes" element={<NavbarNxenes />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
