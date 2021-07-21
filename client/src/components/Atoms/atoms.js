import React, {useEffect, useState} from 'react'
import './style.css'
import { Link } from 'react-router-dom'

export const Icon = ({image, kind}) => {
    return(
        <div className={`icon ${kind}`}>
            <img src={image} />
        </div>
    )
}

export const ContinueBtn = ({children, kind, route}) => {
    const [src, setSrc] = useState('assets/images/green-arrow.svg')

    useEffect(() => {
        if (kind === 'next') {
            setSrc('assets/images/white-arrow.svg')
        }
    },[src])


    return(
        <div style={{width:'296px'}}>
            <Link to={route} style={{textDecoration: 'none'}}>
                <div className={`continue-btn ${kind}`}>
                    <span>{children}</span> <img src={src} /> 
                </div>
            </Link>
        </div>
    )
}

export const NextBtn = ({children}) => {
    return(                    
        <button type='submit' className={`continue-btn next`}>
            <span>{children}</span> <img src='assets/images/white-arrow.svg' /> 
        </button>        
    )
}

export const InputField = ({type, children, max}) => {
    const [input, setInput] = useState('')
    const handleChange = (event) =>{
            setInput(event.target.value)
    }

    if(max){
        return(
            <div className='input'>
                <label>{children}</label>
                <input type={type} value={input} onChange={handleChange} maxLength={max}/>
            </div>
        )

    } else {
        return(
            <div className='input'>
                <label>{children}</label>
                <input type={type} value={input} onChange={handleChange}/>
            </div>
        )
    }

}