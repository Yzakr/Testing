import React from 'react'

const CurrentDate = () => {

   const current = new Date();
   const currentDate = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
   
   return (
      <>
         {currentDate}
      </>
   )
}

export default CurrentDate
