import React, { useState, useEffect } from 'react';
import './componentsStyles/TableFour.css';
import SearchBox from './SearchBox';

function TableFour() {

   const [service, setService] = useState([])

   useEffect(() => {
      let getService = [{"nameService":"Service Name"}]
      setService(getService)
   }, [])

   return (
      <div className="tableFour">

         <div className="tableFour__head">
            <h3>Service</h3>
            <SearchBox />
         </div>

         <div className="scroll__tbody">
            <table>
               <tbody className="tableOne__body">
                  {service.length !== 0 ? service.map(item =>
                  <tr>
                     <td className="small__td"><button className="add__btn add__btn--active">-</button></td>
                     <td>{item.nameService}</td>
                  </tr>
                  ) : <tr></tr>}
               </tbody>
            </table>
         </div>
      </div>
   )
}

export default TableFour
