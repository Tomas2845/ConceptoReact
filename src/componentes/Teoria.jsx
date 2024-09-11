import React from "react";

const Teoria = (props) => {
  return (
    <article>
      <h3>Componentes</h3>
      <p>
        Uno de los conceptos clave de react son los componentes. Un componente
        es una ieza reutilizable de la interfaz de usuario que se encarga
        reprosentar una parte especifica de la pantalla. Los componentes pueden
        ser tansimples como un boton o tan complejos como un formulario
        completo. REACT permite la creacion de componentes tanto de clase como
        funcionales, aunque los componentes funcionales se gan vuelto mas
        populares con la introduccion de los hooks
      </p>
      <h4>Comision: {props.comision} anio: {props.anioActual}</h4>
    </article>
  );
};

export default Teoria;
