import './App.css';
import {Home} from './Home';
import {Lenda} from './Lenda';
import {Profesori} from './Profesori';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App container">
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
      <p>Please fill this form to create an account.</p>
      <input type="text" placeholder="Username" name="username" ></input><br></br><br></br>
      <input type="email" placeholder="Email" name="email"></input><br></br><br></br>
      <input type="password" placeholder="Password" name="password_1"   title=" Six or more characters"></input><br></br><br></br>
      <input type="password" placeholder="Repeat Password" name="password_2" ></input><br></br><br></br>
      <button id="signUpButton" type="submit" name="reg_user">Sign Up</button>
      

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
