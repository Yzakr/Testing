import React from 'react'

function ForgotPassword() {
   return (
      <div className="loginPage">
         <div className="general__container flex__container textAlign__center">
            <div className="col__40">
            <img loading="lazy" className="logoLogin" src="/img/logo/logo-large.png" alt="Dobcon Logo" /><br /><br />
               <form className="loginForm lf__onTablet">
                  <h1>FORGOT PASSWORD?</h1>
                  <p>Enter your e-mail address below, and we’ll send you an e-mail to reset your password.</p>
                  <br /><br />
                  <input type="email" className="large__input" placeholder="&#xf0e0; E-mail" required />
                  <br /><br />
                  <div className="textAlign__center">
                     <button className="red__btn large__btn btn__100">Reset my password</button><br /><br />
                     <button className="red__btn large__btn btn__100">Cancel</button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   )
}

export default ForgotPassword
