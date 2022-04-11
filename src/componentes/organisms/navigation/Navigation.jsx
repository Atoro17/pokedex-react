import React from "react";
import logoApp from "assets/img/logo.png";

const Navigation = () => {
  return (
    <nav className="o-navigation">
      <div className="o-navigation__brand">
        <img
          className="o-navigation__brand__image"
          src={logoApp}
          alt="Logo de la aplicacion"
        />
        <span className="o-navigation__brand__text">POKEDEX_</span>
      </div>
    </nav>
  );
};

export default Navigation;
