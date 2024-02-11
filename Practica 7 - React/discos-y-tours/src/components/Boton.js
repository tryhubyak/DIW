import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

export default function Boton({ name, mensaje, disabled }) {
  const botonStyles = {
    padding: "10px 20px",
    borderRadius: "5px",
    border: '1px solid #5c5755',
    color: "white",
    cursor: "pointer",
    outline: "none",
    backgroundColor: disabled ? "#737061" : "gray",
  };

  return (
    <button
      style={botonStyles}
      onClick={() => alert(mensaje)}
      disabled={disabled}
    >
      {name}
    </button>
  );
}
