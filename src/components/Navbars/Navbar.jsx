import React from "react";
import { Link } from "react-router-dom";
import logo from "/Users/hataiphatsrijitjam/Zdecor/z-decor/src/assets/img/Zdecor_logo/Logo Color_clear1.png";

function Navbar() {
  return (
    <nav>
      <img
        style={{ marginLeft: "50px", width: "225px", height: "225px" }}
        src={logo}
      />
      <div className="navTextRight">
        <Link className="navText" to="/">
          About
        </Link>
        <Link className="navText" to="/Services">
          Services
        </Link>
        <Link className="navText" to="/">
          Portfolios
        </Link>
        <Link className="navText" to="/">
          Contact us
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
