import "bootstrap/dist/css/bootstrap.min.css";
import Informacion from "./componentes/Informacion";
import Contador from "./componentes/Contador";

function App() {
  return (
    <main className="container my-4">
      <h1 className="text-center">Hola mundo</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad facilis
        alias iure odit enim sunt accusantium soluta repellat commodi, eligendi
        aliquam ab explicabo. Commodi incidunt quas nihil! Quisquam, odit
        deleniti!
      </p>
      {/* invocar los componentes */}

      <Informacion></Informacion>
      <Contador></Contador>
      
    </main>
  );
}

export default App;
