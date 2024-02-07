import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <div className="container-100">
      <footer className="d-flex flex-wrap justify-content-between py-3 my-4 border-top bg-dark">
        <div className="col-md-4 d-flex align-items-center justify-content-center px-3">
          <span className="mb-3 mb-md-0 text-light">Veronika Tryhubyak, 2ºDAW </span>
          <a href="https://github.com/tryhubyak" className="m-2 text-light">Visita mi GitHub</a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
