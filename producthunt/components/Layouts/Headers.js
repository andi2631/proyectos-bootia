import React from 'react';
import Buscar from '../ui/buscar';
import Navegacion from './Navegacion';
import Link from 'next/link';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Boton from '../ui/Boton';


const ContenedorHeader = styled.div`
max-width: 1200px;
width: 95%;
margin: 0 auto; /** Para que este centrado */
@media (min-width: 768px){
    display: flex;
    justify-content: space-between; /** parte del contenido izquierda y parte del contenido derecha */
}
`;

const Logo = styled.p`
    color: var(--naranja);
    font-size: 4rem;
    line-height: 0;
    font-weight: 700;
    font-family: 'Roboto Slab', serif;
    margin-right: 2rem;

`;

const Header= () => {
    
    const usuario = false;

    return ( 
        <header
        css={css`
            border-bottom: 2px solid var(--gris3);
            padding: 1rem 0; /** 1rem arriba y abajo y 0 izq y der */
        `}
        >
            <ContenedorHeader>
                <div
                    css={
                        css`
                            display: flex;
                            align-items: center;
                        `
                    }
                >
                    <Link href="/">
                        <Logo>P</Logo>
                    </Link>       

                    <Buscar />
                    
                    <Navegacion/>
                </div>
                <div
                    css={
                        css`
                            display: flex;
                            align-items: center;
                        `
                    }
                >
                    
                   

                    { usuario ?
                    <>
                    <p
                        css={
                            css`
                                margin-right: 2rem;                            
                            `
                        }
                    >Hola: Andi</p>

                    <Boton bgColor="true"
                        type="button">Cerrar sesión</Boton>
                    </>  : 
                    <>
                        <Link href="/login">
                            <Boton
                            bgColor="true"
                            >Login</Boton>                        
                        </Link>
                    <Link href="/crear-cuenta">
                        <Boton>Crear cuenta</Boton> 
                    </Link>
                    </>
                                        
                     }
                </div>
            </ContenedorHeader>
        </header>
     );
}
 
export default Header;