import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Appoinment from './Component/Appoinments/Appoinment';
import Dashboard from './Component/Dashboard/Dashboard';
import Login from './Component/Login/Login';

function App() {

  return (
    <div className="App">

    <Router>
    <Switch>
    <Route exact path="/">
    <Header></Header>
    </Route>
    <Route path="/home">
    <Header></Header>
    </Route>
    <Route path="/dashboard">
     <Dashboard></Dashboard>
   </Route>
    <Route path="/appoinment">
    <Appoinment></Appoinment>
    </Route>
    <Route path="/login">
     <Login></Login>
    </Route>
    </Switch>
    </Router>

    </div>
  );
}

export default App;
