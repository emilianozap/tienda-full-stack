import React from 'react'
import { ContainerError, ContainerNotFound } from "./PageNotFoundStyled";
import perdido from "../../assets/img/paginaNoEncontrada.png";
import Button from '../../components/UI/Button/Button';

export const PageNotFound = () => {
  return (
    <ContainerNotFound>
    <ContainerError>
    <h1>404 Error</h1>
    <img src={perdido} alt="pagina no encontrada" />
          
          <p>Parece que la página que buscás no existe o fue removida</p>

    </ContainerError>
    <Button>volver</Button>




    </ContainerNotFound>
    
  )
}
