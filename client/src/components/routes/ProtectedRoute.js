import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import useAuth from '../../Hooks/useAuth'

export default function ProtectedRoute({component: Component, ...rest}) {
    const {isAuth} = useAuth()
    console.log(isAuth)
    return (
        <Route 
            {...rest}
            render={(props) => {
                if(isAuth){
                    return <Component />
                }else{
                    return <Redirect to={{pathname:'/login', state: {from: props.location}}}/>
                }        
            }} 
        />
    )
}