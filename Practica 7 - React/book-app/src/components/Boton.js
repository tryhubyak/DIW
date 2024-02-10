import React from "react";
import "../assets/css/Boton.css";

export default function Boton({ name, mensaje, estilos }) {
  return (
    <button style={estilos} onClick={() => alert(mensaje)}>
      {name}
    </button>
  );
}
