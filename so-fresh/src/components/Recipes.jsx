import { Recipe } from "./Recipe";
import "../styles/Recipes.css";

export const Recipes = ({ recipes }) => {
  return (
    <div className="grid-container">
      {recipes.map((recipe) => (
        <Recipe
          image={recipe.image}
          title={recipe.title}
          sections={recipe.sections}
          preparationTime={recipe.preparationTime}
          kcal={recipe.kcal}
        />
      ))}
    </div>
  );
};
