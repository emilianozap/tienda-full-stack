import React from 'react'
import { CardPrice, ContainerPrice, ProductosCard } from './StyledProductos'
import Button from '../UI/Button/Button'
import { useDispatch } from 'react-redux'
import { addProductsCart } from '../../redux/Cart/cartSlice'

export const Producto = ({title, desc, price, img, id }) => {
  const dispatch = useDispatch()
  return (
    <ProductosCard>
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <p>{desc}</p>
        <ContainerPrice>
            <div>
            <CardPrice>precio:</CardPrice>
            <CardPrice>{price}$</CardPrice>
            </div>
            <Button onClick={()=> dispatch(addProductsCart({title, desc, price, img, id }))}>agregar</Button>


        </ContainerPrice>

    </ProductosCard>
  )
}
