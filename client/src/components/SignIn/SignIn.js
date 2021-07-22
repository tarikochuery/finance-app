import React, { useState } from 'react';
import './signin.css'
import { Icon, InputField, NextBtn } from '../Atoms/atoms';
import { Link } from 'react-router-dom';

const SignIn = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleChangeUsername = (e) => {
        setUsername(e.target.value)
    }

    const handleChangePsw = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.history.push('/login')
        console.log({username, email, password})
        // Enviar dados para servidor

        // Receber dados e enviar resposta para user
    }

    return(
        <div id='login' className='content'>
            <div className='wrapper'>
                <Icon image='/assets/images/user.svg' kind='login'/>
                <h2>Vamos criar uma conta</h2>
                <form className='signin-form' onSubmit={handleSubmit}>
                    <InputField type='text' max={32} required={true} value={username} onChange={handleChangeUsername}>
                        Nome
                    </InputField>
                    <InputField type='email' max={128} required={true} value={email} onChange={handleChangeEmail}>
                        Email
                    </InputField>
                    <InputField type='password' max={60} required={true} value={password} onChange={handleChangePsw}>
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
        </div>
    )
}

export default SignIn