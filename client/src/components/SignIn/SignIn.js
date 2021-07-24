import React, { useState } from 'react';
import './signin.css'
import { Icon, InputField, ModalBtn } from '../Atoms/atoms';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';
import Modal from '../Modal/Modal';

const SignIn = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [modalShow, setModalShow] = useState(false)
    const history = useHistory()

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
        ).catch(alert('Esse email já está em uso. Tente novamente!'))
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
                    <ModalBtn>
                        Continuar
                    </ModalBtn>
                </form>
                <p>Já tem uma conta? <Link to='/login' style={{color: '#4CCC81',
                                                            textDecoration: 'underline'}}
                >Iniciar Sessão</Link></p>
            </div>
            <Modal to={'/login'} type={'link'} show={modalShow} title='Cadastro Efetuado com Sucesso' comand='Próximo'>
                <p>Parabéns! Você acabou de efetuar seu cadastro!</p>
                <p>Clique no botão abaixo para seguir pra área de login.</p>
            </Modal>
        </div>
    )
}

export default SignIn