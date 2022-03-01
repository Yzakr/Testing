import React from 'react';
import './componentsStyles/TableTwo.css';

function TableTwo() {
   
   return (
      <>
         <div className="tableTwo">
            <div className="col__50">
               <ul className="tableTwo__list">
                  <li>
                     Discount Rate &nbsp;<i className="fas fa-info-circle info__btn">
                        <span className="info__btn--hover">The rate of return used to discount future cash flows back to their present value.</span>
                     </i>
                     <span className="currency__input"><input className="anti__input" type="number" placeholder="Type Here" required min="0.00" max="100.00" step="0.01"/> %</span>
                  </li>
                  <li>
                     Capital Cost &nbsp;<i className="fas fa-info-circle info__btn">
                        <span className="info__btn--hover">The expenses incurred on the acquisition, construction, or enhancement of significant fixed assets.</span>
                     </i>
                     <span className="currency__input"><input className="anti__input" type="number" placeholder="Type Here" required min="0.00" max="100.00" step="0.01"/> %</span>
                  </li>
                  <li>
                     Tax Rate &nbsp;<i className="fas fa-info-circle info__btn">
                        <span className="info__btn--hover">The percentage at which the company is taxed.</span>
                     </i>
                     <span className="currency__input"><input className="anti__input" type="number" placeholder="Type Here" required min="0.00" max="100.00" step="0.01"/> %</span>
                  </li>
                  <li>
                     Break-Even &nbsp;<i className="fas fa-info-circle info__btn">
                        <span className="info__btn--hover">The point at which total cost and total revenue are equal.</span>
                     </i>
                     <span className="currency__input">$ <input className="anti__input" type="number" placeholder="Type Here" required min="0.00" max="100.00" step="0.01"/></span>
                  </li>
               </ul>
            </div>
            <div className="col__50">
               <ul className="tableTwo__list">
                  <h3>Costs:</h3>
                  <li>
                     <i>Cloud</i> &nbsp;<i className="fas fa-info-circle info__btn">
                        <span className="info__btn--hover">All costs related to the Cloud and its components.</span>
                     </i>
                     <span className="currency__input">$ <input className="anti__input" type="number" placeholder="Type Here" required min="0.00" max="100000000.00" step="0.01"/></span>
                  </li>
                  <li>
                     <i>Tools</i> &nbsp;<i className="fas fa-info-circle info__btn">
                        <span className="info__btn--hover">All costs incurred in DevOps tools. This may include support from third parties and a financial cost of adoption.</span>
                     </i>
                     <span className="currency__input">$ <input className="anti__input" type="number" placeholder="Type Here" required min="0.00" max="100000000.00" step="0.01"/></span>
                  </li>
                  <li>
                     <i>HR</i> &nbsp;<i className="fas fa-info-circle info__btn">
                        <span className="info__btn--hover">All DevOps-related Human Resources costs. This may include employees (payroll and benefits) and contractors.</span>
                     </i>
                     <span className="currency__input">$ <input className="anti__input" type="number" placeholder="Type Here" required min="0.00" max="100000000.00" step="0.01"/></span>
                  </li>
                  <li>
                     <i>Cultural Adoption</i> &nbsp;<i className="fas fa-info-circle info__btn">
                        <span className="info__btn--hover">All costs related to the adoption of a DevOps culture. This may include training, events, rewards, and other elements.</span>
                     </i>
                     <span className="currency__input">$ <input className="anti__input" type="number" placeholder="Type Here" required min="0.00" max="100000000.00" step="0.01"/></span>
                  </li>

               </ul>
            </div>
         </div>
      </>
   )
}

export default TableTwo
