import React, { useEffect, useState } from 'react'
import { ProductosContainer, ButtonContainerStyled } from './StyledProductos'
import { Producto } from './Producto';
import { useSelector } from 'react-redux';
import { INITIAL_LIMIT } from "../../utils/constants";
import  Button  from "../UI/Button/Button";





export const Productos = () => {

  const [limit, setLimit] = useState(INITIAL_LIMIT);

  let products = useSelector(state => state.products.products);
  const selectedCategory = useSelector(
    state => state.categories.selectedCategory
  );

  const totalProducts = useSelector(state => state.products.totalProducts);

  if (selectedCategory) {
    products = {
      [selectedCategory]: products[selectedCategory],
    };
  }

  useEffect(() => setLimit(INITIAL_LIMIT), [selectedCategory]);
  

  return (
    <>
      <ProductosContainer>
        {Object.entries(products).map(([_category, foods]) =>
          foods.map(product => {
            if (limit >= product.id || selectedCategory) {
              return <Producto key={product.id} {...product} />;
            } else return null;
          })
        )}
        
      </ProductosContainer>

      {!selectedCategory && (
        <ButtonContainerStyled>
          <Button
            onClick={() => setLimit(prevLimit => prevLimit - INITIAL_LIMIT)}
            secondary='true'
            disabled={limit === INITIAL_LIMIT}
          >
            <span>Ver menos</span>
          </Button>
          <Button
            onClick={() => setLimit(prevLimit => prevLimit + INITIAL_LIMIT)}
            disabled={totalProducts <= limit}
          >
            <span>Ver más</span>
          </Button>
        </ButtonContainerStyled>
      )}
    </>
  );
}
