import React from 'react'
import { ContainerProductoStyled, InfoCard, InfoPrecio } from './StyledRecomendados'
import  Button  from "../UI/Button/Button";
import { useDispatch } from 'react-redux';
import { addProductsCart } from '../../redux/Cart/cartSlice';

export const ProductoRecomendado = ({title, desc, price, img, id }) => {

  const dispatch = useDispatch()

  return (
    <ContainerProductoStyled>
        <img src={img} alt="" />
        <InfoCard>
        <h1>{title}</h1>
        <p>{desc}</p>
        <InfoPrecio>
          <div>
        <span>precio:</span>
        <span>{price}$</span>
        </div>
        <Button onClick={()=>dispatch(addProductsCart({title, desc, price, img, id }))}>agregar</Button>
        </InfoPrecio>
        </InfoCard>

    </ContainerProductoStyled>
  )
}
