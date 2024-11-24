import React from 'react'

import './PageContainer.css'

import upperImage from '../../../assests/page-container-upper-image.svg'
import bottomImage from '../../../assests/page-container-bottom-image.svg'
import SimpleContainer from '../SimpleContainer/SimpleContainer'

const PageContainer = (props) => {
    return (
        <>

            <div className="title">
                <div className="heading">
                    {/* <span><img src={Tree} alt="" /></span> */}
                    <h1>{props.title}</h1>
                    {/* <span><img src={Tree} alt="" /></span> */}
                </div>
            </div>
            <SimpleContainer>
                <div className="page-container-upper-image">
                    <img src={upperImage} alt="" />
                </div>
                <div className="page-container-middle-section">



                    {props.children}


                </div>

                <div className="page-container-bottom-image">
                    <img src={bottomImage} alt="" />
                </div>
            </SimpleContainer>
        </>
    )
}

export default PageContainer