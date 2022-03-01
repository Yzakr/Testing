import React from 'react';
import { Link } from 'react-router-dom';
import './componentsStyles/Button.css';

const STYLES = ['red__btn', 'gray__btn', 'ghost__btn', 'null__btn', 'filter__btn'];

const SIZES = ['small__btn', 'medium__btn', 'large__btn', 'sync__btn'];

export const Button = ({
   children,
   type,
   onClick,
   buttonStyle,
   buttonSize
}) => {
   const checkButtonStyle = STYLES.includes(buttonStyle)
   ? buttonStyle
   : STYLES[0];

   const checkButtonSize = SIZES.includes(buttonSize)
   ? buttonSize
   : SIZES[0]

   return (
      <Link to=''>
         <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
         >
            {children}
         </button> 
      </Link>
   );
};

