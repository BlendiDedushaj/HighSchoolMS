import { Link } from "react-router-dom";
import "../styles/navbar.css";
import "../styles/login.css";

function NavbarNx() {
  return (
    <div>
      <div class="navbarApp">
        <nav className="navbar navbar-expand-sm bg-light navbar-dark">
          <ul className="navbar-nav">
          
          <li className="nav-item- m-1">
            <nav className="btn btn-light btn-outline-primary">
              <Link to="/nxenesi">
              <span class="nameLink">Nxenesi</span>
              </Link>
            </nav>
          </li>
         
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavbarNx;
