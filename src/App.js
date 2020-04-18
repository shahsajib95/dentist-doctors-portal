import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Appoinment from './Component/Appoinments/Appoinment';

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
   
    <Route path="/appoinment">
    <Appoinment></Appoinment>
    </Route>
    </Switch>
    </Router>

    </div>
  );
}

export default App;
