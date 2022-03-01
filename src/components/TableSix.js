import React, { useState, useEffect } from 'react';
import './componentsStyles/TableOne.css';

function TableSix() {

   const [peopleInvolved, setPeopleInvolved] = useState([])

   useEffect(() => {
      let getPeopleInvolved = [{"involvedName":"Rolando", "involvedRole":"Scrum Master", "involvedLocation":"Sonora"}]
      setPeopleInvolved(getPeopleInvolved)
   }, [])

   return (
      <>
      <div className="scroll__table">
         <table className="tableOne">
            <thead className="tableOne__head">
               <tr>
                  <th className="small__td">Involved</th>
                  <th className="small__td">Responsible for this Area</th>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Location</th>
               </tr>
            </thead>
            <tbody className="tableOne__body">
               {peopleInvolved.length !== 0 ? peopleInvolved.map(item =>
               <tr>
                  <td className="small__td"><button className="add__btn add__btn--active">-</button></td>
                  <td className="small__td"><button className="add__btn add__btn--active">-</button></td>
                  <td>{item.involvedName}</td>
                  <td>{item.involvedRole}</td>
                  <td>{item.involvedLocation}</td>
               </tr>
               ) : <tr></tr>}
            </tbody>
         </table>
      </div>
   </>
   )
}

export default TableSix
