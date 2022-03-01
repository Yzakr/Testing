import React from 'react';
import './componentsStyles/TimeframeCard.css';

function TimeFrameCard(props) {
   return (
      <div className="timeFrame__card">
         <div className="timeFrame__head">{props.timeFrameTitle}</div>
         <div className="timeFrame__body">
            {props.timeFrameSub1}
            <br />
            {props.timeFrameSub2}
         </div>
         <div className="timeFrame__footer">
            <i className="far fa-clock"></i>&nbsp;&nbsp;
            <select className="dark__input inputForCard">
               <option>Timeframe</option>
               <option>Today</option>
               <option>Last Week</option>
               <option>Last Two Weeks</option>
               <option>Last Month</option>
            </select>&nbsp;&nbsp;
            <button className="red__btn small__btn">{props.timeFrameButton}</button>
         </div>
      </div>
   )
}

export default TimeFrameCard
