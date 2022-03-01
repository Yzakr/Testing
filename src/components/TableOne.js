import React, { useState, useEffect } from 'react';
import './componentsStyles/TableOne.css';

function TableOne(props) {
   
   const [people, setPeople] = useState(props.data)

   useEffect(() => {
      let getPeople = [{"id":1, "name":"Josafat López Santamaría", "role":"FrontEnd", "area":"Development", "location":"México"}]
      setPeople(getPeople)
   }, [])
   
   return (
      <>
         <div className="scroll__table">
            <table className="tableOne">
               <thead className="tableOne__head">
                  <tr>
                     <th>Name</th>
                     <th>Role</th>
                     <th>Area</th>
                     <th>Location</th>
                  </tr>
               </thead>
               <tbody className="tableOne__body">
                  {people.length !== 0 ? people.map(item =>
                  <tr key={item.id}>
                     <td>{item.name}</td>
                     <td>{item.role}</td>
                     <td>{item.area}</td>
                     <td>{item.location}</td>
                  </tr>
               ) : <tr></tr>}
               </tbody>
            </table>
            <div className="tableOne__footer">
               <button
                  className='btn null__btn'
               >
                  +
               </button>
            </div>
         </div>
      </>
   )
}

export default TableOne
