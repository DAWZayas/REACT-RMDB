import { BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

export const fromRMDB_toHeroImage = (rmdbMovie: RMDBMovie): HeroImage => {
  return {
    image: `${IMAGE_BASE_URL}${BACKDROP_SIZE}${rmdbMovie.backdrop_path}`,
    text: rmdbMovie.overview,
    title: rmdbMovie.original_title
  };
};
