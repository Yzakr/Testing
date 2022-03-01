import React from 'react';

function ChooseDashboard() {
   return (
      <div className="chooseDashboard">
         <div className="chooseDash__container col__80">
            <br />
            <h1>Where do you want to go today?</h1>
            <p>You can switch your view at any time.</p><br /><br />
         </div>
         
         <div className="general__container flex__container space__around mtop__-4rem wrapTablet">

            {/* Dobcon Business */}
            <div className="col__35 col__50--hMobile col__50--tablet">
               <div className="dashCards">
                  <div className="dashCards__head">
                     <img loading="lazy" src="./img/icons/cards/business-icon.png" alt="Business Dashboard Dobcon" />
                  </div>
                  <hr className="red__line" />
                  <div className="dashCards__body">
                     <br />
                     <h2>Dobcon Business</h2>
                     <br />
                     <p>Analyze your DevOps metrics and track your team performance.</p>
                     <br /><br />
                     <a href="/dobcon-business" className="red__btn medium__btn">Select</a>
                  </div>
               </div>
            </div>

            {/* Dobcon Toolchain */}
            <div className="col__35 col__50--hMobile col__50--tablet">
               <div className="dashCards">
                  <div className="dashCards__head">
                     <img loading="lazy" src="./img/icons/cards/technical-icon.png" alt="Technical Dashboard Dobcon" />
                  </div>
                  <hr className="red__line" />
                  <div className="dashCards__body">
                     <br />
                     <h2>Dobcon Toolchain</h2>
                     <br />
                     <p>Track the efficiency of your software delivery pipeline in real time.</p>
                     <br /><br />
                     <a href="/dobcon-toolchain" className="red__btn medium__btn">Select</a>
                  </div>
               </div> 
            </div>

            {/* Dobcon Adoption */}
            <div className="col__35 col__50--hMobile col__50--tablet">
               <div className="dashCards">
                  <div className="dashCards__head">
                     <img loading="lazy" src="./img/icons/cards/adoption-icon.png" alt="Technical Dashboard Dobcon" />
                  </div>
                  <hr className="red__line" />
                  <div className="dashCards__body">
                     <br />
                     <h2>Dobcon Adoption</h2>
                     <br />
                     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, dolorem?</p>
                     <br /><br />
                     <a href="/" className="red__btn medium__btn">Select</a>
                  </div>
               </div> 
            </div>

         </div>
      </div>
   )
}

export default ChooseDashboard
