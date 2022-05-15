import "./Search.css";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { apiRecipesUrl } from "../../keys";
import RecipeList from "../../components/RecipeList";

export default function Search() {
  const queryString = useLocation();
  const queryParams = new URLSearchParams(queryString.search);
  const query = queryParams.get("q");
  const url = `${apiRecipesUrl}?q=${query}`;
  const { error, isPending, data } = useFetch(url);

  return (
    <div>
      <h2 className="page-title">Recipes including "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
