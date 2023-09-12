import React from "react";
import { formatPrice } from "../../../utils/formatPrice";
import { ContainerButton, ContainerProductoStyled, InfoCard, InfoPrecio } from "./CartStyled";
import { RiAddCircleFill, RiIndeterminateCircleFill } from "react-icons/ri";
import { RiDeleteBack2Fill} from "react-icons/ri";
import { useDispatch } from "react-redux";
import { addProductsCart, removeProductCart } from "../../../redux/Cart/cartSlice";


export const CartProductsModal = ({ img, title,  price, quantity, id }) => {
  const dispatch = useDispatch()
  return (
    <ContainerProductoStyled>
      <img src={img} alt={title} />
      <InfoCard>
        <h1>{title}</h1>

        <InfoPrecio>
          <div>
            <span>precio:</span>
            <span>{formatPrice(price)}</span>
          </div>
        </InfoPrecio>
      </InfoCard>
      <ContainerButton>
       <span onClick={()=>dispatch(addProductsCart({ img, title,  price, quantity, id }))}><RiAddCircleFill/></span> 
        <p>{quantity}</p>
       <span onClick={()=> dispatch(removeProductCart(id))}>{quantity === 1 ? <RiDeleteBack2Fill/>: <RiIndeterminateCircleFill/>} </span>
      </ContainerButton>
    </ContainerProductoStyled>
  );
};
