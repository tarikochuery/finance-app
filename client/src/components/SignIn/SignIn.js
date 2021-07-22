import React, { useState } from 'react';
import './signin.css'
import { Icon, InputField, NextBtn } from '../Atoms/atoms';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    const handleChangePsw = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({name, email, password})
        // Enviar dados para servidor

        // Receber dados e enviar resposta para user
    }

    return(
        <div id='login' className='content'>
            <Icon image='/assets/images/user.svg' kind='login'/>
            <h2>Vamos criar uma conta</h2>
            <form className='signin-form' onSubmit={handleSubmit}>
                <InputField type='text' max={32} required={true} value={name} onChange={handleChangeName}>
                    Nome
                </InputField>
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
            <p>Já tem uma conta? <Link to='/login' style={{color: '#4CCC81',
                                                           textDecoration: 'underline'}}
            >Iniciar Sessão</Link></p>
        </div>
    )
}

export default SignIn