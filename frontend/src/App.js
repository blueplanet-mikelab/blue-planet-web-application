import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Search from './components/home/search';
import Explore from './Pages/Explore';
import BasicMap from './components/map/map'

// import testing components
import Register from './components/user/register'
import Login from './components/user/login'
import Dashboard from './components/user/dashboard'
import PrivateRoute from './components/private-route/privateRoute';
import AddThread from './components/thread/addThread'
import Forum from './components/thread/forum'

class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route exact path="/" component={BasicMap}/>
            <Route path="/explore" component={Explore}/>
            <Route path="/map" component={BasicMap}/>

          </Switch>

          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/forum/" component={Forum} />
          <Route exact path="/forum/add" component={AddThread} />

          <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              {/* <PrivateRoute exact path="/forum/add" component={AddThread} /> */}
              {/* <PrivateRoute exact path="/forum/edit/:id" component={editThread} /> */}
          </Switch>

        </Router>
    );
  }
}

export default App;
