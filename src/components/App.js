import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Home/Home';
import Login from './Login/Login';
import SignIn from './SignIn/SignIn';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/sign' component={SignIn} />
      </Switch>
    </Router>
    
  );
}

export default App;
