import React, { useContext, useState, useEffect } from 'react';
import './login.css'
import {Icon, InputField, NextBtn} from '../Atoms/atoms'
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { Context } from '../../providers/AuthProvider';

const Login = (props) => {
    const {isAuth, handleSuccessfulAuth, username} = useContext(Context)
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[loading, setLoading] = useState(true)

    const changeEmail = (e) =>{
        setEmail(e.target.value)
    }

    const changePsw = (e) =>{
        setPassword(e.target.value)
    }

    const handleLogin = (e) => {
        e.preventDefault()
        api.post('/v1/auth/login', 
        {email, password}
        ).then((response) => {
            console.log(response)
            const res = response.data
            if (response.status === 201){
                handleSuccessfulAuth(res)
                localStorage.setItem('token', res.access_token)
                localStorage.setItem('username', res.username)
                const token = localStorage.getItem('token')
                api.defaults.Authorization = `bearer ${token}`
                props.history.push(`/dash/${res.username}`)
            }
        }).catch(err => console.error(err))

    }

    useEffect(() => {

            if(isAuth){
                props.history.push(`/dash/${username}`)
            }
        
        setLoading(false)
    }, [])

    if(loading){
        return(
            <h1>Loading...</h1>
        )
    } else {
        return(
            <div className='content' id='login'>
                <div className='wrapper'>
                    <Icon image='assets/images/user.svg' kind='login' />
                    <h2>Login</h2>
    
                    <form className='login-form' onSubmit={handleLogin}>
                        <InputField type='email' required={true} value={email} onChange={changeEmail}>
                            Email
                        </InputField>
                        <InputField type='password' required={true} value={password} onChange={changePsw}>
                            Senha
                        </InputField>
                        <NextBtn>
                            Continuar
                        </NextBtn>
                    </form>
                    <p>Ainda não tem uma conta? <Link to='/sign' 
                    style={{color: '#4CCC81', textDecoration: 'underline'}}
                    >Cadastre-se</Link> </p>
                </div>
            </div>
        )
    }
}

export default Login