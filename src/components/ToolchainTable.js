import React, { useState } from 'react';
import './componentsStyles/ToolchainTable.css';

function ToolchainTable() {

   const [git, setGit] = useState(false);
   const [gitHub, setGitHub] = useState(false);
   const [bitBucket, setBitBucket] = useState(false);
   const [circleCi, setCircleCi] = useState(false);
   const [jenkinsBuild, setJenkinsBuild] = useState(false);
   const [jenkinsTest, setJenkinsTest] = useState(false);
   const [jenkinsDeploy, setJenkinsDeploy] = useState(false);
   const [jenkinsIntegration, setJenkinsIntegration] = useState(false);
   const [nuget, setNuget] = useState(false);
   const [gitLabBuild, setGitLabBuild] = useState(false);
   const [gitLabIntegration, setGitLabIntegration] = useState(false);
   const [sonarQube, setSonarQube] = useState(false);
   const [selenium, setSelenium] = useState(false);
   const [sonaType, setSonaType] = useState(false);
   const [sentry, setSentry] = useState(false);
   const [puppet, setPuppet] = useState(false);
   const [ansibleDeploy, setAnsibleDeploy] = useState(false);
   const [ansibleOperate, setAnsibleOperate] = useState(false);
   const [chef, setChef] = useState(false);
   const [urbanCode, setUrbanCode] = useState(false);
   const [plutora, setPlutora] = useState(false);
   const [saltStack, setSaltStack] = useState(false);
   const [dockerBuild, setDockerBuild] = useState(false);
   const [docker, setDocker] = useState(false);
   const [redHat, setRedHat] = useState(false);
   const [octopusDeploy, setOctopusDeploy] = useState(false);
   /* NEWS */
   const [gradle, setGradle] = useState(false);
   const [testSigma, setTestSigma] = useState(false);
   const [bamboo, setBamboo] = useState(false);
   const [kubernetes, setKubernetes] = useState(false);
   const [nagios, setNagios] = useState(false);
   const [dynatrace, setDynatrace] = useState(false);
   const [zabbix, setZabbix] = useState(false);
   const [maven, setMaven] = useState(false);
   const [grafana, setGrafana] = useState(false);
   const [splunk, setSplunk] = useState(false);
   const [terraformDeploy, setTerraformDeploy] = useState(false);

   const handleChange = (event, params) => {
      if (params === "git"){
         setGit(event.target.checked)
      }
      if (params === "gitHub"){
         setGitHub(event.target.checked)
      }
      if (params === "bitBucket"){
         setBitBucket(event.target.checked)
      }
      if (params === "circleCi"){
         setCircleCi(event.target.checked)
      }
      if (params === "jenkinsBuild"){
         setJenkinsBuild(event.target.checked)
      }
      if (params === "jenkinsTest"){
         setJenkinsTest(event.target.checked)
      }
      if (params === "jenkinsIntegration"){
         setJenkinsIntegration(event.target.checked)
      }
      if (params === "jenkinsDeploy"){
         setJenkinsDeploy(event.target.checked)
      }
      if (params === "nuget"){
         setNuget(event.target.checked)
      }
      if (params === "gitLabBuild"){
         setGitLabBuild(event.target.checked)
      }
      if (params === "gitLabIntegration"){
         setGitLabIntegration(event.target.checked)
      }
      if (params === "sonarQube"){
         setSonarQube(event.target.checked)
      }
      if (params === "selenium"){
         setSelenium(event.target.checked)
      }
      if (params === "sonaType"){
         setSonaType(event.target.checked)
      }
      if (params === "sentry"){
         setSentry(event.target.checked)
      }
      if (params === "puppet"){
         setPuppet(event.target.checked)
      }
      if (params === "ansibleDeploy"){
         setAnsibleDeploy(event.target.checked)
      }
      if (params === "ansibleOperate"){
         setAnsibleOperate(event.target.checked)
      }
      if (params === "chef"){
         setChef(event.target.checked)
      }
      if (params === "urbanCode"){
         setUrbanCode(event.target.checked)
      }
      if (params === "plutora"){
         setPlutora(event.target.checked)
      }
      if (params === "saltStack"){
         setSaltStack(event.target.checked)
      }
      if (params === "dockerBuild"){
         setDockerBuild(event.target.checked)
      }
      if (params === "docker"){
         setDocker(event.target.checked)
      }
      if (params === "redHat"){
         setRedHat(event.target.checked)
      }
      if (params === "octopusDeploy"){
         setOctopusDeploy(event.target.checked)
      }
      if (params === "gradle"){
         setGradle(event.target.checked)
      }
      if (params === "testSigma"){
         setTestSigma(event.target.checked)
      }
      if (params === "bamboo"){
         setBamboo(event.target.checked)
      }
      if (params === "kubernetes"){
         setKubernetes(event.target.checked)
      }
      if (params === "nagios"){
         setNagios(event.target.checked)
      }
      if (params === "dynatrace"){
         setDynatrace(event.target.checked)
      }
      if (params === "zabbix"){
         setZabbix(event.target.checked)
      }
      if (params === "maven"){
         setMaven(event.target.checked)
      }
      if (params === "grafana"){
         setGrafana(event.target.checked)
      }
      if (params === "splunk"){
         setSplunk(event.target.checked)
      }
      if (params === "terraformDeploy"){
         setTerraformDeploy(event.target.checked)
      }
   }

   return (
      <div className="toolChain__container">

         {/* CODE */}
         <div className="tools__cards">
            <div className="tool__cards--body">

               {/* GITHUB LOGO */}
               <input id="tc__gitHub" type="checkbox" checked={gitHub} onChange={(e) => handleChange(e, "gitHub")} />
               {gitHub ? 
                  <label htmlFor="tc__gitHub"><div className="gitHub__logo"></div></label>:<label htmlFor="tc__gitHub"><div className="gitHub__logoColor"></div></label>}

               {/* GIT LOGO */}
               <input id="tc__git" type="checkbox" checked={git} onChange={(e) => handleChange(e, "git")} />
               {git ? 
                  <label htmlFor="tc__git"><div className="git__logoColor"></div></label>:<label htmlFor="tc__git"><div className="git__logo"></div></label>}
                           
               {/* BITBUCKET LOGO */}
               <input id="tc__bitBucket" type="checkbox" checked={bitBucket} onChange={(e) => handleChange(e, "bitBucket")} />
               {bitBucket ? 
                  <label htmlFor="tc__bitBucket"><div className="bitBucket__logoColor"></div></label>:<label htmlFor="tc__bitBucket"><div className="bitBucket__logo"></div></label>}
               
            </div>
            
            <div className="tool__cards--footer">
               CODE
            </div>
         </div>

         {/* BUILD */}
         <div className="tools__cards">
            <div className="tool__cards--body">

               {/* GRADLE LOGO */}
               <input id="tc__gradle" type="checkbox" checked={gradle} onChange={(e) => handleChange(e, "gradle")} />
               {gradle ? 
                  <label htmlFor="tc__gradle"><div className="gradle__logo"></div></label>:<label htmlFor="tc__gradle"><div className="gradle__logoColor"></div></label>}
                           
               {/* JENKINS LOGO */}
               <input id="tc__jenkinsBuild" type="checkbox" checked={jenkinsBuild} onChange={(e) => handleChange(e, "jenkinsBuild")} />
               {jenkinsBuild ? 
                  <label htmlFor="tc__jenkinsBuild"><div className="jenkins__logoColor"></div></label>:<label htmlFor="tc__jenkinsBuild"><div className="jenkins__logo"></div></label>}
                           
               {/* NUGET LOGO */}
               <input id="tc__nuget" type="checkbox" checked={nuget} onChange={(e) => handleChange(e, "nuget")} />
               {nuget ? 
                  <label htmlFor="tc__nuget"><div className="nuget__logoColor"></div></label>:<label htmlFor="tc__nuget"><div className="nuget__logo"></div></label>}

               {/* MAVEN LOGO */}
               <input id="tc__maven" type="checkbox" checked={maven} onChange={(e) => handleChange(e, "maven")} />
               {maven ? 
                  <label htmlFor="tc__maven"><div className="maven__logoColor"></div></label>:<label htmlFor="tc__maven"><div className="maven__logo"></div></label>}

               {/* DOCKER LOGO */}
               <input id="tc__dockerBuild" type="checkbox" checked={dockerBuild} onChange={(e) => handleChange(e, "dockerBuild")} />
               {dockerBuild ? 
                  <label htmlFor="tc__dockerBuild"><div className="docker__logoColor"></div></label>:<label htmlFor="tc__dockerBuild"><div className="docker__logo"></div></label>}

               {/* GITLAB LOGO */}
               <input id="tc__gitLabBuild" type="checkbox" checked={gitLabBuild} onChange={(e) => handleChange(e, "gitLabBuild")} />
               {gitLabBuild ? 
                  <label htmlFor="tc__gitLabBuild"><div className="gitLab__logoColor"></div></label>:<label htmlFor="tc__gitLabBuild"><div className="gitLab__logo"></div></label>}

            </div>
            <div className="tool__cards--footer">
               BUILD
            </div>
         </div>

         {/* TEST */}
         <div className="tools__cards">
            <div className="tool__cards--body">
                                          
               {/* SELENIUM LOGO */}
               <input id="tc__selenium" type="checkbox" checked={selenium} onChange={(e) => handleChange(e, "selenium")} />
               {selenium ? 
                  <label htmlFor="tc__selenium"><div className="selenium__logo"></div></label>:<label htmlFor="tc__selenium"><div className="selenium__logoColor"></div></label>}

               {/* SONARQUBE LOGO */}
               <input id="tc__sonarQube" type="checkbox" checked={sonarQube} onChange={(e) => handleChange(e, "sonarQube")} />
               {sonarQube ? 
                  <label htmlFor="tc__sonarQube"><div className="sonarQube__logoColor"></div></label>:<label htmlFor="tc__sonarQube"><div className="sonarQube__logo"></div></label>}
                           
               {/* SONATYPE LOGO */}
               <input id="tc__sonaType" type="checkbox" checked={sonaType} onChange={(e) => handleChange(e, "sonaType")} />
               {sonaType ? 
                  <label htmlFor="tc__sonaType"><div className="sonaType__logoColor"></div></label>:<label htmlFor="tc__sonaType"><div className="sonaType__logo"></div></label>}

               {/* SENTRY LOGO */}
               <input id="tc__sentry" type="checkbox" checked={sentry} onChange={(e) => handleChange(e, "sentry")} />
               {sentry ? 
                  <label htmlFor="tc__sentry"><div className="sentry__logoColor"></div></label>:<label htmlFor="tc__sentry"><div className="sentry__logo"></div></label>}

               {/* TESTSIGMA LOGO */}
               <input id="tc__testSigma" type="checkbox" checked={testSigma} onChange={(e) => handleChange(e, "testSigma")} />
               {testSigma ? 
                  <label htmlFor="tc__testSigma"><div className="testSigma__logoColor"></div></label>:<label htmlFor="tc__testSigma"><div className="testSigma__logo"></div></label>}
                                            
               {/* JENKINS LOGO */}
               <input id="tc__jenkinsTest" type="checkbox" checked={jenkinsTest} onChange={(e) => handleChange(e, "jenkinsTest")} />
               {jenkinsTest ? 
                  <label htmlFor="tc__jenkinsTest"><div className="jenkins__logoColor"></div></label>:<label htmlFor="tc__jenkinsTest"><div className="jenkins__logo"></div></label>}

            </div>
            <div className="tool__cards--footer">
               TEST
            </div>
         </div>


         {/* INTEGRATION */}
         <div className="tools__cards">
            <div className="tool__cards--body">
                           
               {/* JENKINS LOGO */}
               <input id="tc__jenkinsIntegration" type="checkbox" checked={jenkinsIntegration} onChange={(e) => handleChange(e, "jenkinsIntegration")} />
               {jenkinsIntegration ? 
                  <label htmlFor="tc__jenkinsIntegration"><div className="jenkins__logo"></div></label>:<label htmlFor="tc__jenkinsIntegration"><div className="jenkins__logoColor"></div></label>}

               {/* CIRCLECI LOGO */}
               <input id="tc__circleCi" type="checkbox" checked={circleCi} onChange={(e) => handleChange(e, "circleCi")} />
               {circleCi ? 
                  <label htmlFor="tc__circleCi"><div className="circleCi__logoColor"></div></label>:<label htmlFor="tc__circleCi"><div className="circleCi__logo"></div></label>}
               
               {/* BAMBOO LOGO */}
               <input id="tc__bamboo" type="checkbox" checked={bamboo} onChange={(e) => handleChange(e, "bamboo")} />
               {bamboo ? 
                  <label htmlFor="tc__bamboo"><div className="bamboo__logoColor"></div></label>:<label htmlFor="tc__bamboo"><div className="bamboo__logo"></div></label>}

               {/* GITLAB LOGO */}
               <input id="tc__gitLabIntegration" type="checkbox" checked={gitLabIntegration} onChange={(e) => handleChange(e, "gitLabIntegration")} />
               {gitLabIntegration ? 
                  <label htmlFor="tc__gitLabIntegration"><div className="gitLab__logoColor"></div></label>:<label htmlFor="tc__gitLabIntegration"><div className="gitLab__logo"></div></label>}

            </div>
            <div className="tool__cards--footer">
               INTEGRATION
            </div>
         </div>

         {/* DEPLOY */}
         <div className="tools__cards">
            <div className="tool__cards--body">

               {/* DOCKER LOGO */}
               <input id="tc__docker" type="checkbox" checked={docker} onChange={(e) => handleChange(e, "docker")} />
               {docker ? 
                  <label htmlFor="tc__docker"><div className="docker__logo"></div></label>:<label htmlFor="tc__docker"><div className="docker__logoColor"></div></label>}

               {/* KUBERNETES LOGO */}
               <input id="tc__kubernetes" type="checkbox" checked={kubernetes} onChange={(e) => handleChange(e, "kubernetes")} />
               {kubernetes ? 
                  <label htmlFor="tc__kubernetes"><div className="kubernetes__logoColor"></div></label>:<label htmlFor="tc__kubernetes"><div className="kubernetes__logo"></div></label>}
                           
               {/* RED HAT LOGO */}
               <input id="tc__redHat" type="checkbox" checked={redHat} onChange={(e) => handleChange(e, "redHat")} />
               {redHat ? 
                  <label htmlFor="tc__redHat"><div className="redHat__logoColor"></div></label>:<label htmlFor="tc__redHat"><div className="redHat__logo"></div></label>}
                           
               {/* OCTOPUS LOGO */}
               <input id="tc__octopusDeploy" type="checkbox" checked={octopusDeploy} onChange={(e) => handleChange(e, "octopusDeploy")} />
               {octopusDeploy ? 
                  <label htmlFor="tc__octopusDeploy"><div className="octopusDeploy__logoColor"></div></label>:<label htmlFor="tc__octopusDeploy"><div className="octopusDeploy__logo"></div></label>}
                                                            
               {/* JENKINS LOGO */}
               <input id="tc__jenkinsDeploy" type="checkbox" checked={jenkinsDeploy} onChange={(e) => handleChange(e, "jenkinsDeploy")} />
               {jenkinsDeploy ? 
                  <label htmlFor="tc__jenkinsDeploy"><div className="jenkins__logoColor"></div></label>:<label htmlFor="tc__jenkinsDeploy"><div className="jenkins__logo"></div></label>}
                                             
               {/* ANSIBLE LOGO */}
               <input id="tc__ansibleDeploy" type="checkbox" checked={ansibleDeploy} onChange={(e) => handleChange(e, "ansibleDeploy")} />
               {ansibleDeploy ? 
                  <label htmlFor="tc__ansibleDeploy"><div className="ansible__logoColor"></div></label>:<label htmlFor="tc__ansibleDeploy"><div className="ansible__logo"></div></label>}

               {/* TERRAFORM LOGO */}
               <input id="tc__terraformDeploy" type="checkbox" checked={terraformDeploy} onChange={(e) => handleChange(e, "terraformDeploy")} />
               {terraformDeploy ? 
                  <label htmlFor="tc__terraformDeploy"><div className="terraform__logoColor"></div></label>:<label htmlFor="tc__terraformDeploy"><div className="terraform__logo"></div></label>}

            </div>
            <div className="tool__cards--footer">
               DEPLOY
            </div>
         </div>

         {/* OPERATE */}
         <div className="tools__cards">
            <div className="tool__cards--body">
                                          
               {/* ANSIBLE LOGO */}
               <input id="tc__ansibleOperate" type="checkbox" checked={ansibleOperate} onChange={(e) => handleChange(e, "ansibleOperate")} />
               {ansibleOperate ? 
                  <label htmlFor="tc__ansibleOperate"><div className="ansible__logo"></div></label>:<label htmlFor="tc__ansibleOperate"><div className="ansible__logoColor"></div></label>}

               {/* PUPPET LOGO */}
               <input id="tc__puppet" type="checkbox" checked={puppet} onChange={(e) => handleChange(e, "puppet")} />
               {puppet ? 
                  <label htmlFor="tc__puppet"><div className="puppet__logoColor"></div></label>:<label htmlFor="tc__puppet"><div className="puppet__logo"></div></label>}
                           
               {/* CHEF LOGO */}
               <input id="tc__chef" type="checkbox" checked={chef} onChange={(e) => handleChange(e, "chef")} />
               {chef ? 
                  <label htmlFor="tc__chef"><div className="chef__logoColor"></div></label>:<label htmlFor="tc__chef"><div className="chef__logo"></div></label>}
                                             
               {/* SALTSTACK LOGO */}
               <input id="tc__saltStack" type="checkbox" checked={saltStack} onChange={(e) => handleChange(e, "saltStack")} />
               {saltStack ? 
                  <label htmlFor="tc__saltStack"><div className="saltStack__logoColor"></div></label>:<label htmlFor="tc__saltStack"><div className="saltStack__logo"></div></label>}

            </div>
            <div className="tool__cards--footer">
               OPERATE
            </div>
         </div>

         {/* MONITOR */}
         <div className="tools__cards">
            <div className="tool__cards--body">

               {/* URBAN CODELOGO */}
               {/* <input id="tc__urbanCode" type="checkbox" checked={urbanCode} onChange={(e) => handleChange(e, "urbanCode")} />
               {urbanCode ? 
                  <label htmlFor="tc__urbanCode"><div className="urbanCode__logoColor"></div></label>:<label htmlFor="tc__urbanCode"><div className="urbanCode__logo"></div></label>} */}
                           
               {/* PLUTORA LOGO */}
               {/* <input id="tc__plutora" type="checkbox" checked={plutora} onChange={(e) => handleChange(e, "plutora")} />
               {plutora ? 
                  <label htmlFor="tc__plutora"><div className="plutora__logoColor"></div></label>:<label htmlFor="tc__plutora"><div className="plutora__logo"></div></label>} */}
                                             
               {/* NAGIOS LOGO */}
               <input id="tc__nagios" type="checkbox" checked={nagios} onChange={(e) => handleChange(e, "nagios")} />
               {nagios ? 
                  <label htmlFor="tc__nagios"><div className="nagios__logo"></div></label>:<label htmlFor="tc__nagios"><div className="nagios__logoColor"></div></label>}
                                             
               {/* DYNATRACE LOGO */}
               <input id="tc__dynatrace" type="checkbox" checked={dynatrace} onChange={(e) => handleChange(e, "dynatrace")} />
               {dynatrace ? 
                  <label htmlFor="tc__dynatrace"><div className="dynatrace__logoColor"></div></label>:<label htmlFor="tc__dynatrace"><div className="dynatrace__logo"></div></label>}
                                             
               {/* ZABBIX LOGO */}
               <input id="tc__zabbix" type="checkbox" checked={zabbix} onChange={(e) => handleChange(e, "zabbix")} />
               {zabbix ? 
                  <label htmlFor="tc__zabbix"><div className="zabbix__logoColor"></div></label>:<label htmlFor="tc__zabbix"><div className="zabbix__logo"></div></label>}
                                                               
               {/* GRAFANA LOGO */}
               <input id="tc__grafana" type="checkbox" checked={grafana} onChange={(e) => handleChange(e, "grafana")} />
               {grafana ? 
                  <label htmlFor="tc__grafana"><div className="grafana__logoColor"></div></label>:<label htmlFor="tc__grafana"><div className="grafana__logo"></div></label>}
                                                               
               {/* SPLUNK LOGO */}
               <input id="tc__splunk" type="checkbox" checked={splunk} onChange={(e) => handleChange(e, "splunk")} />
               {splunk ? 
                  <label htmlFor="tc__splunk"><div className="splunk__logoColor"></div></label>:<label htmlFor="tc__splunk"><div className="splunk__logo"></div></label>}

            </div>
            <div className="tool__cards--footer">
               MONITOR
            </div>
         </div>
         
      </div>
   )
}

export default ToolchainTable
