import "../styles/Recipe.css";

export const Recipe = ({ image, title, sections, preparationTime, kcal }) => {
  return (
    <div className="grid-item">
      <img className="recipe-image" src={image.src} alt={image.alt} />
      <p className="recipe-title">{title}</p>
      <p>Sections:{sections} </p>
      <p>Preparation time: {preparationTime} min</p>
      <p>Kcalories: {kcal}</p>
    </div>
  );
};
