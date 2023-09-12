import React from "react";
//import logo from "../../assets/img/logo.png";
import { Styledfooter } from "./FooterStyled";
import  logo  from "../../assets/img/logo.png";



export const Footer = () => {
  return (
    <Styledfooter>
      <img src={logo} alt="logo" />
      <h1>Una dieta equilibrada es una hamburguesa en ambas manos</h1>
      <p>Creado por Emiliano Zapata (2023) ©</p>

      
    </Styledfooter>
  );
};
