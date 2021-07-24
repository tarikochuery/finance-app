import React, {createContext, useEffect, useState} from 'react'
import { authenticate } from '../services/authenticate'

const authContext = createContext()

function AuthProvider({children}) {  
    const[isAuth, setIsAuth] = useState(authenticate.isLogedIn)
    const[username, setUsername] = useState()
    
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
