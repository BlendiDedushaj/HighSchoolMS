import { Link } from "react-router-dom";
import "../styles/navbar.css";
import "../styles/login.css";

function Navbar() {
  return (

    <div class="container">
    <div class="card">
    <div class="header">
      <h3>Menu IU <i class="fas fa-angle-down iconM"></i></h3>
    </div>
    <div class="body">
    <ul>
    <li><i class="fas fa-home icon"></i>  <Link to="/">Log out</Link></li>
    <li><i class="fas fa-home icon"></i>  <Link to="/lenda">Lenda</Link></li>
    <ul>
    <li><i class="fas fa-pencil-alt icon"></i>  <Link to="/lenda">Lenda</Link></li>
    <li><i class="fas fa-pencil-alt icon"></i>  <Link to="/profesori">Profesori</Link></li>
    <li><i class="fas fa-pencil-alt icon"></i>  <Link to="/libri">
    Libri
    </Link></li>
    <li><i class="fas fa-pencil-alt icon"></i> <Link to="/orari">
    Orari
    </Link></li>
    <li><i class="fas fa-pencil-alt icon"></i>  <Link to="/paralelja">
    Paralelja
    </Link></li>
    <li><i class="fas fa-pencil-alt icon"></i>  <Link to="/klasa">
    Klasa
    </Link></li>
    <li><i class="fas fa-pencil-alt icon"></i>  <Link to="/nxenesi">
    Nxenesi
    </Link></li>
    <li><i class="fas fa-pencil-alt icon"></i>  <Link to="/vleresimi">
    Vleresimi
    </Link></li>
    <li><i class="fas fa-pencil-alt icon"></i>  <Link to="/prindi">
    Prindi
    </Link></li>
    <li><i class="fas fa-pencil-alt icon"></i> <Link to="/autobusat">
    Autobusat
    </Link></li>
    <li><i class="fas fa-pencil-alt icon"></i>   <Link to="/syllabusi">
    Syllabusi
    </Link></li>
    <li><i class="fas fa-pencil-alt icon"></i>   <Link to="/njoftim">
    Njoftim
    </Link></li>
    <li><i class="fas fa-pencil-alt icon"></i>  <Link to="/testi">
    Testi
    </Link></li>
    <li><i class="fas fa-pencil-alt icon"></i>  <Link to="/kontaktprind">
    KontaktPrind
    </Link></li>
    </ul>

         
          </ul>
          </div>
        </div>
  
    </div>
  );
}

export default Navbar;
