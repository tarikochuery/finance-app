import React, {useEffect, useState, useContext} from 'react'
import './style.css'
import { Link, useHistory } from 'react-router-dom'
import { Context } from '../../providers/AuthProvider'

export const Icon = ({image, kind}) => {
    return(
        <div className={`icon ${kind}`}>
            <img src={image} alt=''/>
        </div>
    )
}

export const IconBtn = ({image, kind}) => {
    return(
        <div className={`icon-btn ${kind}`}>
            <img src={image} alt='' />
        </div>
    )
}

export const ContinueBtn = ({children, kind, route}) => {
    const [src, setSrc] = useState('assets/images/green-arrow.svg')

    useEffect(() => {
        if (kind === 'next') {
            setSrc('assets/images/white-arrow.svg')
        }
    },[src, kind])


    return(
        <div style={{maxWidth:'296px'}}>
            <Link to={route} style={{textDecoration: 'none'}}>
                <div className={`continue-btn ${kind}`}>
                    <span>{children}</span> <img src={src} alt=''/> 
                </div>
            </Link>
        </div>
    )
}

export const NextBtn = ({children}) => {
    return(                    
        <button type='submit' className={`continue-btn next`}>
            <span>{children}</span> <img src='assets/images/white-arrow.svg' alt=''/> 
        </button>        
    )
}

export const InputField = ({type, children, max, required, onChange, value, min}) => {
    if(required){
        return(
            <div className='input'>
                <label>{children}</label>
                <input type={type} value={value} required onChange={onChange} maxLength={max} minLength={min}/>
            </div>
        )

    } else {
        return(
            <div className='input'>
                <label>{children}</label>
                <input type={type} value={value} onChange={onChange}/>
            </div>
        )
    }

}

export const HeaderBtn = ({type}) => {
    const {handleSuccessfulLogout} = useContext(Context)
    const history = useHistory()
    
    const back = () => {history.goBack()}

    const logout = () => {
        handleSuccessfulLogout()
        history.push('/login')
    }

    const btnConfig =[
        {type: 'goBack', action: back, img: '/assets/images/back-arrow.svg'},
        {type: 'logout', action: logout, img: '/assets/images/logout.svg'}
    ] 
    
    const [btnSelected] = btnConfig.filter((btn) => btn.type === type )
    

    return(
        <button onClick={btnSelected.action} className={`header-btn ${type}`}>
            <img src={btnSelected.img} alt=''/>
        </button>
    )
}