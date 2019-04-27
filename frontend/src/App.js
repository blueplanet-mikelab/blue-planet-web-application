import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Search from './Components/home/search';
import Explore from './Pages/Explore';

// import testing components
import Register from './Components/user/register'
import Login from './Components/user/login'
import Dashboard from './Components/user/dashboard'
import PrivateRoute from './Components/private-route/privateRoute';
import AddThread from './Components/thread/addThread';

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
