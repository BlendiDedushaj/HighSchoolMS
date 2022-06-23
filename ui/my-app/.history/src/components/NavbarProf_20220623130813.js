import { Link } from "react-router-dom";
import "../styles/navbar.css";
import "../styles/login.css";

function NavbarProf() {
  return (
    <div>
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
              <span class="nameLink">Vleresimi</span>
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
              <Link to="/testi">
              <span class="nameLink">Testi</span>
              </Link>
            </nav>
          </li>
         
          </ul>
        </nav>
      </div>
      </div>
      </div>
    </div>
  );
}

export default NavbarProf;
