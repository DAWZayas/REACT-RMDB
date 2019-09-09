type HomeState = {
  movies: Array<unknown>;
  heroImage: HeroImage | null;
  loading: boolean;
  currentPage: number;
  totalPages: number;
  searchTerm: string;
};
