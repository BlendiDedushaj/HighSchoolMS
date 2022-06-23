import { Link } from "react-router-dom";
import "../styles/navbar.css";
import "../styles/login.css";

function NavbarProf() {
  return (
    <div>
    <div className="navi">
    <div class="nav">
    <input type="checkbox"/>
    <span></span>
    <span></span>
    <div class="menu">
      
          <li className="nav-item- m-1">
              <nav className="btn btn-light btn-outline-primary">
                <Link to="/">Log out</Link>
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
              <Link to="/vleresimi">
              Vleresimi
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
              <Link to="/testi">
              Testi
              </Link>
            </nav>
          </li>
         
          </div>
      </div>
      </div>
    </div>
  );
}

export default NavbarProf;
