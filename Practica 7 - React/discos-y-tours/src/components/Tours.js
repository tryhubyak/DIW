import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import React from "react";
import Boton from "./Boton";
import "../assets/css/Tour.css";

export default function Tours() {
  const [tours, settours] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3060/tours")
      .then((response) => {
        return response.json();
      })
      .then((tours) => {
        settours(tours);
      });
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="text-center">BUY TICKETS</h1>
        <br></br>
        <div className="row tour">
          {tours.map((tour, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
                <hr></hr>
              <p className="tour-date">{tour.date}</p>
              <p className="tour-vanue">{tour.vanue}</p>
              <p className="tour-city">{tour.city}</p>
              <Boton
                name={tour.tickets ? "BUY" : "SOLD OUT"}
                mensaje={tour.tickets ? "Congratulations, ticket adquired" : ""}
                disabled={!tour.tickets}
              />
              <br></br><br></br>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
