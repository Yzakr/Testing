import React from 'react';
import './componentsStyles/SearchBox.css';

function SearchBox() {
   return (
      <div className="search__box">
         <input type="text" className="search__bar" />
         <a className="search__icon" href="#"><i className="fas fa-search"></i></a>
      </div>
   )
}

export default SearchBox
