import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

interface IFavoriteImages {
  imageLink: string;
}

export const FavouriteImages = () => {
  const [favoriteImages, setFavoriteImages] = useState<IFavoriteImages[]>([]);

  const { user } = useAuth0();

  useEffect(() => {
    const fetchFavoriteImages = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/favouriteImages/${user?.sub}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("error");
        }
        const data = await response.json();

        if (data.length > 0) {
          setFavoriteImages(data[0].myFavImages || []);
        } else {
          setFavoriteImages([]);
        }

        // setFavoriteImages(data.myFavImages || [])
      } catch (error) {
        console.error("error", error);
      }
    };
    fetchFavoriteImages();
  }, [user?.sub]);

  return (
    <div id="imagesResult">
      {favoriteImages &&
        favoriteImages.map((image, index) => (
          <div id="imageSearchContainer">
            <div className="imgContainer">
              <img
                key={index}
                src={image.imageLink}
                alt={`Favorite Image ${index}`}
              />
            </div>
          </div>
        ))}
    </div>
  );
};
