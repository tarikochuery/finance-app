import React, {useState, useContext} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Home/Home';
import Login from './Login/Login';
import SignIn from './SignIn/SignIn';
import Dashboard from './Dashboard/Dashboard';

import {AuthProvider, Context} from '../providers/AuthProvider';

function App() {

  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route 
          path='/login' 
          render={props => (
            <Login {...props} />
          )}/>
          <Route 
          path='/sign' 
          render={(props) => (
            <SignIn {...props} />
          )} />
          <Route path='/dash/:id' component={Dashboard} />
        </Switch>
      </Router>    
    </AuthProvider>
  );
}

export default App;
