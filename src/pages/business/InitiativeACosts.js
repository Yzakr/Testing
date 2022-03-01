import React from 'react'
import { Link } from 'react-router-dom'
import CurrentDate from '../../components/CurrentDate'

function InitiativeACosts() {

   return (
      <div className="general__background">
         <div className="chooseDash__container">
            <h1 className="marginTop__onMobile--4rem">Initiative A Dashboard</h1>
            <br /><div className="float__right"><CurrentDate /></div><br /><br />
            <hr className="gray__line" />
            <br />
            <i className="fas fa-filter"></i> &nbsp;&nbsp;

            <div className="business__dropdown">
               <div className="dropdownBtn">Costs <i class="fas fa-chevron-down"></i></div>
               <div className="dropdown__content">
                  <Link to="/initiative-a">Business Metrics</Link>
                  <Link to="/initiative-a-resources">Resources</Link>
               </div>
            </div>&nbsp;&nbsp;

            <a href="#"><i class="fas fa-plus"></i></a>
         </div>

         <div className="initiatives__container">
            <table className="initiatives__table">
               <thead className="tableInitiatives__head">
                  <tr>
                     <th>ID</th>
                     <th>Name</th>
                     <th>Description</th>
                  </tr>
               </thead>
               <tbody className="tableInitiatives__body">
                  <tr>
                     <td>*******</td>
                     <td>*******</td>
                     <td>*******</td>
                  </tr>
               </tbody>
            </table>

            <table className="initiatives__table">
               <thead className="tableInitiatives__head">
                  <tr>
                     <th>Start Date</th>
                     <th>Status</th>
                     <th>Initiative Lead Name </th>
                     <th>Last Updated</th>
                     <th>Delayed</th>
                  </tr>
               </thead>
               <tbody className="tableInitiatives__body">
                  <tr>
                     <td>*******</td>
                     <td>*******</td>
                     <td>*******</td>
                     <td>*******</td>
                     <td>*******</td>
                  </tr>
               </tbody>
            </table>
         </div>

         <div className="general__container">
            <div className="metrics__content">
               <div className="metrics__table widht100">
                  <h2>Initiative A Costs</h2>
                  <br />
                  <ul className="metrics__list">
                     <li><h4>Total Cost per Initiative <span className="float__right">$ 00000000.00</span></h4></li>
                     <li><h4>Forecasted Initiative Cost <span className="float__right">$ 00000000.00
                     &nbsp;&nbsp;&nbsp;&nbsp; Cost % Difference&nbsp;&nbsp; 000.00%</span></h4></li>
                     <br />
                     <li>Average Cost per Release  <span className="float__right">$ 00000000.00</span></li>
                     <li>Cost of Initiative SLAs Achievement <span className="float__right">$ 00000000.00</span></li>
                     <br />
                     <h4>Cost Elements</h4>
                     <li>Cloud <span className="float__right">$ 00000000.00</span></li>
                     <li>Tools <span className="float__right">$ 00000000.00</span></li>
                     <li>HR <span className="float__right">$ 00000000.00</span></li>
                     <li>Cultural adoption <span className="float__right">$ 00000000.00</span></li>
                  </ul>
               </div>
            </div>
         </div>

      </div>
   )
}

export default InitiativeACosts
