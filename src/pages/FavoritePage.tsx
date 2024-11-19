/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { useStore } from "../store/store";

function FavoritePage() {
  const { favorites, removeFavorite }: any = useStore();
  return (
    <>
      <h2>Favorites</h2>
      <ul>
        {favorites.map((photo: any) => (
          <li key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <p>{photo.title}</p>
            <p>
              By User: <Link to={`/users/${photo.userId}`}>{photo.userId}</Link>
            </p>
            <button onClick={() => removeFavorite(photo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default FavoritePage;
