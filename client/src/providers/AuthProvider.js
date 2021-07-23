import React, {createContext, useState} from 'react'
import api from '../services/api'

const Context = createContext()

function AuthProvider({children}) {

    const[isAuth, setIsAuth] = useState(false)
    const[user, setUser] = useState({})
    const[password, setPassword] = useState('')
    const[email, setEmail] = useState('')

    const changeEmail = (e) =>{
        setEmail(e.target.value)
    }

    const changePsw = (e) =>{
        setPassword(e.target.value)
    }

    const handleLogin = (e) => {
        e.preventDefault()
        // Enviar dados colocados pelo user para o server
        api.post('/v1/auth/login', 
        {email, password}
        ).then((response) => {
            console.log(response)
            const res = response.data
            localStorage.setItem('token', res.access_token)
            const token = localStorage.getItem('token')
            console.log(token)
        })

        // Obter a resposta do server e mandar retorno para user
            // Salvar dados do user
            // Salvar token no local storage
    }

    return (
        <Context.Provider 
        value={{isAuth, 
                handleLogin, 
                email, 
                password, 
                changeEmail, 
                changePsw }}>
            {children}
        </Context.Provider>
    )
}

export  {AuthProvider, Context}
