import React from 'react';
import './componentsStyles/Divisions.css';

function Divisions(props) {
   
   return (
      <>
         <div className="setup__division">
            <h1 className="medium__title">{props.divTitle}</h1>
            <br />
            <hr className="gray__line" />
            <span className="red__box">{props.divNumber}</span>
         </div>
      </>
   )
}

export default Divisions
