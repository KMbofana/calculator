import './App.css';
// import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';
import Drawers from './Components/Drawers';
import Startup from './Components/Startup'
import Startupidea from './Components/Startupidea';
import Startupreport from './Components/Startupreport';
import Director_startup_evaluation from './Components/Director_startup_evaluation';
import Leads from './Components/Leads';
import Currency from './Components/Currency';
import Director_evaluates_leaders from './Components/Director_evaluates_leaders';
import Employees from './Components/Employees'
import Director_evaluates_employee from './Components/Director_evaluates_employee';
import Shop from './Shop';
import Samplegraph from './Components/Samplegraph';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import Nav from './Nav';
import About from './About';


function App() {
  return (
    <Router>
    <div className="App">
      {/* Drawaer is outside the Switch and Route so that it can included across all pages */}
      <Drawers />
      <Switch>
        <Route path="/" exact component={Dashboard}/>
        <Route path="/Currency" component={Currency}/>
        <Route path="/Leads" component={Leads}/>
        <Route path="/Director_evaluates_leaders" component={Director_evaluates_leaders}/>
        <Route path="/Startup" component={Startup}/>
        <Route path="/Startupidea" component={Startupidea}/>
        <Route path="/Startupreport" component={Startupreport}/>
        <Route path="/Director_startup_evaluation" component={Director_startup_evaluation}/>
        <Route path="/Employees" component={Employees}/>
        <Route path="/Director_evaluates_employee" component={Director_evaluates_employee}/>
        <Route path="/Shop" exact component={Shop}/>
        <Route path="/Samplegraph" exact component={Samplegraph}/>
        <Route path="/About" exact component={About}/>
        <Route path="/Shop/:id" component={Shop}/>
        </Switch>
     
    </div>
    </Router>
  );
}

export default App;
