import React from 'react'

function NotFound() {
   return (
      <div className="notFound">
         <div className="flex__container general__container align__center vh100 margin0__mobile padding0__tablet">
            <div className="col__40">
               <h1 className="big__title">404</h1>
               <h3>Page Not Found</h3>
               <p>
                  We´re sorry, the page you requested could not be found 
                  <br />
                  Please go back to the homepage
               </p>
               <br /><br />
               <a href="/" className="red__btn small__btn">Go Home</a>
            </div>
            <div className="col__60 hideOn__mobile hideOn__tablet">

            </div>
         </div>
      </div>
   )
}

export default NotFound
