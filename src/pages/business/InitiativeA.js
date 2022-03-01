import React from 'react'
import { Link } from 'react-router-dom'
import CurrentDate from '../../components/CurrentDate'

function InitiativeA() {

   return (
      <div className="general__background">
         <div className="chooseDash__container">
            <h1 className="marginTop__onMobile--4rem">Initiative A Dashboard</h1>
            <br /><div className="float__right"><CurrentDate /></div><br /><br />
            <hr className="gray__line" />
            <br />
            <i className="fas fa-filter"></i> &nbsp;&nbsp;

            <div className="business__dropdown">
               <div className="dropdownBtn">Business Metrics <i class="fas fa-chevron-down"></i></div>
               <div className="dropdown__content">
                  <Link to="/initiative-a-costs">Costs</Link>
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
               <div className="metrics__table gh__borderRight">
                  <h3>Financial Metrics</h3>
                  <ul className="metrics__list">
                     <li>Initiative ROI <span className="float__right">000.00%</span></li>
                     <li>Total Cost per Initiative <span className="float__right">$ 00000000.00</span></li>
                     <li>Average Cost per Release  <span className="float__right">$ 00000000.00</span></li>
                     <li>Cost of Initiative SLAs Achievement <span className="float__right">$ 00000000.00</span></li>
                     <br />
                     <a href="#" className="ghost__btn--initiative">Financial Projections <i class="fas fa-link"></i></a>
                  </ul>
               </div>
               <div className="metrics__table">
                  <h3>Performance Metrics</h3>
                  <a href="#" className="ghost__btn--initiative">Development Time-to-Market <i class="fas fa-link"></i></a>
                  <br /><br />
                  <ul className="metrics__list">
                     <li>Staff Productivity <span className="float__right">000.00%</span></li>
                     <li>DevOps Customer Acceptance Rate <span className="float__right">000.00%</span></li>
                     <li>SLAs Breaches <span className="float__right">000.00%</span></li>
                     <li>DevOps Change Management Process Efficiency <span className="float__right">000.00%</span></li>
                     <li>DevOps Release Management Process Efficiency <span className="float__right">000.00%</span></li>
                     <li>DevOps Practices Adoption Progress <span className="float__right">000.00%</span></li>
                  </ul>
               </div>
            </div>
         </div>

      </div>
   )
}

export default InitiativeA
