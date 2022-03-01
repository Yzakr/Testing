import React, { useState, useEffect } from 'react';
import './componentsStyles/TableOne.css';

function TableThree() {
   
   const [servApps, setServApps] = useState([])

   useEffect(() => {
      let getServApps = [{"nameServApp":"Service/Application Name"}]
      setServApps(getServApps)
   }, [])

   return (
      <>
         <div className="scroll__table">
            <table className="tableOne">
               <thead className="tableOne__head">
                  <tr>
                     <th>Name</th>
                  </tr>
               </thead>
               <tbody className="tableOne__body">
                  {servApps.length !== 0 ? servApps.map(item =>
                  <tr>
                     <td>{item.nameServApp}</td>
                  </tr>
                  ) : <tr></tr>}
               </tbody>
            </table>
         </div>
      </>
   )
}

export default TableThree
