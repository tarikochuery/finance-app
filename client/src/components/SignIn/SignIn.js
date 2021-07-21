import React from 'react';
import './signin.css'
import { Icon, InputField, NextBtn } from '../Atoms/atoms';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return(
        <div id='login' className='content'>
            <Icon image='/assets/images/user.svg' kind='login'/>
            <h2>Vamos criar uma conta</h2>
            <form className='signin-form'>
                <InputField type='text' max={32}>
                    Nome
                </InputField>
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
            <p>Já tem uma conta? <Link to='/login' style={{color: '#4CCC81',
                                                           textDecoration: 'underline'}}
            >Iniciar Sessão</Link></p>
        </div>
    )
}

export default SignIn