import React, { useState, useEffect } from 'react';
import './componentsStyles/TableOne.css';

function TableEight() {

   const [responsible, setResponsible] = useState([])

   useEffect(() => {
      let getResponsible = [{"responsibleName":"Rolando", "responsibleRole":"Scrum Master", "responsibleArea":"Development", "responsibleLocation":"Sonora"}]
      setResponsible(getResponsible)
   }, [])

   return (
      <>
         <div className="scroll__table">
            <table className="tableOne">
               <thead className="tableOne__head">
                  <tr>
                     <th>Stage</th>
                     <th>Name</th>
                     <th>Role</th>
                     <th>Area</th>
                     <th>Location</th>
                  </tr>
               </thead>
               <tbody className="tableOne__body">
                  {responsible.length !== 0 ? responsible.map(item =>
                  <tr>
                     <td>
                        <select className="dark__input medium__input">
                           <option></option>
                           <option>In Development</option>
                           <option>Paused</option>
                           <option>Released</option>
                           <option>Retired</option>
                           <option>Under Maintenance</option>
                        </select>
                     </td>
                     <td>{item.responsibleName}</td>
                     <td>{item.responsibleRole}</td>
                     <td>{item.responsibleArea}</td>
                     <td>{item.responsibleLocation}</td>
                  </tr>
                  ) : <tr></tr>}
               </tbody>
            </table>
         </div>
      </>
   )
}

export default TableEight
