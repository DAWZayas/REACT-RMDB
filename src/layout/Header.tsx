import React from "react";
import logo from "../assets/images/reactMovie_logo.png";
import tmdb_logo from "../assets/images/tmdb_logo.png";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img className="header__logo" src={logo} alt="logo"></img>
        <img
          className="header__tmdb-logo"
          src={tmdb_logo}
          alt="tmdb-logo"
        ></img>
      </div>
    </header>
  );
};

export default Header;
