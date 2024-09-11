import React from "react";
import Teoria from "./Teoria";

const Informacion = () => {
  // Aqui la mayor parte de logica

  const anio = new Date().getFullYear();

  return (
    // algo de logica, pero no se suele. solo maquetado del sitio
    <section>
      <h2>Introduccion a react </h2>
      <p>
        React es una bibliotecca de JavasScript desarrolada por facebook para
        construir interfaces de usuario. se destaca por su enfoque en la
        creacion de aplicaciones web de una sola pagina SPA y su capacidad para
        manejar la interfaz de manera eficiente mediante el uso de un
        <span className="parrafoResaltado "> DOM virtual. </span>React permite a
        los desarroladores construir inter aces dinamicas y reactivas de forma
        modular, lo que facilita el desarollo el mantenimiento de aplicaicones a
        gran escala.
      </p>

      {/* enviar un props */}

      <Teoria comision='101i' anioActual={anio}></Teoria>

    </section>
  );
};

export default Informacion;
