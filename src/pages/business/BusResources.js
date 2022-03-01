import React from 'react'
import { Link } from 'react-router-dom'
import CurrentDate from '../../components/CurrentDate'

const BusResources = () => {
   return (
      <div className="general__background">
         <div className="chooseDash__container">
            <h1 className="marginTop__onMobile--4rem">Dobcon Business per Resources</h1>
            <br /><div className="float__right"><CurrentDate /></div><br /><br />
            <hr className="gray__line" />
            <br />

            <i className="fas fa-filter"></i> &nbsp;&nbsp;
            <div className="business__dropdown">
               <div className="dropdownBtn">Resources<i class="fas fa-chevron-down"></i></div>
               <div className="dropdown__content">
                  <Link to="/dobcon-business">Business Metrics</Link>
                  <Link to="/initiative-start-date">Initiative Start Date</Link>
                  <Link to="/initiative-status">Initiative Status</Link>
                  <Link to="/initiative-location">Location</Link>
                  <Link to="/initiative-roi">ROI</Link>
                  <Link to="/initiative-cost">Total Initiative Cost</Link>
               </div>
            </div>&nbsp;&nbsp;

            <a href="#" className="mRight5"><i class="fas fa-plus"></i></a>&nbsp;&nbsp;

            <div className="filter__container">
               
               <span className='filter__btn small__btn'>Date | <button className='red__btn'><i className="fas fa-times"></i></button></span>

               <span className='filter__btn small__btn'>Area | <button className='red__btn'><i className="fas fa-times"></i></button></span>

               <span className='filter__btn small__btn'>Responsible | <button className='red__btn'><i className="fas fa-times"></i></button></span>

               <span className='filter__btn small__btn'>Delayed | <button className='red__btn'><i className="fas fa-times"></i></button></span>

            </div>

         </div>

         <div className="initiatives__container">
            <Link to="/initiative-a" className="initiative__btn">Initiative A</Link>
            <Link to="#" className="initiative__btn">Initiative B</Link>
            <Link to="#" className="initiative__btn">Initiative C</Link>
            <Link to="#" className="initiative__btn">Initiative D</Link>

            <Link to="#" className="initiative__btn">Initiative E</Link>
            <Link to="#" className="initiative__btn">Initiative F</Link>
            <Link to="#" className="initiative__btn">Initiative G</Link>

         </div>

         <div className="general__container">
            <div className="metrics__content paddingSide1">
               <div className="col__15">
                  <h3>Initiative</h3>
                  <div>
                     <br /><br />
                     Initiative 1
                  </div>
               </div>
               <div className="col__15">
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
                     <strong className='redText'>000.0%</strong>
                  </div>
                  <div className="metrics__tableBox">
                     <strong className='greenText'>000.0%</strong>
                  </div>
                  <div className="metrics__tableBox">
                     <strong className='greenText'>000.0%</strong>
                  </div>
               </div>
            </div>
         </div>

      </div>
   )
}

export default BusResources
