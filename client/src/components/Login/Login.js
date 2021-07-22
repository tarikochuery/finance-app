import React, { useState } from 'react';
import './login.css'
import {Icon, InputField, NextBtn} from '../Atoms/atoms'
import { Link } from 'react-router-dom';
import api from '../../services/api';

const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleChangeEmail = (e) =>{
        setEmail(e.target.value)
    }

    const handleChangePsw = (e) =>{
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.history.push('/dash/1')
        console.log({email, password})
        // Enviar dados colocados pelo user para o server
        

        // Obter a resposta do server e mandar retorno para user
    }

    return(
        <div className='content' id='login'>
            <div className='wrapper'>
                <Icon image='assets/images/user.svg' kind='login' />
                <h2>Login</h2>

                <form className='login-form' onSubmit={handleSubmit}>
                    <InputField type='email' required={true} value={email} onChange={handleChangeEmail}>
                        Email
                    </InputField>
                    <InputField type='password' required={true} value={password} onChange={handleChangePsw}>
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

export default Login