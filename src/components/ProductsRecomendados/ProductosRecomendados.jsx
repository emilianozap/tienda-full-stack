import React from 'react'
import { ContainersRecomendadosStyled } from '../ProductsRecomendados/StyledRecomendados'
import { ProductoRecomendado } from './ProductoRecomendado';
import { useSelector } from 'react-redux';

export const ProductosRecomendados = () => {

  const recomendados = useSelector(state => state.recommended.recommended)

  return (
    <ContainersRecomendadosStyled>
        {
            recomendados.map(products=>(<ProductoRecomendado key={products.id} {...products}/>))
           
        }
    </ContainersRecomendadosStyled>
  )
}
