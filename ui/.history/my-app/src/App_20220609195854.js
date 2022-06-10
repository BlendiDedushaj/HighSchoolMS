import "./App.css";
import { Home } from "./Home";
import { Lenda } from "./Lenda";
import { Profesori } from "./Profesori";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  // let slideIndex = 1;
  // showSlides(slideIndex);

  // function plusSlides(n) {
  //   showSlides((slideIndex += n));
  // }

  // function currentSlide(n) {
  //   showSlides((slideIndex = n));
  // }

  // function showSlides(n) {
  //   let i;
  //   let slides = document.getElementsByClassName("mySlides");
  //   let dots = document.getElementsByClassName("dot");
  //   if (n > slides.length) {
  //     slideIndex = 1;
  //   }
  //   if (n < 1) {
  //     slideIndex = slides.length;
  //   }
  //   for (i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none";
  //   }
  //   for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  //   }
  //   slides[slideIndex - 1].style.display = "block";
  //   dots[slideIndex - 1].className += " active";
  // }

  return (
    <BrowserRouter>
      <div className="App container">
        <h1 class="text-3xl font-bold underline">Hello world!</h1>

        <h3 className="d-flex justify-content-center m-3">React JS Frontend</h3>
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
          <Route path="/home" element={<Home />} />
          <Route path="/lenda" element={<Lenda />} />
          <Route path="/profesori" element={<Profesori />} />
        </Routes>
      </div>
      hello from world
    </BrowserRouter>
  );
}

export default App;
