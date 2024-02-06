import logo from "../assets/img/logo.png";
//src/components/Header.js

import React from "react";

function Header() {
  return (
    <header>
      <img className="imahes" src={logo} alt="logo.png" />
      <h1>Book Library</h1>
    </header>

  );
}

export default Header;