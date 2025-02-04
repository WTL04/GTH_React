"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import { useEffect, useState } from "react";
import "./NavBar.css";

//import font awesome icons
import {
  faInstagram,
  faYoutube,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavBar() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const pathname = usePathname(); // Get the current path

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
    <nav className="navbar">
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <FontAwesomeIcon icon={faBars} />{" "}
      </label>

      <Link href="/" className="main-logo">
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
      </Link>

      <ul className="menu">
        <li>
          <Link href="/" className={pathname === "/" ? "active" : ""}>
            HOME
          </Link>
        </li>
        <li>
          <Link href="/about" className={pathname === "/about" ? "active" : ""}>
            ABOUT US
          </Link>
        </li>
        <li>
          <Link
            href="/resources"
            className={pathname === "/resources" ? "active" : ""}
          >
            RESOURCES
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={pathname === "/join" ? "active" : ""}
          >
            CONTACT US
          </Link>
        </li>
      </ul>

      <ul className="social-media">
        <li>
          <a href="https://www.instagram.com/tnttgth/">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/GioanTienHoTNTT?mibextid=LQQJ4d">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/@hbtnttyt">
            <FontAwesomeIcon icon={faYoutube} size="lg" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
