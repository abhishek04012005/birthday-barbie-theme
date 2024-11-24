import React from 'react'
import FrameRotate from '../../../assests/FramRotate.svg'
import BabyCircleImage from '../../../assests/baby/heroBaby-circle.png'
import './FrameRotation.css'


const FrameRotation = () => {
    return (
        <>
            <div className="frame">
                <div className="circle-frame">
                    <div className='circle-frame-image'>

                        <img src={FrameRotate} alt="" />

                    </div>
                    <div className='child-image'> <img src={BabyCircleImage} alt="" /></div>
                </div>
            </div>

        </>
    )
}

export default FrameRotation