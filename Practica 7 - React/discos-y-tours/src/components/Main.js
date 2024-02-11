import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import BannerNF from "../assets/img/BannerNF.png";
import "../assets/css/Main.css";
import Tours from "./Tours";
import Albums from "./Albums";

export default function Main() {
  return (
    <>
      <div imagenBanner>
        <img className="images" src={BannerNF} alt="BannerNF.png" />
        <div className="banner">
          <h1 className="bannertext">NF | HOPE TOUR</h1>
        </div>
        <Tours></Tours>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Albums></Albums>
      </div>
    </>
  );
}
