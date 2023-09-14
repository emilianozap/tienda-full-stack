import React from "react";
import {
  CheckOutContainer,
  FinalizarContainer,
  ImgFond,
} from "./FinalizarStyled";
import { FromCheckout } from "../../components/Checkout/fromCheckout/FromCheckout";
import { ProductCheckout } from "../../components/Checkout/ProductCheckout/ProductCheckout";
import { useSelector } from "react-redux";
import fondo from "../../assets/img/fondo.png";

export const FinalizarCompra = () => {
  const { cartItems, shippingCost } = useSelector((state) => state.cart);

  const totalPrice = cartItems.reduce(
    (acc, item) => (acc += item.price * item.quantity),
    0
  );
  return (
    <FinalizarContainer>
      <h1>finalizar tu compra</h1>
      <CheckOutContainer>
        <FromCheckout
          cartItems={cartItems}
          shippingCost={shippingCost}
          price={totalPrice}
        />

        <ProductCheckout
          cartItems={cartItems}
          shippingCost={shippingCost}
          price={totalPrice}
        />
      </CheckOutContainer>
      <ImgFond src={fondo}></ImgFond>
    </FinalizarContainer>
  );
};
