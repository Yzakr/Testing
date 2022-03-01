import React from "react";
import "./componentsStyles/Header.css";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <div className="header">
        <Link 
          className="header__container"
          to="/choose-dashboard"
        >
          <img
            loading="lazy"
            className="header__container--logo"
            src="./img/logo/logo-small.png"
            alt="Dobcon Small Logo"
          />
        </Link>

      </div>
      <div className="under__header">
        <img
          id="logo-preview"
          loading="lazy"
          className="user__logo"
          src={"./img/logo/alternate-logo.png"}
          alt="Default Logo"
        />
      </div>
    </>
  );
}

export default Header;
