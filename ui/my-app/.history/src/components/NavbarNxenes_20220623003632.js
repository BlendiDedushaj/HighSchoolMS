import { Link } from "react-router-dom";
import "../styles/navbar.css";
import "../styles/login.css";

function NavbarNxenes() {
  return (
    <div>
      <div class="navbarApp">
        <nav className="navbar navbar-expand-sm bg-light navbar-dark">
          <ul className="navbar-nav">
          <li className="nav-item- m-1">
              <nav className="btn btn-light btn-outline-primary">
                <Link to="/">Log out</Link>
              </nav>
            </li>
           
            <li className="nav-item- m-1">
              <nav className="btn btn-light btn-outline-primary">
                <Link to="/profesori">
                <span class="nameLink">Profesori</span>
                </Link>
              </nav>
            </li>
            <li className="nav-item- m-1">
            <nav className="btn btn-light btn-outline-primary">
              <Link to="/libri">
              <span class="nameLink">Libri</span>
              </Link>
            </nav>
          </li>
          
          <li className="nav-item- m-1">
            <nav className="btn btn-light btn-outline-primary">
              <Link to="/nxenesi">
              <span class="nameLink">Nxenesi</span>
              </Link>
            </nav>
          </li>
         
          <li className="nav-item- m-1">
            <nav className="btn btn-light btn-outline-primary">
              <Link to="/vleresimi">
              <span class="nameLink">Vleresimi</span>
              </Link>
            </nav>
          </li>
          
          <li className="nav-item- m-1">
            <nav className="btn btn-light btn-outline-primary">
              <Link to="/autobusat">
              <span class="nameLink">Autobusat</span>
              </Link>
            </nav>
          </li>
          <li className="nav-item- m-1">
            <nav className="btn btn-light btn-outline-primary">
              <Link to="/syllabusi">
              <span class="nameLink">Syllabusi</span>
              </Link>
            </nav>
          </li>
          <li className="nav-item- m-1">
            <nav className="btn btn-light btn-outline-primary">
              <Link to="/njoftim">
              <span class="nameLink">Njoftim</span>
              </Link>
            </nav>
          </li>
          <li className="nav-item- m-1">
            <nav className="btn btn-light btn-outline-primary">
              <Link to="/testi">
              <span class="nameLink">Testi</span>
              </Link>
            </nav>
          </li>
          <li className="nav-item- m-1">
            <nav className="btn btn-light btn-outline-primary">
              <Link to="/kontaktprind">
              <span class="nameLink">KontaktPrind</span>
              </Link>
            </nav>
          </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavbarNxenes;
