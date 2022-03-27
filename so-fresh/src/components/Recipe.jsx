import { useState } from "react";
import "../styles/Recipe.css";

export const Recipe = ({
  image,
  title,
  sections,
  preparationTime,
  kcal,
  handleCart,
  quantitySelected,
}) => {
  const [quantSelected, setQuantSelected] = useState(quantitySelected);
  const handleClick = (operation, title) => {
    if (quantitySelected <= 0 && operation === -1) {
      return;
    }
    setQuantSelected(quantSelected + operation);
    handleCart(operation, title);
  };
  return (
    <div className="grid-item">
      <img className="recipe-image" src={image.src} alt={image.alt} />
      <p className="recipe-title">{title}</p>
      <p>Sections:{sections} </p>
      <p>Preparation time: {preparationTime} min</p>
      <p>Kcalories: {kcal}</p>
      <button disabled={quantitySelected <= 0} onClick={() => handleClick(-1, title)}>
        -
      </button>
      <p>{quantSelected}</p>
      <button onClick={() => handleClick(1, title)}>+</button>
    </div>
  );
};
