import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute';

import Home from './Home/Home';
import Login from './Login/Login';
import SignIn from './SignIn/SignIn';
import Dashboard from './Dashboard/Dashboard';

import {AuthProvider} from '../providers/AuthProvider';

function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [Loading, setLoading] = useState(true)
  const [username, setUsername] = useState()

  useEffect(() => {
    const token = localStorage.getItem('token')
    const username = localStorage.getItem('username')
    if(token && username){
      setIsAuth(true)
    }
    setLoading(false)
  },[])

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
            <ProtectedRoute path={`/dash/:${username}`} isAuth={isAuth} component={Dashboard}/>
          </Switch>
        </Router>    
      </AuthProvider>
  );
}

export default App;
