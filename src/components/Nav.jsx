import React from "react";
import "./Nav.css";
import Logo from "/AE-LOGO resize.svg";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
      <nav className="navbar">
          <Link to={"/"}>
        <figure className="amit__logo--wrapper">
            <img className="amit__logo" src={Logo} alt="" />
        </figure>
          </Link>
        <ul className="nav__link--list">
          <li className="nav__link">
            <Link to="/" className="nav__link--anchor link__hover-effect home">
              Home
            </Link>
          </li>
          <li className="nav__link">
            <Link to="/findmovie" className="nav__link--anchor link__hover-effect">
              Find Your Movie
            </Link>
          </li>
          <li className="nav__link">
            <Link to="/" className="nav__link--anchor btn__contact">
              contact
            </Link>
          </li>
        </ul>
      </nav>
  );
};

export default Nav;
