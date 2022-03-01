import './Normalize.css';
import './App.css';
import {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import CompanySetup from './pages/CompanySetup';
import InitiativeSetup from './pages/InitiativeSetup';
import ToolchainSetup from './pages/ToolchainSetup';
import ChooseDashboard from './pages/ChooseDashboard';
import TechDash from './pages/technical/TechDash';
import BusDash from './pages/business/BusDash';
import BusStartDate from './pages/business/BusStartDate';
import BusStatus from './pages/business/BusStatus';
import BusLocation from './pages/business/BusLocation';
import BusResources from './pages/business/BusResources';
import BusRoi from './pages/business/BusRoi';
import BusCosts from './pages/business/BusCosts';
import ShowComponents from './pages/ShowComponents';
import InitiativeA from './pages/business/InitiativeA';
import InitiativeACosts from './pages/business/InitiativeACosts';
import InitiativeAResources from './pages/business/InitiativeAResources';
import NotFound from './pages/NotFound';
import { Redirect } from "react-router-dom";

function App() {

  return (
    <>
      <Router>
        <Sidebar />
        <Header />
          <Switch>
            <Route exact path='/login' exact component= {Login} />
            <Route exact path='/sign-up' exact component= {SignUp} />
            <Route exact path='/forgot-password' exact component= {ForgotPassword} />
            <Route exact path='/company-setup' exact component= {CompanySetup} />
            <Route exact path='/initiative-setup' exact component= {InitiativeSetup} />
            <Route exact path='/toolchain-setup' exact component= {ToolchainSetup} />
            <Route exact path='/choose-dashboard' exact component= {ChooseDashboard} />
            <Route exact path='/dobcon-toolchain' exact component= {TechDash} />
            <Route exact path='/dobcon-business' exact component= {BusDash} />
            <Route exact path='/initiative-start-date' exact component= {BusStartDate} />
            <Route exact path='/initiative-status' exact component= {BusStatus} />
            <Route exact path='/initiative-location' exact component= {BusLocation} />
            <Route exact path='/initiative-resources' exact component= {BusResources} />
            <Route exact path='/initiative-roi' exact component= {BusRoi} />
            <Route exact path='/initiative-cost' exact component= {BusCosts} />
            <Route exact path='/initiative-a' exact component= {InitiativeA} />
            <Route exact path='/initiative-a-costs' exact component= {InitiativeACosts} />
            <Route exact path='/initiative-a-resources' exact component= {InitiativeAResources} />
            <Route exact path='/show-components' exact component= {ShowComponents} />
            <Redirect to='/login' />
            {/*<Route path='*' exact component= {NotFound} />*/}
          </Switch>
      </Router>
    </>
  );
}

export default App;
