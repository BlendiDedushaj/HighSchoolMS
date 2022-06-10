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

      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/lenda' element={<Lenda />} />
        <Route path='/profesori' element={<Profesori />} />
      </Routes>
      <div class="slideshow-container">

<div class="mySlides fade">
  <div class="numbertext">1 / 3</div>
  <img src="img_nature_wide.jpg" style="width:100%">
  <div class="text">Caption Text</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">2 / 3</div>
  <img src="img_snow_wide.jpg" style="width:100%">
  <div class="text">Caption Two</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">3 / 3</div>
  <img src="img_mountains_wide.jpg" style="width:100%">
  <div class="text">Caption Three</div>
</div>

<a class="prev" onclick="plusSlides(-1)"></a>
<a class="next" onclick="plusSlides(1)"></a>

</div>
<br></br>

<div style="text-align:center">
  <span class="dot" onclick="currentSlide(1)"></span> 
  <span class="dot" onclick="currentSlide(2)"></span> 
  <span class="dot" onclick="currentSlide(3)"></span> 
</div>
    </div>
    </BrowserRouter>
  );
}

export default App;
