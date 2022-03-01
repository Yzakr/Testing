import React, { useState } from "react";
import Divisions from '../components/Divisions';
import TableFour from '../components/TableFour';
import TableFive from '../components/TableFive';
import TableSix from '../components/TableSix';
import TableSeven from '../components/TableSeven';
import SearchBox from '../components/SearchBox';
import '../App.css';
import { useHistory } from "react-router-dom";
import { postCompany } from '../api/company';

function InitiativeSetup() {
   const history = useHistory();

   const [initiative, setInitiative] = useState('');
   
   const handleChange = e => {
      setInitiative(prevInitiative => ({ ...prevInitiative, [e.target.name]: e.target.value }))
      console.log(initiative)
   }

   const handleSubmit = async (e) => {
      console.log(initiative)
      let resp1 = await postCompany(initiative);
      resp1 !== undefined && resp1.status === 200 ? history.push("/toolchain-setup"):alert("Name not available")
      history.push("/toolchain-setup")
    };


/*    const handleSubmit = async (data) => {
      history.push("/toolchain-setup")
   } */

   return (
      <div className="general__background">
         <div className="general__container">

            {/* INITIATIVE SETUP SECTION */}
            <Divisions 
               divTitle="Initiative Setup/Edit"
               divNumber="1"
            /> 
            <section className="flex__container">
               <div className="col__20 hideOn__tablet">
                  {/* Any Info */}
               </div>
               <form className="col__30">
                  <h3>Initiative Name</h3>
                  <small>Type the initiative name</small><br /><br />
                  <input type="text" placeholder="Type Here" className="dark__input medium__input" name="initiativeName" onChange={handleChange}/>
                  <h3>Description</h3>
                  <textarea name="" id="" cols="30" rows="7" placeholder="Type Here" className="dark__input medium__input" name="initiativeDescription" onChange={handleChange}></textarea>
               </form>
               <form className="col__40 col__100--hMobile col__70--tablet">

                  {/* INPUT ONE */}
                  <div className="image__input">
                     <img loading="lazy" src="./img/icons/redicons/date-icon.png" alt="date-icon" className="side__icon" />
                     <div>
                        <label>Start Date</label>
                        <input type="date" className="dark__input large__input" placeholder="MM / DD / YYYY" name="initiativeStartDate" onChange={handleChange} />
                     </div>
                  </div>

                  {/* INPUT TWO */}
                  <div className="image__input">
                     <img loading="lazy" src="./img/icons/redicons/status-icon.png" alt="status-icon" className="side__icon" />
                     <div>
                        <label>Status</label>
                        <select className="dark__input large__input" name="initiativeStatus" onChange={handleChange}>
                           <option></option>
                           <option>In Development</option>
                           <option>Paused</option>
                           <option>Released</option>
                           <option>Retired</option>
                           <option>Under Maintenance</option>
                        </select>
                     </div>
                  </div>
                                    
                  {/* INPUT THREE */}
                  <div className="image__input">
                     <img loading="lazy" src="./img/icons/redicons/target-icon.png" alt="target-icon" className="side__icon" />
                     <div>
                        <label>Target/Planned Release Date</label>
                        <input type="date" className="dark__input large__input" placeholder="MM / DD / YYYY" name="initiativeTarget" onChange={handleChange}/>
                     </div>
                  </div>
                                    
                  {/* INPUT FOUR */}
                  <div className="image__input">
                     <img loading="lazy" src="./img/icons/redicons/cost-icon.png" alt="totalCost-icon" className="side__icon" />
                     <div>
                        <label>Forecasted Total Cost</label><br />
                        <span className="currency__input dark__input"><input className="anti__input anti__large" type="number" placeholder="Type Here" required min="0.00" max="100.00" step="0.01" name="initiativeCost" onChange={handleChange}/> %</span>
                     </div>
                  </div>
               </form>
            </section>

            {/* INITIATIVE SETUP SECTION */}
            <Divisions 
               divNumber="2"
            /> <br />
            <section className="flex__container">
               <div className="col__20">
                  <h2>Associated Services / Apps</h2><br />

                  <p>Select the Services or Apps to which this initiative is associated.</p>
               </div>
               <div className="col__75">
                  <TableFour />
               </div>
            </section>

            {/* INITIATIVE SETUP SECTION */}
            <Divisions 
               divNumber="3"
            />
            <section className="flex__container">
               <h1>Associated Resources</h1> <SearchBox />
            </section>
            <section className="flex__container">
               <div className="col__20">
                  <h2>Initiative Leader</h2><br />

                  <p>Select the person who will lead this initiative.</p>
               </div>
               <div className="col__75">
                  <TableFive />
               </div>
            </section>

      
            {/* INITIATIVE SETUP SECTION */}
            <br /><br /><hr className="gray__line" /><br />
            <section className="flex__container">
               <div className="col__35">
                  <h2>Area</h2><br />

                  <p>Select the areas that will be involved in this initiative. You may edit the people involved in each area in the table to the right.</p>
                  <br />
                  <TableSeven />
               </div>
               <div className="col__60">
                  <section className="flex__container">
                        <h2>People Involved</h2>
                        <SearchBox />
                  </section>
                  <br />
                  <p>Select the people who will be involved in this initiative for each of the areas to the left. Mark the person who will be responsible for each area involved in the initiative.</p>
                  <TableSix />
               </div>
            </section>

            <section className="flex__container textAlign__center">
               <a href="/toolchain-setup" className="red__btn medium__btn" onClick={() => handleSubmit()}>Next</a>
            </section>
         </div>

      </div>
   )
}

export default InitiativeSetup
