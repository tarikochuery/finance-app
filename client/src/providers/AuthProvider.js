import React, {createContext, useEffect, useState} from 'react'
import api from '../services/api'

const Context = createContext()

function AuthProvider({children, sendAuthtoApp}) {

    
    const[isAuth, setIsAuth] = useState(false)
    const[username, setUsername] = useState()
    const[loading, setLoading] = useState(true) 
    
    const isLoggedIn = () =>{
        const token = localStorage.getItem('token')
        const user = localStorage.getItem('username')
        console.log('Vindo do AuthProvider', token, user)
        if(token && user){
            setIsAuth(true)
            setUsername(user)
            sendAuthtoApp(isAuth)
            api.defaults.Authorization = `bearer ${token}`
        } else {
            setIsAuth(false)
            localStorage.removeItem('username')
            localStorage.removeItem('token')
            sendAuthtoApp(isAuth)
        }
    }
    
    const handleSuccessfulAuth = (data) =>{
        console.log(data)
        setIsAuth(true)
        setUsername(data.username)
    }
    
    useEffect(() => {
        isLoggedIn()

        setLoading(false)
    },[isAuth])
    
    if(loading){
        return <h1>Loading...</h1>
    } else {
        return (
            <Context.Provider 
            value={{isAuth, username, handleSuccessfulAuth}}>
                {children}
            </Context.Provider>
        )
    }

}

export  {AuthProvider, Context}
