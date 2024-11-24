import React from 'react'
import './Hero.css'
import SimpleContainer from '../Custom/SimpleContainer/SimpleContainer'
import HeroBottomImage from '../../assests/hero_bottom_1.svg'
import { Grid2 } from '@mui/material'
import FrameRotation from '../Custom/FrameRotation/FrameRotation'
import upperImage from '../../assests/page-container-upper-image.svg'
import Countdown from '../Custom/Countdown/Countdown'

const Hero = () => {

    const extendedDate = new Date(new Date().setMonth(new Date().getMonth() + 1));
    const formattedDate = extendedDate.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    
    console.log(formattedDate);
    


    return (
        <>
            <SimpleContainer>

                <div className="hero" id='home-section'>
                    <div className="hero-top">
                        <img src={upperImage} alt="" />
                    </div>
                    <div className="hero-middle">

                        <Grid2 container justifyContent="space-between">
                            <Grid2 size={{ xs: 12, md: 6 }}>
                                <div className="hero-left-container">
                                    <div className="hero-birthday-text">
                                        <p className='birthday-title'>PIHU</p>
                                        <p className='birthday-age'>is turning eight
                                        </p>
                                        <p className='birthday-date'>on {formattedDate}
                                        </p>
                                    </div>
                                    <div className='countdown-btn'>
                                        <Countdown />
                                    </div>
                                </div>
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 5 }}>
                                <FrameRotation />
                            </Grid2>
                        </Grid2>

                    </div>
                    <div className="hero-bottom">
                        <img src={HeroBottomImage} alt="" />
                    </div>
                </div>
            </SimpleContainer>
        </>

    )
}

export default Hero