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
      <div class="main-w3layouts wrapper"></div>
      <h1>Creative SignUp Form</h1>
     
					<input class="text" type="text" name="Username" placeholder="Username" required=""></input>
					<input class="text email" type="email" name="email" placeholder="Email" required="">
					<input class="text" type="password" name="password" placeholder="Password" required="">
					<input class="text w3lpass" type="password" name="password" placeholder="Confirm Password" required=""></input>
     
      
      </div>

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
