import React from 'react';
import './componentsStyles/SlaCard.css';

function SlaCard(props) {
   return (
      <div className="sla__card">
         <p>{props.slaTitle}</p>
         <span className="currency__input dark__input"><input className="anti__input anti__medium" type="number" placeholder="Type Here" required min="0.00" max="100.00" step="0.01"/>%</span>
      </div>
   )
}

export default SlaCard
