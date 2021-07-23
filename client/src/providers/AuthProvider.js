import React, {createContext, useEffect, useState} from 'react'
import Loading from '../components/Loading/Loading'
import api from '../services/api'

const Context = createContext()

function AuthProvider({children, sendAuthtoApp}) {

    
    const[isAuth, setIsAuth] = useState(false)
    const[username, setUsername] = useState()
    const[loading, setLoading] = useState(true) 
    
    const isLoggedIn = () =>{
        const token = localStorage.getItem('token')
        const user = localStorage.getItem('username')
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
        setIsAuth(true)
        setUsername(data.username)
    }

    const handleSuccessfulLogout = () => {
        localStorage.removeItem('token')
        setIsAuth(false)
    }
    
    useEffect(() => {
        isLoggedIn()

        setLoading(false)
    },[isAuth])
    
    if(loading){
        return <Loading/>
    } else {
        return (
            <Context.Provider 
            value={{isAuth, username, handleSuccessfulAuth, handleSuccessfulLogout}}>
                {children}
            </Context.Provider>
        )
    }

}

export  {AuthProvider, Context}
