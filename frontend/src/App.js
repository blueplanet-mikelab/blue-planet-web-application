import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Search from './Components/home/search';
import Explore from './Pages/Explore';
import BasicMap from './Components/map/map'

// import testing components
import Register from './Components/register/register'
import Login from './Components/login/login'
import Dashboard from './Components/dashboard/dashboard'
import PrivateRoute from './Components/private-route/privateRoute';
import AddThread from './Components/thread/addThread';

class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route exact path="/" component={Search}/>
            <Route path="/explore" component={Explore}/>
            <Route path="/map" component={BasicMap}/>

          </Switch>

          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/add" component={AddThread} />

          <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>

        </Router>
    );
  }
}

export default App;
