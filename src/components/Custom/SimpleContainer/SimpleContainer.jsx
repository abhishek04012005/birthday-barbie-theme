import React from 'react'
import './SimpleContainer.css'

const SimpleContainer = (props) => {
    return (
        <>
        
            <div className='SimpleContainer'>
                <div className="SimpleContainer-inner-box"></div>
                {props.children}
            </div>
        </>
    )
}

export default SimpleContainer