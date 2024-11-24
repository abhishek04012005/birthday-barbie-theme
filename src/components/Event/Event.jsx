

import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { TextField, Button} from '@mui/material';
import { WhatsApp } from '@mui/icons-material';
import PageContainer from '../Custom/PageContainer/PageContainer'
import CakeImage from '../../assests/cake.svg'
import Gift1 from '../../assests/gift1.svg'
import Gift2 from '../../assests/gift2.svg'
import UnicornImage from '../../assests/unicorn.svg'
import './Event.css'

const Event = () => {

    const [formData, setFormData] = useState({

        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, subject, message } = formData;
        const whatsappURL = `https://api.whatsapp.com/send?phone=919264248504&text=${encodeURIComponent(`Name: ${name}\n\n Subject: ${subject}\n\n Message: ${message}`)}`;
        window.open(whatsappURL, '_blank');
    };

    return (
        <>
            <div id='event-section'>
                <PageContainer title='Wish' >
                    <Grid container justifyContent="space-around" alignItems="center"   >
                        <Grid item xs={10} md={3} >
                            <div className="event-image-section">
                                <div className='event-image-section-inner'>
                                    <img src={UnicornImage} alt="" />
                                </div>
                                <div className='event-image-section-inner'>
                                    <img src={Gift2} alt="" />
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={10} md={4} >
                            <div className="contact-grid-header">
                                <h1 >Send Your Wish</h1>


                                <div className="contact_gap">
                                    <form onSubmit={handleSubmit}>
                                        <TextField label="Name" className="custom-label" required name="name" value={formData.name} onChange={handleChange} variant="outlined" margin="normal" fullWidth />
                                        <TextField label="Subject" className="custom-label" required name="subject" value={formData.subject} onChange={handleChange} variant="outlined" margin="normal" fullWidth />
                                        <TextField label="Message" className="custom-label" required name="message" value={formData.message} onChange={handleChange}
                                            variant="outlined" margin="normal" fullWidth multiline rows={4} />
                                        <Button type='submit' variant="contained" sx={{ backgroundColor: '#EA81C2', color: 'white', mt: 2 }} fullWidth>
                                            <WhatsApp /> &nbsp; Send
                                        </Button>
                                    </form>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={10} md={3} >
                            <div className="event-image-section">
                                <div className='event-image-section-inner'>
                                    <img src={Gift1} alt="" />
                                </div>
                                <div className='event-image-section-inner'>
                                    <img src={CakeImage} alt="" />
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </PageContainer>
            </div>
        </>
    )
}

export default Event