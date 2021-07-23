import React from 'react'
import './loading.scss'

function Loading() {
    return (
        <div className='pencil-body'>
            <div class="pencil">
                <div class="pencil__ball-point"></div>
                <div class="pencil__cap"></div>
                <div class="pencil__cap-base"></div>
                <div class="pencil__middle"></div>
                <div class="pencil__eraser"></div>
            </div>
            <div class="line"></div>
            <h2 className='loading-screen'>Page Loading... Please Wait</h2>
        </div>
    )
}

export default Loading
