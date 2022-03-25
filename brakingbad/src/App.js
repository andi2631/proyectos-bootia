import logo from './logo.svg';
import styled from '@emotion/styled';

const Contenedor = styled.div`
    display: flex;
    align-items: center;
    padding-top: 5rem;
    flex-direction: column;

`;

const Boton = styled.button`
    background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%); /*usa un fondo con degrade, se hace de esta manera*/
    background-size: 300px;
    font-family: Arial, Helvetica, sans-serif;
    color: #fff;
    margin-top: 3rem;
    padding: 1rem 3rem;
    font-size: 2rem;
    border: 2px solid black;    


`;

function App() {

  const consultarAPI  = () => {
    console.log('consultando')
    const resultado = fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes') //dentro del fetch, va el link a la API
    console.log(resultado)
  }


  return (
    <Contenedor>
      <Boton
        onClick={/*consultarAPI() asi la funcion se ejecutaria sin ni siquiera presionar el boton */ 
        consultarAPI
        }  
      >
        Obtener Frase
      </Boton>
    </Contenedor>
    
  );
}

export default App;
