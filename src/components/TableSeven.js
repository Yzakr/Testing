import React from 'react';
import './componentsStyles/TableSeven.css';

function TableSeven() {
   return (
   <>
      <div className="tableSeven">
         <ul>
            <li>
               <div className="td__active">Area Name <button className="circle__btn circle__btn--active">-</button></div>
            </li>
            <li>
               <div>Area Name <button className="circle__btn">+</button></div>
            </li>
            <li>
               <div>Area Name <button className="circle__btn">+</button></div>
            </li>
            <li>
               <div>Area Name <button className="circle__btn">+</button></div>
            </li>
         </ul>
      </div>
   </>
   )
}

export default TableSeven