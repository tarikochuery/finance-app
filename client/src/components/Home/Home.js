import React from 'react';
import './home.css'
import { InputField, ContinueBtn, Icon } from '../Atoms/atoms';

const Home = () => {
    return(
        <div id='home' style={{backgroundImage: 'linear-gradient(to left, #67E799, #4AD07E)',
                                height: '100%' }}>
            <h1>Home</h1>
            <ContinueBtn route='/login' kind='start'>
                Começar
            </ContinueBtn>
            <Icon image='/assets/images/logo.svg' kind='start'/>
            <InputField type='email' >
                Email
            </InputField>
        </div>
    )
}

export default Home