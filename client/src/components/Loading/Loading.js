import React from 'react'
import './loading.scss'

function Loading() {
    return (
        <div className='pencil-body'>
            <div className="pencil">
                <div className="pencil__ball-point"></div>
                <div className="pencil__cap"></div>
                <div className="pencil__cap-base"></div>
                <div className="pencil__middle"></div>
                <div className="pencil__eraser"></div>
            </div>
            <div className="line"></div>
            <h2 className='loading-screen'>Page Loading... Please Wait</h2>
        </div>
    )
}

export default Loading
