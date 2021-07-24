import React from 'react'
import {Route} from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import Home from '../Home/Home'
import Login from '../Login/Login'
import SignIn from '../SignIn/SignIn'
import Dashboard from '../Dashboard/Dashboard'
const Routes = () => (

        <>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/sign' component={SignIn} />
            <ProtectedRoute exact path='/dash/:id' component={Dashboard} />
        </>
)

export default Routes