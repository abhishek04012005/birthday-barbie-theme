import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import './Story.css'
import Cards from '../Custom/Item/Item';
import StoryContainer from '../Custom/StoryContainer/StoryContainer';

const Story = () => {
    return (
        <>

            <div id='story-section'></div>
            <div className="story">
                <div className="title">
                    <div className="heading"><h1>Story</h1></div>
                </div>

                <div>

                    <div className="story-container">
                        <div className="story-container-inner">
                            <Container
                                maxWidth={false}
                                style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}

                                sx={{
                                    width: 'auto',
                                    padding: 0,
                                    bgcolor: '#FFD9E3',

                                }}
                            >



                                <Grid container justifyContent="space-around" alignItems="center"  >
                                    {Cards.map(card => (
                                        <Grid item xs={10} sm={11} md={5} key={card.id}>
                                            <StoryContainer
                                                cardTitle={card.cardTitle}
                                                cardContent={card.cardContent}
                                                babyImage={card.babyImage}
                                                framePhotoUrl={card.framePhotoUrl}
                                            />
                                        </Grid>
                                    ))}
                                </Grid>

                            </Container>

                        </div>
                    </div>

                </div>

            </div >


            {/* <iframe title="This is a google map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28403.23064673414!2d81.93273968164459!3d27.143581585920284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999ee0495e5b7a9%3A0xc927d6261ff536ca!2sGonda%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1730832391603!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            /> */}



        </>
    )
}

export default Story