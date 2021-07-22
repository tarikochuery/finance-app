import React from 'react';
import './home.css'
import { ContinueBtn, Icon } from '../Atoms/atoms';

const Home = () => {
    return(
        <div id='home' className='content'>

            <Icon kind='start' image='assets/images/logo.svg' />

            <hgroup>
                <h1>Safeflow</h1>
                <h2>Controle suas finanças e cumpra suas metas</h2>
            </hgroup>

            <div>
                <ContinueBtn route='/login' kind='start'>
                    Começar
                </ContinueBtn>
            </div>
            

        </div>
    )
}

export default Home