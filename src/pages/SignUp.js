import React, { useState }from 'react'
import {postUser} from '../api/user';
import { useHistory } from "react-router-dom";

function SignUp() {
   const history = useHistory();
   const [user, setUser] = useState({"password":"","confirmPassword":""});
   const [eight, setEight] = useState(false);
   const [lowercase, setLowercase] = useState(false);

   const handleChange = e => {
      setUser(prevUser => ({ ...prevUser, [e.target.name]: e.target.value }))
      if (user.password.length >= 8) {
         setEight(true)
      } else {
         setEight(false)
      }
      console.log(user)
   }

   const handleSubmit = async e => {
      e.preventDefault();
      console.log(user)
      let error = "";
      user.password.length < 7 ? error="No cumple con longitud de password":error=""
      error !== "" ? alert(error) : error=""
      if (user.password === user.confirmPassword) {
         let response = null;
         response = await postUser(user);
         response.status !== null && response.status !== "failed" ? history.push("/login"):alert("User already exists")
      } else {
         alert("Las contraseñas no coinciden")
      }
  };


   return (
      <div className="loginPage">
         <div className="general__container flex__container">

            <div className="col__40 align__center">
               <div>
                  <img loading="lazy" className="logoLogin" src="/img/logo/logo-large.png" alt="Dobcon Logo" /><br /><br />
                  <p className="generalParagraph justify hideOn__mobile">
                     Analyze your DevOps financial and performance metrics, identify and optimize your team performance by measuring the efficiency of your software delivery pipeline, and monitor your DevOps operation to improve your initiatives.
                  </p>
               </div>
            </div>

            <div className="col__50">

               <h1 className="big__title hideOn__mobile">Welcome!</h1>
                  <form className="loginForm">
                     <h2>SIGN UP</h2>
                     <br /><br />
                     <input type="email" className="large__input" placeholder="&#xf0e0; E-mail" name="email" onChange={(e) => handleChange(e)} required />
                     <br /><br />
                     <input type="text" className="large__input" placeholder="&#xf2bb; Position" name="position" onChange={(e) => handleChange(e)} required />
                     <br /><br />
                     <input type="text" className="large__input" placeholder="&#xf007; Name" name="name" onChange={(e) => handleChange(e)} required />
                     <br /><br />
                     <input type="password" className="large__input" placeholder="&#xf023; Password" name="password" onChange={(e) => handleChange(e)} pattern="[A-Za-z0-9!@#$%/()=?¿¡*ç.,-ñÑ]{8,20}" required />
                     <br /><br />
                     <input type="password" className="large__input" placeholder="&#xf023; Confirm Password" name="confirmPassword" onChange={(e) => handleChange(e)} pattern="[A-Za-z0-9!@#$%/()=?¿¡*ç.,-ñÑ]{8,20}" required />
                     <br /><br />

                     <div className="flex__container">

                        <div className="col__50 textAlign__left">
                           <label className="login__check--container"> <i>One lowercase character</i>
                              <input type="checkbox" checked={lowercase}/>
                              <span className="checkmark circlemark"></span>
                           </label>
                           <label className="login__check--container"> <i>One uppercase character</i>
                              <input type="checkbox" />
                              <span className="checkmark circlemark"></span>
                           </label>
                           <label className="login__check--container"> <i>One number</i>
                              <input type="checkbox" />
                              <span className="checkmark circlemark"></span>
                           </label>
                        </div>

                        <div className="col__50 textAlign__left">
                           <label className="login__check--container"> <i>One special character</i>
                              <input type="checkbox" />
                              <span className="checkmark circlemark"></span>
                           </label>
                           <label class="login__check--container"> <i>8 characters minimum</i>
                              <input type="checkbox" checked={eight} />
                              <span class="checkmark circlemark"></span>
                           </label>
                           <button className="red__btn small__btn" onClick={handleSubmit}>Create Account</button>
                        </div>
                     </div>

                  </form>
                  <div className="flex__container textAlign__center"><i>Already have an account? <a href="/login"><u>Log in here</u></a></i></div>
            </div>

         </div>
      </div>
   )
}

export default SignUp
