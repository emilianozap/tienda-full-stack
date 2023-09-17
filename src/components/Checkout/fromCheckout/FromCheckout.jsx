import React from "react";
import { InfoBox, Formik, Form } from "../styledCheckout";
import { BsPersonDown, BsTelephone } from "react-icons/bs";
import { BiDirections } from "react-icons/bi";
import Submit from "../../UI/Submit/Submit";
import Input from "../../UI/Input/Input";
import { checkoutInitialValues } from "../../../formik/initialValue";
import { createOrder } from '../../../axios/axios-orders';
import { checkoutValidationSchema, } from "../../../formik/validationSchema";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../../redux/Cart/cartSlice";
import Loader from "../../UI/Loader/Loader";

export const FromCheckout = ({ cartItems, shippingCost, price }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const{ currentUser }=  useSelector(state=> state.user)



  return (
    <InfoBox>
      <Formik
        initialValues={checkoutInitialValues}
        validationSchema={checkoutValidationSchema}
       onSubmit={async values =>{
        const orderData = {

         items: cartItems,
          price,
          shippingCost,
          total: price + shippingCost,
          shippingDetails: {...values}
        }

        try {
          await createOrder(orderData, dispatch, currentUser);
          navigate('/felicitaciones');
          dispatch(clearCart())
        } catch (error) {
          alert("algo salio mal al crear la orden")
        }


       }}
      >
        {({ isSubmitting }) => (
            <Form>
          <Input
            htmlFor='name'
            name='name'
            type='text'
            id='name'
            placeholder='Tu nombre'
            logo={<BsPersonDown />}
          >
            Nombre
          </Input>

          <Input
            htmlFor='cellphone'
            type='text'
            name='cellphone'
            id='cellphone'
            placeholder='Tu celular'
            logo={<BsTelephone />}
          >
            Celular
          </Input>
          <Input
               htmlFor='location'
               type='text'
               name='location'
               id='location'
               placeholder='Tu localidad'
            logo={<BiDirections />}
          >
            Localidad
          </Input>
          <Input
            htmlFor='address'
            type='text'
            name='address'
            id='address'
            placeholder='Tu dirección'
          >
            Dirección
          </Input>
          <div>
          <Submit disabled={!cartItems.length}>{
            isSubmitting? <Loader/> : `iniciar pedido`
          }</Submit>
          </div>
        </Form>
        )}
      </Formik>
    </InfoBox>
  );
};
