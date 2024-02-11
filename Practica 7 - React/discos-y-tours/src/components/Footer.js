import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

export default function Footer() {
  return (
    <>
      <div className="container-100">
        <footer className="py-3 my-4 bg-dark">
          <div className="col-12 col-md-6 col-lg-4 d-flex align-items-center justify-content-center px-3">
            <span className="mb-3 mb-md-0 text-light">
              Veronika Tryhubyak, 2ºDAW{" "}
            </span>
            <a href="https://github.com/tryhubyak" className="m-2 text-light">
              Visita mi GitHub
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
