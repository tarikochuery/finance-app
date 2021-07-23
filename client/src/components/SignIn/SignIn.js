import React, { useState } from 'react';
import './signin.css'
import { Icon, InputField, NextBtn } from '../Atoms/atoms';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import Modal from '../Modal/Modal';

const SignIn = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [modalShow, setModalShow] = useState(false)

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
        api.post('/v1/auth/register',
        {username, email, password}
        ).then((res) => {
            if( res.status === 201) {
                setModalShow(true)
            } else {
                alert('Ops! Parece que ocorreu um erro! Tente Novamente.')
                // TODO Mensagem de erro
            }
        }).catch(err => console.error(err))
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
                    <InputField type='password' max={60} min={8} required={true} value={password} onChange={handleChangePsw}>
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
            <Modal show={modalShow} title='Cadastro Efetuado com Sucesso' comand='Próximo'>
                <p>Parabéns! Você acabou de efetuar seu cadastro!</p>
                <p>Clique no botão abaixo para seguir pra área de login.</p>
            </Modal>
        </div>
    )
}

export default SignIn