import { Link } from "react-router-dom";
import "../styles/navbar.css";
import "../styles/login.css";

function NavbarNxenes() {
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
              <Link to="/nxenesi">
              Nxenesi
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
          
        </div>
        <img src="https://dcassetcdn.com/design_img/3104109/688083/688083_17180046_3104109_519e636d_image.jpg" alt="Girl in a jacket" width="400" height="250"></img>

      </div>
     

    </div>
  );
}

export default NavbarNxenes;
