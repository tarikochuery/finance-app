import React, {useState} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Home/Home';
import Login from './Login/Login';
import SignIn from './SignIn/SignIn';
import Dashboard from './Dashboard/Dashboard';


function App() {
  const [token, setToken] = useState()

  // if(!token){
  //   return(
  //     <Router>
  //     <Switch>
  //       <Route path='/login' component={Login} />
  //       <Route path='/sign' component={SignIn} />
  //       <Route path='/' component={Home} />
  //     </Switch>
  //   </Router> 
  //   )
  // }

  return (
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
  );
}

export default App;
