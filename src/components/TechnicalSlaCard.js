import React from 'react';
import './componentsStyles/TechnicalSlaCard.css';

function TechnicalSlaCard(props) {
   return (
      <div className="techSla__card">
         <div className="techSla__head">
            <p>{props.techSlaTitle}</p>
         </div>
         <div className="techSla__body">
            <span><i className="fas fa-circle circleGreen"></i></span> {props.successfulSla}
            <br />
            <span><i className="fas fa-circle circleRed"></i></span> {props.failedSla}
         </div>
         <div className="techSla__footer">
            <div className="flexSla">
               <hr className="slaLine" />SLAs<hr className="slaLine" />
            </div>
            
            <div>
               <p>Agreed</p>
               <div className="flexProgress">
                  <div className="slaProgress "><span className={"sp__50"}></span></div> {Math.round(Number(props.successfulSla)/Number(props.totalSla)*100)}%
               </div>
            </div>

            <div>
               <p>Achieved</p>
               <div className="flexProgress">
                  <div className="slaProgress"><span className="sp__50"></span></div> {Math.round(Number(props.failedSla)/Number(props.totalSla)*100)}%
               </div>
            </div>
         </div>
      </div>
   )
}

export default TechnicalSlaCard
