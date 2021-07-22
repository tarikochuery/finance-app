import React from 'react'
import { Link } from 'react-router-dom'
import { BackButton, Icon, IconBtn } from '../Atoms/atoms'

import './dashboard.css'

const Dashboard = () => {
    
    return(
    <div id='dash' className='content'>
        <header>
            <BackButton />
            <p>Olá, usuário!</p>
        </header>
        <div className='wrapper'>
            <Icon kind='flag' image='/assets/images/flag.svg'/>
            <h2>Selecione seu Objetivo</h2>
            <ul type='none'>
                <li>
                    <Link to='#' className='list-item'>
                    <IconBtn kind='expenses' image='/assets/images/expenses.svg' />
                    <p>Controle de gastos</p>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
    )
}

export default Dashboard