import React, { useState } from "react";
import {
  ContainerHeroStyled,
  ContainerImg,
  ContainersImagenHero,
  ContainersSearchHero,
  InputTextHero,
  LabelHero,
} from "./HeroStyled";
import Button from "../../components/UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "../../redux/Categories/categoriesSlice";
import  imgHero  from "../../assets/img/fondo1.avif";

export const Hero = ({ doScroll }) => {
  const [value, setValue] = useState("");

  const listOfCategories = useSelector(
    (state) => state.categories.categories
  ).map((category) => category.category);

  const dispatch = useDispatch();

  const handleSubmit = (e, value) => {
    e.preventDefault();
    const newCategory = value.trim().toLowerCase().split(" ").join("");
    const selectedCategory = listOfCategories.find(
      (category) => category.toLowerCase() === newCategory
    );
    if (selectedCategory) {
      dispatch(selectCategory(selectedCategory));
      doScroll();
    } else {
      return alert("categoria no encontrada");
    }
    setValue("");
  };

  return (
    <ContainerHeroStyled>
      <ContainersSearchHero>
        <LabelHero></LabelHero>
        <InputTextHero
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Ej: hamburguesa"
        ></InputTextHero>
        <Button onClick={(e) => handleSubmit(e, value)}>Buscar</Button>
      </ContainersSearchHero>

      <ContainersImagenHero>
        <ContainerImg>
          <img src={imgHero} alt="" />
          <h1>El trabajo duro debe ser recompensado por la buena hamburguesa</h1>
        </ContainerImg>
      </ContainersImagenHero>
    </ContainerHeroStyled>
  );
};
