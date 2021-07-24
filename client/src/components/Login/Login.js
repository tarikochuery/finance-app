import React, { useState, useEffect } from 'react';
import './login.css'
import {Icon, InputField, ModalBtn} from '../Atoms/atoms'
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Loading from '../Loading/Loading'
import Modal from '../Modal/Modal'

const Login = () => {
    const {isAuth, login, id} = useAuth()
    const[email, setEmail] = useState('')
    const[loading, setLoading] = useState(false)
    const[password, setPassword] = useState('')
    const[showError, setShowError] = useState(false)
    const history = useHistory()

    const changeEmail = (e) =>{
        setEmail(e.target.value)
    }

    const changePsw = (e) =>{
        setPassword(e.target.value)
    }

    const handleLogin = (e) => {
        e.preventDefault()
        setLoading(true)
        const loginFailure = login(email, password)
        loginFailure && setShowError(true)
    }

    useEffect(() =>{
        isAuth && history.push(`/dash/${id}`)
        setLoading(false)
    },[id, showError])

    if(loading){
        return <Loading />
    } else {
        return(
            <div className='content' id='login'>
                <div className='wrapper'>
                    <Icon image='assets/images/user.svg' kind='login' />
                    <h2>Login</h2>
    
                    <form className='login-form' onSubmit={handleLogin}>
                        <InputField type='email' required={true} value={email} onChange={changeEmail} max={128}>
                            Email
                        </InputField>
                        
                        <InputField type='password' required={true} value={password} onChange={changePsw} max={60} min={8}>
                            Senha
                        </InputField>
                        
                        <ModalBtn>
                            Continuar
                        </ModalBtn>
                    </form>
                    <p>Ainda não tem uma conta? <Link to='/sign' 
                    style={{color: '#4CCC81', textDecoration: 'underline'}}
                    >Cadastre-se</Link> </p>
                </div>
                <div>
                    <Modal onClose={() => setShowError(false)} show={showError} title={'Login Inválido'} comand={'fechar'}>Login ou senha inválidos.</Modal>
                </div>
            </div>
        )
    }

}

export default Login