import { Link } from "react-router-dom";
import "../styles/navbar.css";
import "../styles/login.css";

function NavbarProf() {
  return (
    <div class="containner">
    <div class="card">
    <div class="header">
      <h3>Menu<i class="fas fa-angle-down iconM"></i></h3>
    </div>
    <div class="body">
    <ul>
    <li><i class="fas fa-home icon"></i>  <Link to="/">Log out</Link></li>
    <li><i class="fas fa-home icon"></i> Navbar
    <ul>
    <li><i class="fas fa-pencil-alt icon"></i>   <Link to="/syllabusi">
    Syllabuset
    </Link></li>
    <li><i class="fas fa-pencil-alt icon"></i>  <Link to="/vleresimi">
    Vleresimet
    </Link></li>
    <li><i class="fas fa-pencil-alt icon"></i>  <Link to="/testi">
    Testet
    </Link></li>
    <li><i class="fas fa-pencil-alt icon"></i>   <Link to="/njoftim">
    Njoftimet
    </Link></li>
    <li><i class="fas fa-pencil-alt icon"></i> <Link to="/autobusatt">
    Autobusat
    </Link></li>
    <li><i class="fas fa-pencil-alt icon"></i>  <Link to="/kontaktprindd">
    KontaktPrind
    </Link></li>
    </ul>
    </li>

         
          </ul>
          </div>
        </div>
  
    </div>
  );
}

export default NavbarProf;
