import React, { useState } from "react";
import ToolchainTable from '../components/ToolchainTable';
import TableEight from '../components/TableEight';
import { useHistory } from "react-router-dom";
import { postCompany } from '../api/company';

function ToolchainSetup() {
   /* const history = useHistory();
   
      const [successRate, setSuccessRate] = useState('');
   
      const handleChange = e => {
         setSuccessRate(prevSuccessRate => ({ ...prevSuccessRate, [e.target.name]: e.target.value }))
         console.log(successRate)
      }
   
      const handleSubmit = async (e) => {
         console.log(successRate)
         let resp1 = await postCompany(successRate);
         resp1 !== undefined && resp1.status === 200 ? history.push("/choose-dashboard") : alert("Name not available")
         history.push("/choose-dashboard")
      }; */

   const history = useHistory();

   const [code, setCode] = useState('')
   const [build, setBuild] = useState('')
   const [test, setTest] = useState('')
   const [integration, setIntegration] = useState('')
   const [deploy, setDeploy] = useState('')
   const [operate, setOperate] = useState('')
   const [monitor, setMonitor] = useState('')
   const [error, setError] = useState(null)
   const [successRate, setSuccessRate] = useState('');

   const processingData = e => {
      e.preventDefault()
      if (!code.trim()) {
         setError('Enter Success Rate')
         return
      }
      if (code > 100) {
         setError('The Success Rate should not be greater than 100%')
         return
      }

      if (!build.trim()) {
         setError('Enter Success Rate')
         return
      }
      if (build > 100) {
         setError('The Success Rate should not be greater than 100%')
         return
      }

      if (!test.trim()) {
         setError('Enter Success Rate')
         return
      }
      if (test > 100) {
         setError('The Success Rate should not be greater than 100%')
         return
      }

      if (!integration.trim()) {
         setError('Enter Success Rate')
         return
      }
      if (integration > 100) {
         setError('The Success Rate should not be greater than 100%')
         return
      }

      if (!deploy.trim()) {
         setError('Enter Success Rate')
         return
      }
      if (deploy > 100) {
         setError('The Success Rate should not be greater than 100%')
         return
      }

      if (!operate.trim()) {
         setError('Enter Success Rate')
         return
      }
      if (operate > 100) {
         setError('The Success Rate should not be greater than 100%')
         return
      }

      if (!monitor.trim()) {
         setError('Enter Success Rate')
         return
      }
      if (monitor > 100) {
         setError('The Success Rate should not be greater than 100%')
         return
      }

      setError(null)
      console.log('No problem');
   }
      
   const handleSubmit = async (e) => {
      console.log(successRate)
      let resp1 = await postCompany(successRate);
      resp1 !== undefined && resp1.status === 200 ? history.push("/choose-dashboard") : history.push("/toolchain-setup")
      history.push("/choose-dashboard")
   };

   return (
      <div className="general__background">
         <div className="general__container">
         {/* <p className="toolchainTab"><i class="fas fa-arrow-down"></i>&nbsp; Dobcon Default Tools</p> */}
         <p className="toolchainTab">Dobcon Default Tools</p>
            <h1>Toolchain</h1>
            <p>
               Select the tools you want to use in your software development pipeline.
            </p><br />
            <ToolchainTable />

            <br /><br /><hr className="gray__line" /><br />

            <h1>SLA´s</h1>
            <p>Indicate the SLA (success rate) you have agreed for each stage of your software development pipeline.</p><br />
            <form onSubmit={processingData}>
               {
                  error && (
                     <div className="alert__message">
                        {error}
                     </div>
                  )
               }
               <br />
               <div className="flex__container col__100--tMobile wrapTablet tablet__mt0">

                  <div className="sla__card">
                     <p>CODE</p>
                     <span className="currency__input dark__input">
                        <input 
                           className="anti__input anti__medium"
                           type="number"
                           placeholder="Type Here"
                           name="code" onChange={e => setCode(e.target.value)} 
                           value={code} 
                        />
                     %</span>
                  </div>

                  <div className="sla__card">
                     <p>BUILD</p>
                     <span className="currency__input dark__input">
                        <input 
                           className="anti__input anti__medium"
                           type="number"
                           placeholder="Type Here"
                           name="build" onChange={e => setBuild(e.target.value)} 
                           value={build} 
                        />
                     %</span>
                  </div>

                  <div className="sla__card">
                     <p>TEST</p>
                     <span className="currency__input dark__input">
                        <input 
                           className="anti__input anti__medium"
                           type="number"
                           placeholder="Type Here"
                           name="test" onChange={e => setTest(e.target.value)} 
                           value={test} 
                        />
                     %</span>
                  </div>

                  <div className="sla__card">
                     <p>INTEGRATION</p>
                     <span className="currency__input dark__input">
                        <input 
                           className="anti__input anti__medium"
                           type="number"
                           placeholder="Type Here"
                           name="integration" onChange={e => setIntegration(e.target.value)} 
                           value={integration} 
                        />
                     %</span>
                  </div>

                  <div className="sla__card">
                     <p>DEPLOY</p>
                     <span className="currency__input dark__input">
                        <input 
                           className="anti__input anti__medium"
                           type="number"
                           placeholder="Type Here"
                           name="deploy" onChange={e => setDeploy(e.target.value)} 
                           value={deploy} 
                        />
                     %</span>
                  </div>

                  <div className="sla__card">
                     <p>OPERATE</p>
                     <span className="currency__input dark__input">
                        <input 
                           className="anti__input anti__medium"
                           type="number"
                           placeholder="Type Here"
                           name="operate" onChange={e => setOperate(e.target.value)} 
                           value={operate} 
                        />
                     %</span>
                  </div>

                  <div className="sla__card">
                     <p>MONITOR</p>
                     <span className="currency__input dark__input">
                        <input 
                           className="anti__input anti__medium"
                           type="number"
                           placeholder="Type Here"
                           name="monitor" onChange={e => setMonitor(e.target.value)} 
                           value={monitor} 
                        />
                     %</span>
                  </div>
               </div>

               <br /><br /><hr className="gray__line" /><br />

               <h1>Responsible</h1>
               <p>Select the person who will be responsible for each pipeline stage in this initiative.</p><br />

               <TableEight />

               <section className="flex__container textAlign__center">
                  <button
                     href="/choose-dashboard"
                     className="red__btn medium__btn"
                     type="Submit"
                     /* onClick={() => handleSubmit()} */
                  >
                     Done
                  </button>
               </section>
            </form>
         </div>

      </div>
   )
}

export default ToolchainSetup
