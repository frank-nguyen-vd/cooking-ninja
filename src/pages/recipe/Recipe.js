import "./Recipe.css";
import { apiRecipesUrl } from "../../keys";
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

export default function Recipe() {
  const { id } = useParams();
  const { data: recipe, isPending, error } = useFetch(`${apiRecipesUrl}/${id}`);
  return (
    <div className="recipe">
      {isPending && <p className="pending">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p className="method">{recipe.method}</p>
        </>
      )}
    </div>
  );
}
