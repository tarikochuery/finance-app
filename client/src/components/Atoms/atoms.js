import React, {useEffect, useState} from 'react'
import './style.css'
import { Link, useHistory } from 'react-router-dom'

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

export const InputField = ({type, children, max, required, onChange, value}) => {
    if(max && required){
        return(
            <div className='input'>
                <label>{children}</label>
                <input type={type} value={value} required onChange={onChange} maxLength={max}/>
            </div>
        )

    } else if(max){
        return(
            <div className='input'>
                <label>{children}</label>
                <input type={type} value={value} onChange={onChange} maxLength={max}/>
            </div>
        )
    } else if(required) {
        return(
            <div className='input'>
                <label>{children}</label>
                <input type={type} value={value} onChange={onChange} required/>
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

export const BackButton = () => {
    const history = useHistory()

    return(
        <button onClick={() => history.goBack()} className='back-btn'>
            <img src='/assets/images/back-arrow.svg' alt=''/>
        </button>
    )
}