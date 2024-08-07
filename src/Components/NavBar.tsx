import { Fragment } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./NavBar.css";

function NavBar() {
  /* initiallizing state variables and functions using useState() */
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth <= 1280);
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Check the screen size on initial load

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
            {isSmallScreen ? (
              <div>GTH TNTT</div>
            ) : (
              <>
                <div>Đoàn Gioan Tiền Hô</div>
                <div>TNTT Huntington Beach</div>
              </>
            )}
          </div>
        </a>

        <ul className="menu">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT US</Link>
          </li>
          <li>
            <Link to="/resources">RESOURCES</Link>
          </li>
          <li>
            <Link to="/join">JOIN!</Link>
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
