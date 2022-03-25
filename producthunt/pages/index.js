import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from '@emotion/styled'
import Layouts from '../components/Layouts/Layouts'



export default function Home() {
  //Siempre va a estar el header renderizado, luego, va todo lo que va dentro de layouts, que vienen a ser los props.children, definido dentro de Layoouts, en este caso el h1
  return (    
    <div>
      <Layouts>
        <h1>Inicio</h1>
      </Layouts>
    </div>
  )
}

/*
const Heading = styled.h1`
  color: red;
`

export default function Home() {
  return (
    //SOBRE CSS EN JS: Es bueno tener todo en un solo lugar. No carga la parte de estilos, hasta que no este renderizado el componente. Si elimino el componente tambien se elimina la prate de estilos, por los cualese ses mas comodo
    <div>
      <Heading>INICIO</Heading>
      <style jsx>{`
        h1 {
          color: red;
        }
      `}

      </style>
    </div>
  )
}*/