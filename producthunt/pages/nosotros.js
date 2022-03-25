import react from 'react'
import Layouts from '../components/Layouts/Layouts'


export default function Nosotros() {
  //Siempre va a estar el header renderizado, luego, va todo lo que va dentro de layouts, que vienen a ser los props.children, definido dentro de Layoouts, en este caso el h1
  return (    
    <div>
      <Layouts>
        <h1>Nosotros</h1>
      </Layouts>
    </div>
  )
}
