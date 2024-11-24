import React from 'react'
import './StoryContainer.css'
import TopStoryImage from '../../../assests/story-upper-image.svg'
import BottomStoryImage from '../../../assests/story-bottom-image.svg'

const StoryContainer = (props) => {
    return (
        <>

            <div className="card">
                <div className="card-body" style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                    <div className="top-image">
                        <img src={TopStoryImage} alt="" />
                    </div>



                    <div className="photo-frame">
                        <div className='photo-frame-title'><h1>{props.cardTitle}</h1></div>
                        <div className="inner-photo-frame">
                            <img src={props.babyImage} alt="" />
                        </div>
                        <div className="photo-paragraph"><p>{props.cardContent}</p></div>
                    </div>


                    <div className="bottom-image">
                      
                        <img id='testImage' src={props.framePhotoUrl} alt="" />

                        <img className='image2' src={BottomStoryImage} alt="" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default StoryContainer