import { useFetch } from "../../components/hooks/useFetch";
import { apiRecipesUrl } from "../../keys";

// styles
import "./Home.css";

// components
import RecipeList from "../../components/RecipeList";

export default function Home() {
  const { data: recipes, isPending, error } = useFetch(apiRecipesUrl);

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipes && <RecipeList recipes={recipes} />}
    </div>
  );
}
