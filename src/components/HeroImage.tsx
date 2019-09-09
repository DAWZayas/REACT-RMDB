import React from "react";

const HeroImage: React.FC<HeroImage> = ({ image, title, text }) => {
  return (
    <div
      className="hero-image"
      style={{
        background: `linear-gradient(to bottom, rgba(0,0,0,0)
        39%,rgba(0,0,0,0)
        41%,rgba(0,0,0,0.65)
        100%),
        url('${image}'), #1c1c1c`
      }}
    >
      <div className="hero-image__content">
        <div className="hero-image__text">
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
