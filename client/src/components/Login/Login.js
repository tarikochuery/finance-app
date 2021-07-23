import React, { useState, useContext } from 'react';
import './login.css'
import {Icon, InputField, NextBtn} from '../Atoms/atoms'
import { Link } from 'react-router-dom';
// import api from '../../services/api';
import { Context } from '../../providers/AuthProvider';

const Login = (props) => {
    const {handleLogin, email, password, changeEmail, changePsw} = useContext(Context)

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

export default Login