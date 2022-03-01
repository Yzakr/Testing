import React from 'react'
import { Link } from 'react-router-dom'
import CurrentDate from '../../components/CurrentDate'

function InitiativeAResources() {

   return (
      <div className="general__background">
         <div className="chooseDash__container">
            <h1 className="marginTop__onMobile--4rem">Initiative A Dashboard</h1>
            <br /><div className="float__right"><CurrentDate /></div><br /><br />
            <hr className="gray__line" />
            <br />
            <i className="fas fa-filter"></i> &nbsp;&nbsp;

            <div className="business__dropdown">
               <div className="dropdownBtn">Resources <i class="fas fa-chevron-down"></i></div>
               <div className="dropdown__content">
                  <Link to="/initiative-a">Business Metrics</Link>
                  <Link to="/initiative-a-costs">Costs</Link>
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
            <div className="flex__container">
               <div className="col__20">
                  <h3>Initiative Lead:</h3>
                  <p>Initiative Lead:</p>
               </div>
               <div className="col__20">
                  <h3>Staff Productivity:</h3>
                  <p>Staff productivity:</p>
               </div>
               <div className="col__60">
                  <h3>DevOps Customer Acceptance Rate:</h3>
                  <p>DevOps Customer Acceptance Rate:</p>
               </div>
            </div>
         </div>

         <div className="general__container">
            <div className="metrics__content paddingSide1">
               <div className="col__25">
                  <h3>Areas</h3>
                  <div className="metrics__tableBox">
                     Area 1
                  </div>
                  <div className="metrics__tableBox">
                     Area 2
                  </div>
                  <div className="metrics__tableBox">
                     Area 3
                  </div>
               </div>
               <div className="col__25">
                  <h3>Responsible</h3>
                  <div className="metrics__tableBox">
                     <div>
                        <strong>Responsible 1</strong> / Role / Location
                        <br />
                        Staff productivity: 000.00%
                     </div>
                  </div>
                  <div className="metrics__tableBox">
                     <div>
                        <strong>Responsible 2</strong> / Role / Location
                        <br />
                        Staff productivity: 000.00%
                     </div>
                  </div>
                  <div className="metrics__tableBox">
                     <div>
                        <strong>Responsible 3</strong> / Role / Location
                        <br />
                        Staff productivity: 000.00%
                     </div>
                  </div>
               </div>
               <div className="col__25">
                  <h3>Team / Roles / Location</h3>
                  <div className="metrics__tableBox">
                     <div>
                        <strong>Name 1</strong> / Role / Location
                        <br />
                        <strong>Name 2</strong> / Role / Location
                        <br />
                        <strong>Name 3</strong> / Role / Location
                     </div>
                  </div>
                  <div className="metrics__tableBox">
                     <div>
                        <strong>Name 1</strong> / Role / Location
                        <br />
                        <strong>Name 2</strong> / Role / Location
                        <br />
                        <strong>Name 3</strong> / Role / Location
                     </div>
                  </div>
                  <div className="metrics__tableBox">
                     <div>
                        <strong>Name 1</strong> / Role / Location
                        <br />
                        <strong>Name 2</strong> / Role / Location
                        <br />
                        <strong>Name 3</strong> / Role / Location
                     </div>
                  </div>
               </div>
               <div className="col__25">
                  <h3>
                     On time <small><i class="fas fa-circle greenText"></i></small>
                     &nbsp;|
                     Delay <small><i class="fas fa-circle redText"></i></small>
                  </h3>
                  <div className="metrics__tableBox">
                     <strong className='redText'>0.0%</strong>
                  </div>
                  <div className="metrics__tableBox">
                     <strong className='greenText'>0.0%</strong>
                  </div>
                  <div className="metrics__tableBox">
                     <strong className='greenText'>0.0%</strong>
                  </div>
               </div>
            </div>
         </div>

      </div>
   )
}

export default InitiativeAResources
