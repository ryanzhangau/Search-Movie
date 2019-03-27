import React, { useState } from "react";
import "../styles/header.scss";

const Header = () => {
  const [menu, showMenu] = useState(false);
  return (
    <header>
      <div className="logo">
        MF
        <div className="site-title">Movie Finder</div>
      </div>
      <div className="menu">
        <div className="menu-trigger" onClick={() => showMenu(!menu)}>
          <span />
          <span />
          <span />
        </div>
        <nav onClick={() => showMenu(false)} className={menu ? "show" : ""}>
          <a href="#/">Home</a>
          <a href="#/watchlist">Watchlist</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
