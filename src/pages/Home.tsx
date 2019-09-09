import React, { Component } from "react";
import FourColGrid from "../components/FourColGrid";
import HeroImage from "../components/HeroImage";
import LoadMoreBtn from "../components/LoadMoreBtn";
import MovieThumb from "../components/MovieThumb";
import SearchBar from "../components/SearchBar";
import Spinner from "../components/Spinner";

export default class Home extends Component {
  state = {
    movies: [],
    heroImage: null,
    loading: false,
    currentPage: 0,
    totalPages: 0,
    searchTerm: ""
  };

  componentDidMount() {
    this.setState({ loading: true });
  }

  render() {
    const { loading } = this.state;
    return (
      <div className="home">
        <HeroImage />
        <SearchBar />
        <FourColGrid />
        <MovieThumb />
        <button onClick={() => this.setState({ loading: !loading })}>
          Toggle spinner
        </button>
        {loading ? <Spinner /> : null}
        <LoadMoreBtn />
      </div>
    );
  }
}
