import { useLoaderData, useParams } from "react-router-dom";
import { useStore } from "../store/store";

interface PhotoParams {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

// eslint-disable-next-line react-refresh/only-export-components, @typescript-eslint/no-explicit-any
export const albumLoader = async ({ params }: any) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${params.userId}/photos`
  );
  const photos = await response.json();
  return photos;
};

function AlbumDetails() {
  const photos = useLoaderData() as PhotoParams[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { addFavorite, removeFavorite, favorites }: any = useStore();
  const { userId } = useParams();

  const handleFavoriteClick = (photo: PhotoParams) => {
    if (favorites?.some((fav: PhotoParams) => fav.id === photo.id)) {
      removeFavorite(photo.id);
    } else {
      addFavorite({ ...photo, userId: Number(userId) });
    }
  };
  return (
    <>
      <div>
        <h2>Photos</h2>
        <ul>
          {photos?.map((photo) => (
            <li key={photo.id}>
              <img src={photo.thumbnailUrl} alt={photo.title} />
              <p>{photo.title}</p>
              <button onClick={() => handleFavoriteClick(photo)}>
                {favorites?.some((fav: PhotoParams) => fav.id === photo.id)
                  ? "Unfavorite"
                  : "Favorite"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default AlbumDetails;
