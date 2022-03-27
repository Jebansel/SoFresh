import { Recipe } from "./Recipe";
import "../styles/Recipes.css";

export const Recipes = ({ recipes, handleCart }) => {
  return (
    <div className="grid-container">
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.title}
          image={recipe.image}
          title={recipe.title}
          sections={recipe.sections}
          preparationTime={recipe.preparationTime}
          kcal={recipe.kcal}
          handleCart={handleCart}
        />
      ))}
    </div>
  );
};
