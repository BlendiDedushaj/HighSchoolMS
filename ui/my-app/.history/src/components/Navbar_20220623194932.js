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
    <li><i class="fas fa-home icon"></i>  <Link to="/profesori">Profesori</Link></li>
    <li><i class="fas fa-home icon"></i>  <Link to="/libri">
    Libri
    </Link></li>
    <li><i class="fas fa-home icon"></i>  <Link to="/">Log out</Link></li>
    <li><i class="fas fa-home icon"></i>  <Link to="/">Log out</Link></li>
    <li><i class="fas fa-home icon"></i>  <Link to="/">Log out</Link></li>
    <li><i class="fas fa-home icon"></i>  <Link to="/">Log out</Link></li>
    <li><i class="fas fa-home icon"></i>  <Link to="/">Log out</Link></li>
    <li><i class="fas fa-home icon"></i>  <Link to="/">Log out</Link></li>
    <li><i class="fas fa-home icon"></i>  <Link to="/">Log out</Link></li>
    <li><i class="fas fa-home icon"></i>  <Link to="/">Log out</Link></li>
    <li><i class="fas fa-home icon"></i>  <Link to="/">Log out</Link></li>
    <li><i class="fas fa-home icon"></i>  <Link to="/">Log out</Link></li>
    <li><i class="fas fa-home icon"></i>  <Link to="/">Log out</Link></li>

          <li className="nav-item- m-1">
              <nav className="btn btn-light btn-outline-primary">
                <Link to="/">Log out</Link>
              </nav>
            </li>
            <li className="nav-item- m-1">
              <nav className="btn btn-light btn-outline-primary">
                <Link to="/lenda">Lenda</Link>
              </nav>
            </li>
            <li className="nav-item- m-1">
              <nav className="btn btn-light btn-outline-primary">
                <Link to="/profesori">
                Profesori
                </Link>
              </nav>
            </li>
            <li className="nav-item- m-1">
            <nav className="btn btn-light btn-outline-primary">
              <Link to="/libri">
              Libri
              </Link>
            </nav>
          </li>
          <li className="nav-item- m-1">
            <nav className="btn btn-light btn-outline-primary">
              <Link to="/orari">
              Orari
              </Link>
            </nav>
          </li>
          <li className="nav-item- m-1">
            <nav className="btn btn-light btn-outline-primary">
              <Link to="/paralelja">
              Paralelja
              </Link>
            </nav>
          </li>
          <li className="nav-item- m-1">
            <nav className="btn btn-light btn-outline-primary">
              <Link to="/klasa">
              Klasa
              </Link>
            </nav>
          </li>
          <li className="nav-item- m-1">
            <nav className="btn btn-light btn-outline-primary">
              <Link to="/nxenesi">
              Nxenesi
              </Link>
            </nav>
          </li>
          <li className="nav-item- m-1">
            <nav className="btn btn-light btn-outline-primary">
              <Link to="/nota">
              Nota
              </Link>
            </nav>
          </li>
          <li className="nav-item- m-1">
            <nav className="btn btn-light btn-outline-primary">
              <Link to="/vleresimi">
              Vleresimi
              </Link>
            </nav>
          </li>
          <li className="nav-item- m-1">
            <nav className="btn btn-light btn-outline-primary">
              <Link to="/prindi">
              Prindi
              </Link>
            </nav>
          </li>
          <li className="nav-item- m-1">
            <nav className="btn btn-light btn-outline-primary">
              <Link to="/autobusat">
              Autobusat
              </Link>
            </nav>
          </li>
          <li className="nav-item- m-1">
            <nav className="btn btn-light btn-outline-primary">
              <Link to="/syllabusi">
              Syllabusi
              </Link>
            </nav>
          </li>
          <li className="nav-item- m-1">
            <nav className="btn btn-light btn-outline-primary">
              <Link to="/njoftim">
              Njoftim
              </Link>
            </nav>
          </li>
          <li className="nav-item- m-1">
            <nav className="btn btn-light btn-outline-primary">
              <Link to="/testi">
              Testi
              </Link>
            </nav>
          </li>
          <li className="nav-item- m-1">
            <nav className="btn btn-light btn-outline-primary">
              <Link to="/kontaktprind">
              KontaktPrind
              </Link>
            </nav>
          </li>
          </ul>
          </div>
        </div>
  
    </div>
  );
}

export default Navbar;
