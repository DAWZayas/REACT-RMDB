import no_image from "../assets/images/no_image.jpg";
import { BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE } from "../config";

export const fromRMDBMovie_toMovie = (rmdbMovie: RMDBMovie): Movie => {
  return {
    id: rmdbMovie.id,
    image: `${IMAGE_BASE_URL}${BACKDROP_SIZE}${rmdbMovie.backdrop_path}`,
    text: rmdbMovie.overview,
    title: rmdbMovie.original_title,
    poster: rmdbMovie.poster_path
      ? `${IMAGE_BASE_URL}${POSTER_SIZE}${rmdbMovie.poster_path}`
      : no_image
  };
};
