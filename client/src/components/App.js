import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute';

import Home from './Home/Home';
import Login from './Login/Login';
import SignIn from './SignIn/SignIn';
import Dashboard from './Dashboard/Dashboard';
import {AuthProvider} from '../providers/AuthProvider';
import Routes from './routes/Routes';

function App() {
  const [isAuth, setIsAuth] = useState(false)

  const sendAuthtoApp = (auth) => {
    setIsAuth(auth)
  }

  return (
    <AuthProvider sendAuthtoApp={sendAuthtoApp}>
        <Router>
          <Switch>
            <Routes />
          </Switch>
        </Router>   
    </AuthProvider>
  );
}

export default App;
