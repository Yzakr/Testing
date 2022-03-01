import React from 'react'
import { Link } from 'react-router-dom'
import CurrentDate from '../../components/CurrentDate'

function BusStatus() {
   return (
      <div className="general__background">
         <div className="chooseDash__container">
            <h1 className="marginTop__onMobile--4rem">Dobcon Business per Initiative Status</h1>
            <br /><div className="float__right"><CurrentDate /></div><br /><br />
            <hr className="gray__line" />
            <br />

            <i className="fas fa-filter"></i> &nbsp;&nbsp;
            <div className="business__dropdown">
               <div className="dropdownBtn">Initiative Status<i class="fas fa-chevron-down"></i></div>
               <div className="dropdown__content">
                  <Link to="/dobcon-business">Business Metrics</Link>
                  <Link to="/initiative-start-date">Initiative Start Date</Link>
                  <Link to="/initiative-location">Location</Link>
                  <Link to="/initiative-resources">Resources</Link>
                  <Link to="/initiative-roi">ROI</Link>
                  <Link to="/initiative-cost">Total Initiative Cost</Link>
               </div>
            </div>&nbsp;&nbsp;

            <a href="#" className="mRight5"><i class="fas fa-plus"></i></a>&nbsp;&nbsp;

            <div className="filter__container">

               <span className='filter__btn small__btn'>In development | <button className='red__btn'><i className="fas fa-times"></i></button></span>

               <span className='filter__btn small__btn'>Paused | <button className='red__btn'><i className="fas fa-times"></i></button></span>

               <span className='filter__btn small__btn'>Released | <button className='red__btn'><i className="fas fa-times"></i></button></span>

               <span className='filter__btn small__btn'>Under Maintenance | <button className='red__btn'><i className="fas fa-times"></i></button></span>

               <span className='filter__btn small__btn'>Retired | <button className='red__btn'><i className="fas fa-times"></i></button></span>
               
            </div>

         </div>

         <div className="initiatives__container">
            <Link to="/initiative-a" className="initiative__btn">Initiative A</Link>
            <Link to="#" className="initiative__btn">Initiative B</Link>
         </div>

         <div className="general__container">
            <div className="metrics__content">
               <div className="metrics__table gh__borderRight">
                  <h3>Financial Metrics</h3>
                  <ul className="metrics__list">
                     <li>DevOps ROI <span className="float__right">000.00%</span></li>
                     <li>DevOps TCO<span className="float__right">000.00%</span></li>
                     <li>Total Initiative Cost<span className="float__right">$00000000.00</span></li>
                     <li>Total Release Cost<span className="float__right">$00000000.00</span></li>
                     <li>Savings and Expenses (%) <br /> from Automation<span className="float__right">000.00%</span></li>
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

export default BusStatus
