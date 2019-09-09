import React from "react";

const MovieThumb = ({ image }: { image: string }) => (
  <div className="moviethumb">
    <img src={image} alt="moviethumb" />
  </div>
);

export default MovieThumb;
