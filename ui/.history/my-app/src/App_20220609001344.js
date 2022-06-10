
import './App.css';
import {Home} from './Home';
import {Lenda} from './Lenda';
import {Profesori} from './Profesori';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
   
    
    <p style="font-size: 30px;float: left;margin: 0px;padding: 0px"><b>Sign Up</b></p>
    <br><br>
    <p>Please fill this form to create an account.</p>

    <hr>
    
    <input type="text" placeholder="Username" name="username" value="<?php echo $username; ?>">
    <input type="email" placeholder="Email" name="email" value="<?php echo $email; ?>">
    <br>
    <input type="password" placeholder="Password" name="password_1"   title=" Six or more characters">
    <br>
    <input type="password" placeholder="Repeat Password" name="password_2" >
    
    <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>
    <p>Already have an account?<a  href="login.php" style="color:dodgerblue">Sign In</a> </p>

    <div style="height: 55px">
        <button id="signUpButton" type="submit" name="reg_user">Sign Up</button>
 
      <h3 className="d-flex justify-content-center m-3">
        React JS Frontend
      </h3>
      <nav className="navbar navbar-expand-sm bg-light navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item- m-1">
            <nav className="btn btn-light btn-outline-primary">
              <Link to="/home">Home</Link>
            </nav>
          </li>
          <li className="nav-item- m-1">
            <nav className="btn btn-light btn-outline-primary">
              <Link to="/lenda">Lenda</Link>
            </nav>
          </li>
          <li className="nav-item- m-1">
            <nav className="btn btn-light btn-outline-primary">
              <Link to="/profesori">Profesori</Link>
            </nav>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/lenda' element={<Lenda />} />
        <Route path='/profesori' element={<Profesori />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
