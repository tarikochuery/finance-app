import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../Hooks/useAuth'
import { HeaderBtn, Icon, IconBtn } from '../Atoms/atoms'
import './dashboard.css'

const Dashboard = () => {
   const {username} = useAuth

    return(
    <div id='dash' className='content'>
        <header>
            <HeaderBtn type={'logout'}/>
            <p>Olá, {username}!</p>
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