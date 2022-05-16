import "./Recipe.css";
import { useParams } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import { useState, useEffect } from "react";

import { projectFirestore } from "../../firebase/config";

export default function Recipe() {
  const { mode } = useTheme();
  const { id } = useParams();

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);

    const unsub = projectFirestore
      .collection("recipes")
      .doc(id)
      .onSnapshot(
        (doc) => {
          setIsPending(false);
          if (doc.exists) {
            setData({ id: doc.id, ...doc.data() });
          } else {
            setError("The requested recipe does not exist...");
          }
        },
        (err) => {
          setIsPending(false);
          setError(err.message);
        }
      );
    return () => unsub();
  }, [id]);

  const handleClick = () => {
    projectFirestore.collection("recipes").doc(id).update({
      title: "Updated Title 2",
    });
  };

  return (
    <div className={`recipe ${mode}`}>
      {isPending && <p className="pending">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {data && (
        <>
          <h2 className="page-title">{data.title}</h2>
          <p>Takes {data.cookingTime} to cook.</p>
          <ul>
            {data.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p className="method">{data.method}</p>
          <button onClick={handleClick}>update me</button>
        </>
      )}
    </div>
  );
}
