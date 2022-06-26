import { Link } from "react-router-dom";
import "../styles/navbar.css";
import "../styles/login.css";

function NavbarNxenes() {
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
    <li><i class="fas fa-pencil-alt icon"></i>  <Link to="/lendaa">Lenda</Link></li>
    <li><i class="fas fa-pencil-alt icon"></i>  <Link to="/profesorii">Profesori</Link></li>
    <li><i class="fas fa-pencil-alt icon"></i>  <Link to="/librii">
    Librat
    </Link></li>
    <li><i class="fas fa-pencil-alt icon"></i>   <Link to="/syllabusii">
    Syllabuset
    </Link></li>
    <li><i class="fas fa-pencil-alt icon"></i>  <Link to="/vleresimii">
    Vleresimet
    </Link></li>
    <li><i class="fas fa-pencil-alt icon"></i>  <Link to="/testii">
    Testet
    </Link></li>
    <li><i class="fas fa-pencil-alt icon"></i>   <Link to="/njoftimm">
    Njoftimet
    </Link></li>
    <li><i class="fas fa-pencil-alt icon"></i> <Link to="/autobusatt">
    Autobusat
    </Link></li>
    </ul>
    </li>   
          </ul>
          </div>
        </div>
  
    </div>
  );
}

export default NavbarNxenes;
