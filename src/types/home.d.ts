type HomeState = {
  movies: Movie[];
  heroImage: Movie | null;
  loading: boolean;
  currentPage: number;
  totalPages: number;
  searchTerm: string;
};
