import React from 'react'
import { ModalBtn } from '../Atoms/atoms'
import './modal.css'

export default function Modal(props) {
    if (!props.show){
        return null
    }

    return (
        <div className='modal'>
            <div className='modal-content'>
                <header className='modal-header'>
                    <h4 className='success'>{props.title}</h4>
                </header>
                <main className='modal-body'>
                    {props.children}
                </main>
                <footer className='modal-footer'>
                    <ModalBtn to={props.to}
                              type={props.type} 
                              onClick={props.onClose} 
                              className='modal-btn'>
                        {props.comand}
                    </ModalBtn>
                </footer>
            </div>
        </div>
    )
}
