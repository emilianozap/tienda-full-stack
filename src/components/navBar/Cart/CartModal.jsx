import React from "react";
import {
  ContainerCartModal,
  FooterCart,
  HeaderModal,
  MainContainers,
  SubtotalStyled,
  ProductsWrapperStyled,
} from "./CartStyled";
import Button from "../../UI/Button/Button";
import { CartProductsModal } from "./CartProductsModal";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleCart } from "../../../redux/Cart/cartSlice";
import { AiOutlineClose } from "react-icons/ai";
import { formatPrice } from "../../../utils/formatPrice";
import { AnimatePresence} from "framer-motion";

export const CartModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    cartItems,
    shippingCost,
    hidden: hiddenCart,
  } = useSelector((state) => state.cart);

  const totalPrice = cartItems.reduce(
    (acc, item) => (acc += item.price * item.quantity),
    0
  );
  return (
    <AnimatePresence>
      {!hiddenCart && (
        <ContainerCartModal
        initial={{ translateX: 600 }}
        animate={{ translateX: 0 }}
        exit={{ translateX: 600 }}
        transition={{ duration: 0.5 }}
        key="cart">
          <HeaderModal>
            <h1>tus compras</h1>
            <p onClick={() => dispatch(toggleCart())}>
              <AiOutlineClose/>
            </p>
          </HeaderModal>
          <MainContainers>
            <ProductsWrapperStyled>
              {cartItems.length ? (
                cartItems.map((item) => (
                  <CartProductsModal key={item.id} {...item} />
                ))
              ) : (
                <>
                  <p>No hay productos todavía</p>
                  <h1>😢</h1>
                </>
              )}
            </ProductsWrapperStyled>
          </MainContainers>

          <FooterCart>
            <SubtotalStyled>
              <p>Subtotal:</p>
              <span>{formatPrice(totalPrice)}</span>
            </SubtotalStyled>
            <hr />
            <SubtotalStyled>
              <p>Envio:</p>
              <span>{formatPrice(shippingCost)}</span>
            </SubtotalStyled>
            <hr />
            <SubtotalStyled>
              <p>Total:</p>
              <span>{formatPrice(totalPrice + shippingCost)}</span>
            </SubtotalStyled>
            <hr />
            <Button onClick={() => navigate("/pagar")}>completar</Button>
          </FooterCart>
        </ContainerCartModal>
      )}
    </AnimatePresence>
  );
};
