import React, {createContext, useEffect, useState} from 'react'
import Loading from '../components/Loading/Loading'
import { authenticate } from '../services/authenticate'

const authContext = createContext()

function AuthProvider({children}) {  
    const[isAuth, setIsAuth] = useState(false)
    const[username, setUsername] = useState()
    const[loading, setLoading] = useState(true) 
    
    const login = async (email, password) =>{
        await authenticate.login(email, password)
        setIsAuth(authenticate.isAuthenticated)
    }

    const logout = () => {
        localStorage.removeItem('token')
        setIsAuth(false)
    }
    
    return (
        <authContext.Provider 
        value={{isAuth, username, login, logout}}>
            {children}
        </authContext.Provider>
    )
}

export {AuthProvider, authContext}
