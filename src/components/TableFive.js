import React, { useState, useEffect } from 'react';
import './componentsStyles/TableOne.css';

function TableFive() {

   const [leader, setLeader] = useState([])

   useEffect(() => {
      let getLeader = [{"leaderName":"Rolando", "leaderRole":"Scrum Master", "leaderArea":"Development", "leaderLocation":"Sonora"}]
      setLeader(getLeader)
   }, [])

   return (
      <>
         <div className="scroll__table">
            <table className="tableOne">
               <thead className="tableOne__head">
                  <tr>
                     <th className="small__td">{/* Empty space */}</th>
                     <th>Name</th>
                     <th>Role</th>
                     <th>Area</th>
                     <th>Location</th>
                  </tr>
               </thead>
               <tbody className="tableOne__body">
                  {leader.length !== 0 ? leader.map(item =>
                  <tr>
                     <td className="small__td"><button className="add__btn add__btn--active">-</button></td>
                     <td>{item.leaderName}</td>
                     <td>{item.leaderRole}</td>
                     <td>{item.leaderArea}</td>
                     <td>{item.leaderLocation}</td>
                  </tr>
                  ) : <tr></tr>}
               </tbody>
            </table>
         </div>
      </>
   )
}

export default TableFive
