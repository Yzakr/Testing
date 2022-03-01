import React from 'react';
import { Link } from 'react-router-dom';
import './componentsStyles/Sidebar.css';

function Sidebar() {
   return (
      <div className="sidebar">
         <ul className="sidebar__menu">
            <li>
               <Link to="/dobcon-business">
                  <img loading="lazy" className="sidebar__icons" src="./img/icons/sidebar/business-icon.png" alt="Dobcon Business" title="Dobcon Business"/>
                  <h4>Dobcon Business</h4>
               </Link>
            </li>
            <li>
               <Link to="/dobcon-toolchain">
                  <img loading="lazy" className="sidebar__icons" src="./img/icons/sidebar/technical-icon.png" alt="Dobcon Toolchain" title="Dobcon Toolchain"/>
                  <h4>Dobcon Toolchain</h4>
               </Link>
            </li>
            <li>
               <Link to="/">
                  <img loading="lazy" className="sidebar__icons" src="./img/icons/sidebar/adoption-icon.png" alt="Dobcon Adoption" title="Dobcon Adoption"/>
                  <h4>Dobcon Adoption</h4>
               </Link>
            </li>
            <li>
               <Link to="/">
                  <img loading="lazy" className="sidebar__icons" src="./img/icons/sidebar/settings-icon.png" alt="Settings" title="Settings"/>
                  <h4>Settings</h4>
               </Link>
            </li>
            <li>
               <Link to="/">
                  <img loading="lazy" className="sidebar__icons" src="./img/icons/sidebar/password-icon.png" alt="Change Password" title="Change Password"/>
                  <h4>Change Password</h4>
               </Link>
            </li>
            <li>
               <Link to="/">
                  <img loading="lazy" className="sidebar__icons" src="./img/icons/sidebar/exit-icon.png" alt="Log Out" title="Log Out"/>
                  <h4>Log Out</h4>
               </Link>
            </li>
         </ul>
      </div>
   )
}

export default Sidebar
