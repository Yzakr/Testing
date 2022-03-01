import React, {useState} from 'react';
import {logUser} from '../api/user';
import { useHistory } from "react-router-dom";

function Login() {
   const history = useHistory();
   const [user, setUser] = useState("");

   const handleChange = e => {
      setUser(prevUser => ({ ...prevUser, [e.target.name]: e.target.value }))
   }

   const handleSubmit = async e => {
      e.preventDefault();
      console.log(user)
      //let response = {status: 'failed'};
      let response = await logUser(user);
      console.log(response);
      //response.status = "sucess";
      response !== undefined && response.status !== "failed" ? history.push("/company-setup"):console.log("failed")
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

                  <br className="hideOn__desktop" /><h1 className="big__title">Welcome!</h1><br className="hideOn__desktop" /><br className="hideOn__desktop" />

                  <form className="loginForm">
                     <h2>LOG IN</h2>
                     <br /><br />
                     <input type="email" className="large__input" placeholder="&#xf0e0; E-mail" name="email" onChange={handleChange} required />
                     <br /><br />
                     <input type="password" className="large__input" placeholder="&#xf023; Password" name="password" onChange={handleChange} required />
                     <br /><br />
                     <span className="float__right"><i className="dobcon__light--gray">Forgot password? <a href="/forgot-password"><u className="dobcon__light--gray">Click here</u></a></i></span>
                     <br /><br /><br />
                     <div className="flex__container">
                     <label className="chksqre__container"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>Remember Me</i>
                           <input type="checkbox" />
                           <span className="square__checkmark"></span>
                        </label>
                        <button onClick={handleSubmit} className="red__btn small__btn">Login</button>
                     </div>
                  </form>

                  <br /><br />
                  <div className="flex__container no-wrap">
                     <hr className="mid__line" /> Or create a new account <hr className="mid__line" />
                  </div>
                  <div className="flex__container textAlign__center">
                     <button className="red__btn medium__btn" onClick={() => history.push("/sign-up")}>Sign In</button>
                  </div>
            </div>

         </div>
      </div>
   )
}

export default Login
