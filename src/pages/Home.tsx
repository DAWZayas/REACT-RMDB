import React, { Component } from "react";
import FourColGrid from "../components/FourColGrid";
import HeroImage from "../components/HeroImage";
import LoadMoreBtn from "../components/LoadMoreBtn";
import MovieThumb from "../components/MovieThumb";
import SearchBar from "../components/SearchBar";
import Spinner from "../components/Spinner";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <HeroImage />
        <SearchBar />
        <FourColGrid />
        <MovieThumb />
        <Spinner />
        <LoadMoreBtn />
      </div>
    );
  }
}
