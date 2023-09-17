import React from "react";
import {
  FooterCheckout,
  PedidoContainer,
  PedidosRealizados,
  TotalStyled,
} from "../styledCheckout";
import { formatPrice } from "../../../utils/formatPrice";
import { CartProductsModal } from "../../navBar/Cart/CartProductsModal";


export const ProductCheckout = ({cartItems, shippingCost, price}) => {
  return (
    <PedidoContainer>
      <h1>Disfruta de tus productos</h1>
      <PedidosRealizados>
      {
        cartItems.length ? (
          cartItems.map(item => <CartProductsModal key={item.id } {...item}/>)
        ) : (
          <>
          <p>No hay productos todavía</p>
          </>
        )
      }
   

      </PedidosRealizados>
      <FooterCheckout>
        <TotalStyled>
          <p>Sub-Total:</p>
          <span>{formatPrice(price)}</span>
        </TotalStyled>
        <TotalStyled>
          <p>Envio:</p>
          <span>{formatPrice(shippingCost)}</span>
        </TotalStyled>
        <TotalStyled>
          <p>Total:</p>
          <span>{formatPrice(price + shippingCost)}</span>
        </TotalStyled>

      </FooterCheckout>
      
    </PedidoContainer>
  );
};
