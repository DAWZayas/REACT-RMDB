import React, { Component } from "react";
import FourColGrid from "../components/FourColGrid";
import HeroImage from "../components/HeroImage";
import LoadMoreBtn from "../components/LoadMoreBtn";
import MovieThumb from "../components/MovieThumb";
import SearchBar from "../components/SearchBar";
import Spinner from "../components/Spinner";
import { API_KEY, API_URL } from "../config";
import { fromRMDB_toHeroImage } from "../utils/conversions";

export default class Home extends Component<{}, HomeState> {
  state = {
    movies: [],
    heroImage: null,
    loading: false,
    currentPage: 0,
    totalPages: 0,
    searchTerm: ""
  };

  fetchItems = (endpoint: string) => {
    const { movies, heroImage } = this.state;

    fetch<RMDBMovieResults>(endpoint)
      .then(result => result.json())
      .then(result => {
        this.setState({
          movies: [...movies, ...result.results],
          heroImage:
            !heroImage && result.results.length
              ? fromRMDB_toHeroImage(result.results[0])
              : heroImage,
          loading: false,
          currentPage: result.page,
          totalPages: result.total_pages
        });
      })
      .catch(error => console.error("Error:", error));
  };

  loadMoreItems = () => {
    const { searchTerm, currentPage } = this.state;

    this.setState({ loading: true });
    const endpoint = searchTerm
      ? `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage +
          1}`
      : `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=${currentPage +
          1}`;

    this.fetchItems(endpoint);
  };

  searchItems = (searchTerm: string) => {
    let endpoint = "";
    this.setState({
      movies: [],
      loading: true,
      searchTerm
    });

    if (searchTerm === "") {
      endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    } else {
      endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}`;
    }
    this.fetchItems(endpoint);
  };

  componentDidMount() {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    this.setState({ loading: true });
    this.fetchItems(endpoint);
  }

  render() {
    const { heroImage, loading } = this.state;
    return (
      <div className="home">
        {heroImage ? (
          <div>
            <HeroImage {...heroImage!} />
          </div>
        ) : null}
        <SearchBar doSearch={this.searchItems} />
        <FourColGrid />
        <MovieThumb />
        {loading ? <Spinner /> : null}
        <LoadMoreBtn />
      </div>
    );
  }
}
