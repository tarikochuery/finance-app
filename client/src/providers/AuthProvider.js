import React, {createContext, useEffect, useState} from 'react'
import Loading from '../components/Loading/Loading'

const Context = createContext()

function AuthProvider({children}) {

    
    const[isAuth, setIsAuth] = useState(false)
    const[username, setUsername] = useState()
    const[loading, setLoading] = useState(true) 
    
    const isLoggedIn = () =>{
        const token = localStorage.getItem('token')
        const user = localStorage.getItem('username')
        if(token && user){
            setIsAuth(true)
            setUsername(user)
        } else {
            setIsAuth(false)
            localStorage.removeItem('username')
            localStorage.removeItem('token')
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
    },[])
    
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
