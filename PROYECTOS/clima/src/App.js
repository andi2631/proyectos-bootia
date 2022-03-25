import react, { Fragment } from "react";
import Formulario from "./Components/Formulario";
import Header from "./Components/Header";

function App() {
  return (
    <Fragment>
      <Header 
        titulo='clima react app'  />
        <div className="contenedor-form">
          <div className="container">
            <div className="row">
              <div className="col m6 s12">
                  <Formulario/>
              </div>
              <div className="col m6 s12"> 
                  2
              </div>
            </div>
          </div>
        </div>
      
    </Fragment>
  );
}

//el row y col, le dice a materialize que quiere usar las columnas
//para tamaño mediano quiero que tome 6 de las 12 columnas y para small 12

export default App;
