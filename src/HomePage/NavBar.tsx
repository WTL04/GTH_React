import { Fragment } from "react/jsx-runtime";
import "./NavBar.css";

function NavBar() {
  return (
    <Fragment>
      <nav className="navbar">
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>

        <a href="/" className="main-logo">
          <div className="img-logo">
            <img
              src="https://cmsv2.veym.net/assets/8a7bf93e-86f5-46d8-9855-f10194d32ce4/logo"
              alt="logo"
            />
          </div>

          <div className="title-logo">
            <div>Đoàn Gioan Tiền Hô</div>
            <div>TNTT Huntington Beach</div>
          </div>
        </a>

        <ul className="menu">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/">ABOUT US</a>
          </li>
          <li>
            <a href="/">RESOURCES</a>
          </li>
          <li>
            <a href="join.html">JOIN!</a>
          </li>
        </ul>

        <ul className="social-media">
          <li>
            <a href="https://www.instagram.com/tnttgth/">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/GioanTienHoTNTT?mibextid=LQQJ4d">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@hbtnttyt">
              <i className="fab fa-youtube"></i>
            </a>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
}

export default NavBar;
