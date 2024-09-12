import { useState } from "react";

const Contador = () => {
  // mayor parte de la logica

  // let numero = 1

  // crear un estado

  const [numero, setNumero] = useState(1);

  const sumar = () => {
    //numero++
    setNumero(numero + 1);
  };

  return (
    <section className="text-center my-5">
      <h2>Contador</h2>
      <h4>{numero}</h4>
      <button className="btn btn-primary me-3" onClick={sumar}>
        +1
      </button>
      <button className="btn btn-danger" onClick={() => setNumero(numero - 1) }>-1</button>
    </section>
  );
};

export default Contador;
