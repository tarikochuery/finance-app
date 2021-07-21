import React from 'react';
import './login.css'
import {Icon, InputField, NextBtn} from '../Atoms/atoms'
import { Link } from 'react-router-dom';

const Login = () => {
    return(
        <div className='content' id='login'>
            <Icon image='assets/images/user.svg' kind='login' />
            <h2>Login</h2>

            <form className='login-form'>
                <InputField type='text'>
                    Email
                </InputField>
                <InputField type='password'>
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
    )
}

export default Login