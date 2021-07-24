import React, { useState, useEffect } from 'react';
import './login.css'
import {Icon, InputField, NextBtn} from '../Atoms/atoms'
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const {isAuth, login} = useAuth()
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[errorMessage, setErrorMessage] = ('')
    const history = useHistory()

    const changeEmail = (e) =>{
        setEmail(e.target.value)
    }

    const changePsw = (e) =>{
        setPassword(e.target.value)
    }

    const handleLogin = (e) => {
        e.preventDefault()
        login(email, password)
    }

    useEffect(() =>{
        isAuth && history.push('/dash/Tarik')
    })

    return(
        <div className='content' id='login'>
            <div className='wrapper'>
                <Icon image='assets/images/user.svg' kind='login' />
                <h2>Login</h2>

                <form className='login-form' onSubmit={handleLogin}>
                    <InputField type='email' required={true} value={email} onChange={changeEmail} max={128}>
                        Email
                    </InputField>
                    <p className='error'>{errorMessage}</p>
                    <InputField type='password' required={true} value={password} onChange={changePsw} max={60} min={8}>
                        Senha
                    </InputField>
                    {/* <p className='error'>{errorMessage}</p> */}
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

export default Login