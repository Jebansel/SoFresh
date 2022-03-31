import { Recipe } from "./Recipe";
import "../styles/Recipes.css";

export const Recipes = ({ recipes, handleCart }) => {
  return (
    <div className="grid-container">
      {recipes.map((recipe) => (
        <Recipe key={recipe.title} {...recipe} handleCart={handleCart} />
      ))}
    </div>
  );
};
