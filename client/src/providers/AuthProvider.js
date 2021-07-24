import React, {createContext, useState} from 'react'
import { authenticate } from '../services/authenticate'
import decoder from '../services/jwtDecoder'

const authContext = createContext()

function AuthProvider({children}) {  
    const[isAuth, setIsAuth] = useState(authenticate.isLogedIn)
    const[username, setUsername] = useState(isAuth && decoder.decode(localStorage.getItem('token')).username)
    const[id, setId] = useState(isAuth && decoder.decode(localStorage.getItem('token')).id)

    const login = async (email, password) =>{
        await authenticate.login(email, password)
        if(authenticate.isLogedIn()){
            setIsAuth(authenticate.isAuthenticated)
            setUsername(decoder.decode(localStorage.getItem('token')).username)
            setId(decoder.decode(localStorage.getItem('token')).id)
        } else {
            console.log('passei no Else')
            setIsAuth(false)
            return true
        }
    }

    const logout = () => {
        localStorage.removeItem('token')
        setIsAuth(false)
        setUsername()
        setId()
    }
    
    return (
        <authContext.Provider 
        value={{isAuth, username, login, logout, id}}>
            {children}
        </authContext.Provider>
    )
}

export {AuthProvider, authContext}
