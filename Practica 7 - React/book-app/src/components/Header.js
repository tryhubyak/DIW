import logo from "../assets/img/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-dark bg-dark m-0 row">
        <div className="navbar-brand m-2 d-flex align-items-center">
          <img
            className="images me-2"
            src={logo}
            alt="logo.png"
            width="100"
            height="100"
          />
          <h1 className="m-0">Library</h1>
        </div>
      </nav>
    </header>
  );
}

export default Header;
