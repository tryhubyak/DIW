import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import logoNF from "../assets/img/LogoNF.png";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-dark bg-dark m-0 row">
        <div className="navbar-brand m-2 d-flex align-items-center">
          <img
            className="images me-3"
            src={logoNF}
            alt="logoNF.png"
            width="100"
            height="100"
          />
          <h1 className="mx-3">Albums & Tours</h1>
        </div>
      </nav>
    </header>
  );
}
