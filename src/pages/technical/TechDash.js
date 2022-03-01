import React, { useEffect, useRef, useState } from 'react';
import TechnicalSlaCard from '../../components/TechnicalSlaCard';
import TimeframeCard from '../../components/TimeframeCard';

function TechDash() {
   const [toggleState, setToggleState] = useState(1);
   const [data, setData] = useState({"code":[0,0,0],"build":[0,0,0],"test":[0,0,0],"integration":[0,0,0],"deploy":[0,0,0],"operate":[0,0,0],"monitor":[0,0,0],"RALT":0,"DF":0,"MTTF":0,"MTTR":0, "CFR":0, "NSRI":[0,0],"NEDD":[0,0]})
   const [testingData, setTestingData] = useState({"Functional":[0,0], "NonFunctional":[0,0]})
   const ws = useRef()

   const toggleTab = (index) => {
      setToggleState(index);
   };

   useEffect(() => {
      ws.current = new WebSocket("wss://socket.dobcon.com/ws");
      ws.current.onopen = () => console.log("ws opened");
      ws.current.onclose = () => console.log("ws closed");

      const wsCurrent = ws.current;

      return () => {
         wsCurrent.close();
      };
   }, []);
   useEffect(() => {
      if (!ws.current) return;

      ws.current.onmessage = e => {
         let message
         console.log(e.data)
         if (e.data.split(";")[0] === "data") {
            message = JSON.parse(e.data.split(";")[1])
            console.log(message)
            setData(message)
         } else {
            message = JSON.parse(e.data.split(";")[1])
            setTestingData(message)
         }
      };
   }, [data]);


   return (
      <div className="general__background">
         <div className="chooseDash__container">
            <h1 className="marginTop__onMobile--4rem">Dobcon Toolchain</h1>
         </div>
         <div className="tabs__container">
            <div className="tabs__header">
               <button
                  className={toggleState === 1 ? "tabs active__tabs" : "tabs"}
                  onClick={() => toggleTab(1)}
               >
                  Software Delivery Pipeline Stages
               </button>
               <button
                  className={toggleState === 2 ? "tabs active__tabs" : "tabs"}
                  onClick={() => toggleTab(2)}
               >
                  Tests Results
               </button>
            </div>

            <div className="content__tabs">
               <div
                  className={toggleState === 1 ? "content  active__content" : "content"}
               >
                  <div className="flex__container">
                     <div>
                        <i className="fas fa-circle circleGreen"></i> Successful &nbsp;&nbsp;
                        <i className="fas fa-circle circleRed"></i> Failed
                     </div>
                     <div>
                        {/* Initiative */}
                        <label className="chksqre__container">
                           <input type="checkbox" />
                           <span className="square__checkmark"></span>
                        </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <i className="far fa-folder"></i>&nbsp; Initiative &nbsp;
                        <select className="dark__input">
                           <option>All</option>
                           <option>Initiative Name</option>
                           <option>Initiative Name</option>
                           <option>Initiative Name</option>
                        </select>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        {/* Timeframe */}
                        <i className="far fa-clock"></i>&nbsp; Timeframe &nbsp;
                        <select className="dark__input">
                           <option>Today</option>
                           <option>Last Week</option>
                           <option>Last Two Weeks</option>
                           <option>Last Month</option>
                        </select>
                        <br /><br />
                     </div>
                  </div>

                  {/* SLAs CARDS */}
                  <div className="toolChain__container">

                     <TechnicalSlaCard
                        techSlaTitle="CODE"
                        totalSla={data?.code[0]}
                        successfulSla={data?.code[1]}
                        failedSla={data?.code[2]}
                     />

                     <TechnicalSlaCard
                        techSlaTitle="BUILD"
                        totalSla={data?.build[0]}
                        successfulSla={data?.build[1]}
                        failedSla={data?.build[2]}
                     />

                     <TechnicalSlaCard
                        techSlaTitle="TEST"
                        totalSla={data?.test[0]}
                        successfulSla={data?.test[1]}
                        failedSla={data?.test[2]}
                     />

                     <TechnicalSlaCard
                        techSlaTitle="INTEGRATION"
                        totalSla={data?.integration[0]}
                        successfulSla={data?.integration[1]}
                        failedSla={data?.integration[2]}
                     />

                     <TechnicalSlaCard
                        techSlaTitle="DEPLOY"
                        totalSla={data?.deploy[0]}
                        successfulSla={data?.deploy[1]}
                        failedSla={data?.deploy[2]}
                     />

                     <TechnicalSlaCard
                        techSlaTitle="OPERATE"
                        totalSla={data?.operate[0]}
                        successfulSla={data?.operate[1]}
                        failedSla={data?.operate[2]}
                     />

                     <TechnicalSlaCard
                        techSlaTitle="MONITOR"
                        totalSla={data?.monitor[0]}
                        successfulSla={data?.monitor[1]}
                        failedSla={data?.monitor[2]}
                     />
                  </div>
                  <br />

                  <div className="flex__container flex__wrap widht100__onHMobile space__unsetHMobile">

                     <TimeframeCard
                        timeFrameTitle="Release Average Lead Time"
                        timeFrameSub1={`${Math.floor(data?.RALT)} hh ${Math.floor((data?.RALT-Math.floor(data?.RALT))*60)} mm`}
                        timeFrameButton="Show Graphic"
                     />

                     <TimeframeCard
                        timeFrameTitle="Deployment Frequency"
                        timeFrameSub1={data?.DF}
                        timeFrameButton="Show Graphic"
                     />

                     <TimeframeCard
                        timeFrameTitle="Mean Time To Failure (MTTF)"
                        timeFrameSub1={`${Math.floor(data?.MTTF)} hh ${Math.floor((data?.MTTF-Math.floor(data?.MTTF))*60)} mm`}
                        timeFrameButton="Show Graphic"
                     />

                     <TimeframeCard
                        timeFrameTitle="Mean Time To Recovery (MTTR)"
                        timeFrameSub1={`${Math.floor(data?.MTTR)} hh ${Math.floor((data?.MTTR-Math.floor(data?.MTTR))*60)} mm`}
                        timeFrameButton="Show Graphic"
                     />

                     <div className="timeFrame__card">
                        <div className="timeFrame__head">Change Failure Rate</div>
                        <div className="timeFrame__body">

                           {/* CIRCLE PROGRESS */}
                           <div className="circleBar__container">
                              <svg className="circleBar" height="60px" width="60px">
                                 <circle className="circleBase" cx="30" cy="30" r="28"></circle>
                                 <circle className="circleProgress" cx="30" cy="30" r="28"></circle>
                              </svg>
                              <p className="circlePercent">{data?.CFR}</p>
                           </div>

                        </div>
                        <div className="timeFrame__footer">
                           <i className="far fa-clock"></i>&nbsp;&nbsp;
                           <select className="dark__input inputForCard">
                              <option>Timeframe</option>
                              <option>Today</option>
                              <option>Last Week</option>
                              <option>Last Two Weeks</option>
                              <option>Last Month</option>
                           </select>&nbsp;&nbsp;
                           <button className="red__btn small__btn">Show Log</button>
                        </div>
                     </div>

                     <TimeframeCard
                        timeFrameTitle="Number of Software-Related Incidents"
                        timeFrameSub1={`Detected: ${data?.NSRI[0]}`}
                        timeFrameSub2={`Solved: ${data?.NSRI[1]}`}
                        timeFrameButton="Show Log"
                     />

                     <TimeframeCard
                        timeFrameTitle="Number of Early Defects Detected"
                        timeFrameSub1={`Detected: ${data?.NEDD[0]}`}
                        timeFrameSub2={`Solved: ${data?.NEDD[1]}`}
                        timeFrameButton="Show Log"
                     />

                     <div className="timeFrame__card">
                        <div className="timeFrame__head">Search Release History</div>
                        <div className="timeFrame__body">

                           <strong>Date:</strong>&nbsp;&nbsp;
                           <small>From:</small>&nbsp;<input class="dark__input mini__input" type="date" />&nbsp;<small>To:</small>&nbsp;<input class="dark__input mini__input" type="date" />
                           <strong>ID:</strong>&nbsp;&nbsp;
                           <select className="dark__input small__input">
                              <option></option>
                           </select>

                        </div>
                        <div className="timeFrame__footer">
                           <i className="far fa-clock"></i>&nbsp;&nbsp;
                           <select className="dark__input inputForCard">
                              <option>Timeframe</option>
                              <option>Today</option>
                              <option>Last Week</option>
                              <option>Last Two Weeks</option>
                              <option>Last Month</option>
                           </select>&nbsp;&nbsp;
                           <button className="red__btn small__btn">Show Log</button>
                        </div>
                     </div>
                  </div>
               </div>


               <div
                  className={toggleState === 2 ? "content  active__content" : "content"}
               >
                  <div className="flex__container">
                     <div>
                        <i className="fas fa-circle circleGreen"></i> Successful &nbsp;&nbsp;
                        <i className="fas fa-circle circleRed"></i> Failed
                     </div>

                     <div>
                        {/* Initiative */}
                        <label className="chksqre__container">
                           <input type="checkbox" />
                           <span className="square__checkmark"></span>
                        </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <i className="far fa-folder"></i>&nbsp; Initiative &nbsp;
                        <select className="dark__input">
                           <option>All</option>
                           <option>Initiative Name</option>
                           <option>Initiative Name</option>
                           <option>Initiative Name</option>
                        </select>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        {/* Timeframe */}
                        <i className="far fa-clock"></i>&nbsp; Timeframe &nbsp;
                        <select className="dark__input">
                           <option>Today</option>
                           <option>Last Week</option>
                           <option>Last Two Weeks</option>
                           <option>Last Month</option>
                        </select>
                        <br /><br />
                     </div>
                  </div>

                  <div className="graphicsContainer">
                     <div className="graphic">
                        <div className="graphicHead gh__borderRight">
                           <div>
                              <h1 className="graphicTitle">
                                 FUNCTIONAL TESTS
                              </h1>
                              <p className="graphicSub">
                                 Successful: <span className="greenText">{testingData?.Functional[0]}</span>
                                 <br />
                                 Failed: <span className="redText">{testingData?.Functional[1]}</span>
                              </p>
                           </div>
                           <div>
                              <img loading="lazy" src="./img/temps/graphicFail.png" alt="Dobcon Small Logo" />
                           </div>
                        </div>
                        <hr className="red__line" />
                        <div className="graphicFooter borderRadius__left gh__borderRight">
                           <h4>CLICK ON EACH TEST TYPE FOR DETAILS</h4>
                           <div className="graphicList">
                              <ul>
                                 <li class="graphicList__fail">Unit Testing</li>
                                 <li>Sanity Testing</li>
                                 <li>Smoke Testing</li>
                                 <li>API Testing</li>
                              </ul>
                              <ul>
                                 <li>Integration Testing</li>
                                 <li>System Testing</li>
                                 <li>Regression Testing</li>
                                 <li>User Acceptance</li>
                              </ul>
                              <ul>
                                 <li>Boundary Value Testing</li>
                                 <li>Interface Testing</li>
                                 <li>Globalization Testing</li>
                                 <li>Interoperability Testing</li>
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div className="graphic">
                        <div className="graphicHead">
                           <div>
                              <h1 className="graphicTitle">
                                 NON FUNCTIONAL TESTS
                              </h1>
                              <p className="graphicSub">
                                 Successful: <span className="greenText">{testingData?.NonFunctional[0]}</span>
                                 <br />
                                 Failed: <span className="redText">{testingData?.NonFunctional[1]}</span>
                              </p>
                           </div>
                           <div>
                              <img loading="lazy" src="./img/temps/graphicSuccess.png" alt="Dobcon Small Logo" />
                           </div>
                        </div>
                        <hr className="red__line" />
                        <div className="graphicFooter borderRadius__right">
                           <h4>CLICK ON EACH TEST TYPE FOR DETAILS</h4>
                           <div className="graphicList">
                              <ul>
                                 <li>Availability Testing</li>
                                 <li>Volume Testing</li>
                                 <li>Usability Testing</li>
                                 <li>Security Testing</li>
                                 <li>Load Testing</li>
                                 <li>Reliability Testing</li>
                              </ul>
                              <ul>
                                 <li>Performance Testing</li>
                                 <li>Compatibility Testing</li>
                                 <li className="graphicList__success">Localization Testing</li>
                                 <li>Scalability Testing</li>
                                 <li>Endurance Testing</li>
                                 <li>Installation Testing</li>
                              </ul>
                              <ul>
                                 <li>Compliance Testing</li>
                                 <li>Stress Testing</li>
                                 <li>Maintainability Testing</li>
                                 <li>Portability Testing</li>
                                 <li>Disaster Recovery</li>
                              </ul>
                           </div>
                        </div>

                     </div>
                  </div>

               </div>

            </div>
         </div>
      </div>
   )
}

export default TechDash
