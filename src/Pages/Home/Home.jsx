import React, { useRef } from 'react'
import { Hero } from '../../components/hero/Hero'
import { CategoriasWrapper, HomeWrapper, ProductosWrapper, RecomendadosWrapper } from './HomeStyled'
import { ProductosRecomendados } from '../../components/ProductsRecomendados/ProductosRecomendados'
import { Categorias } from '../../components/Categorias/Categorias'
import { Productos } from '../../components/Productos/Productos'

export const Home = () => {

  const productsRef = useRef()
  const doScroll = ()=>{
    window.scrollTo(
      productsRef.current.getBoundingClientRect().x,
      productsRef.current.getBoundingClientRect().y,
    )
  }

  return (
    <HomeWrapper>
    <Hero doScroll={doScroll}/>

    <RecomendadosWrapper>
    <h1>Nuestros productos mas pedidos⭐</h1>
   <ProductosRecomendados/>
   </RecomendadosWrapper>

   <CategoriasWrapper>
    <h1>¿Que deseas comer hoy? 😉</h1>
    <Categorias></Categorias>
   </CategoriasWrapper>

   <ProductosWrapper ref={productsRef}>
    <h1>Nuestros Productos 🍔</h1>
    <Productos/>

   </ProductosWrapper>
    
    </HomeWrapper>
  )
}

