import React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Typography, Link } from '@mui/material';
import { WhatsApp, Phone, Home, Email, CalendarMonth, AccessTimeFilled, LocationOn } from '@mui/icons-material';
import './Contact.css';
import PageContainer from '../Custom/PageContainer/PageContainer';
import '../../index.css';

const Contact = () => {



    return (
        <div id='contact-section'>

            <PageContainer title="Contact Us">
                <Grid container justifyContent="space-around">
                    <Grid item xs={10} md={4}>
                        <div className="contact-grid-header">
                            <h1>Contact</h1>
                        </div>

                        <div className="contact-item">
                            <Typography variant="body1">
                                <h4 style={{ display: 'flex' }}><CalendarMonth />&nbsp;<span>30th of December 2024</span></h4>
                            </Typography>
                            <Typography variant="body1">
                                <h4 style={{ display: 'flex' }}><AccessTimeFilled />&nbsp;<span>7:00 PM (IST)</span></h4>
                            </Typography>
                            <Typography variant="body1">
                                <h4 style={{ display: 'flex' }}><Phone />&nbsp;<span>+91-9264248504</span></h4>
                            </Typography>
                            <Typography variant="body1">
                                <h4 style={{ display: 'flex' }}><Home />&nbsp;<span style={{ textAlign: 'start' }}>Block-B, 701, Ratan Orbit, Indra Nagar Road, Kalayanpur, Kanpur, Uttar Pradesh-208026</span></h4>
                            </Typography>
                            <Typography variant="body1">
                                <h4 style={{ display: 'flex' }}><Email />
                                    &nbsp;<Link href="mailto:theabhishekchoudhary01@gmail.com" underline="none">
                                        <span> theabhishekchoudhary0401</span>
                                    </Link>
                                </h4>
                            </Typography>
                            <Typography variant="body1">
                                <h4 style={{ display: 'flex' }}><WhatsApp />&nbsp;<span>+91-9263767441</span></h4>
                            </Typography>
                        </div>

                    </Grid>
                    <Grid item xs={10} md={4} className="grid-header">
                        <div className="contact-map-section">
                            <div className="contact-grid-header">
                                <h1>Map</h1>
                            </div>


                            <iframe title="This is a google map"
                                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1183052.53923616!2d81.79319238740698!3d25.90403698651244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s%20Block-B%2C%20701%2C%20Ratan%20Orbit%2C%20Indra%20Nagar%20Road%2C%20Kalayanpur%2C%20Kanpur%2C%20Uttar%20Pradesh-208026!5e0!3m2!1sen!2sin!4v1730918343517!5m2!1sen!2sin"

                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />

                            <Button
                                type="button"
                                onClick={() =>
                                    window.open(
                                        "https://www.google.com/maps/dir//Ratan+Orbit+Apartment,+Patrakarpuram+-+Indira+Nagar+Rd,+Mukherjee+Vihar,+Kalyanpur,+Kanpur,+Uttar+Pradesh+208026/@26.5097336,80.2280102,13z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x399c37789a56ec91:0xf26500be7c5d3e4e!2m2!1d80.2692097!2d26.5096627!3e2?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D",
                                        "_blank"
                                    )
                                }
                                variant="contained"
                                sx={{ backgroundColor: '#EA81C2', color: 'white', mt: 2 }}
                                fullWidth   
                            >
                                <LocationOn />  Get Directions
                            </Button>


                        </div>
                    </Grid>
                </Grid>


            </PageContainer>
        </div>
    );
};

export default Contact;
