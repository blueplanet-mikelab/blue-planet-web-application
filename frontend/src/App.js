import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Search from './Components/home/search';
import Explore from './Pages/Explore';

// import testing components
import Register from './Components/register/register'
import Login from './Components/login/login'
import Dashboard from './Components/dashboard/dashboard'
import PrivateRoute from './Components/private-route/privateRoute';

class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route exact path="/" component={Search}/>
            <Route path="/explore" component={Explore}/>
          </Switch>

          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />

          <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>

        </Router>
    );
  }
}

export default App;
