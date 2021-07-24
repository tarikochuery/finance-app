import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from '../Login/Login'
import SignIn from '../SignIn/SignIn'
import Dashboard from '../Dashboard/Dashboard'
import Home from '../Home/Home'
import ProtectedRoute from './ProtectedRoute'

export default function Routes() {
    return (
        <>
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
                    <ProtectedRoute path={'/dash/:user'} component={Dashboard}/>
                </Switch>
            </Router>
        </>
    )
}
