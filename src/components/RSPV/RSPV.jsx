import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Grid from '@mui/material/Grid';
import Gift3 from '../../assests/gift3.svg'
import FlowerImage from '../../assests/flower.svg'
import DoorImage from '../../assests/door.svg'
import ButterflyImage from '../../assests/Butterfly.svg'
import PageContainer from '../Custom/PageContainer/PageContainer'
import { TextField, Button } from '@mui/material';
import { Email } from '@mui/icons-material';

import './RSPV.css'

const RSPV = () => {

    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        number: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                'service_lf5k2vv',
                'template_88tdiwr',
                {
                    from_name: form.name,
                    to_name: "Abhishek Choudhary",
                    // from_email: form.email,
                    to_email: "abhishekchoudhary5414@gmail.com",
                    number: form.number,
                    number_of_guest: form.guest,
                    meal_prefances: form.meal,
                    // message: form.message,
                },
                '5XspuYeCrHojAUOpV'
            )
            .then(
                () => {
                    setLoading(false);
                    alert("Thank you. I will get back to you as soon as possible.");

                    setForm({
                        name: "",
                        // email: "",
                        number: "",
                        // message: "",
                        guest: "",
                        meal: "",
                    });
                },
                (error) => {
                    setLoading(false);
                    console.error(error);

                    alert("Ahh, something went wrong. Please try again.");
                }
            );
    };

    return (
        <>
            <div id='rspv-section'>
                <PageContainer title='RSPV'>
                    <Grid container justifyContent="space-around" alignItems="center"  >
                        <Grid item xs={10} md={3} >
                            <div className="rspv-image-section">
                                <div className='rspv-image-section-inner'>
                                    <img src={DoorImage} alt="" />
                                </div>
                                <div className='rspv-image-section-inner'>
                                    <img src={FlowerImage} alt="" />
                                </div>
                            </div>
                        </Grid>


                        <Grid item xs={10} md={4} >
                            <div className="contact-grid-header">
                                <h1>Are You Attending?</h1>
                            </div>
                            <div className="contact_gap">

                                <form ref={formRef}
                                    onSubmit={handleSubmit}>

                                    <TextField label="Name" className="custom-label" required name='name' onChange={handleChange} value={form.name} variant="outlined" margin="normal" fullWidth />
                                    <TextField label="Contact Number" className="custom-label" required name='number' value={form.number} onChange={handleChange} variant="outlined" margin="normal" fullWidth />

                                    <div className='dropdown-menu'>
                                        <select id="dropdown" required className='dropdown-item' name='guest' value={form.guest} onChange={handleChange}>
                                            <option className='option-custom' value="">Number Of Guests</option>
                                            <option className='option-custom' value="01">01</option>
                                            <option className='option-custom' value="02">02</option>
                                            <option className='option-custom' value="03">03</option>
                                            <option className='option-custom' value="04">04</option>
                                            <option className='option-custom' value="05">05</option>
                                            <option className='option-custom' value="06">06</option>
                                            <option className='option-custom' value="07">07</option>
                                            <option className='option-custom' value="08">08</option>
                                        </select>
                                    </div>

                                    {/* <FormControl className='custom-label' variant="outlined" margin="normal" fullWidth>
                                        <InputLabel className="custom-label" name='guest' id="guest-label">Number Of Guests</InputLabel>
                                        <Select
                                            labelId="guest-label"
                                            id="dropdown"
                                            name="guest"
                                            value={form.guest}
                                            onChange={handleChange}
                                            required
                                        >
                                            <MenuItem value="">
                                                <em>Number Of Guests</em>
                                            </MenuItem>
                                            {[...Array(8)].map((_, index) => (
                                                <MenuItem key={index + 1} value={String(index + 1).padStart(2, '0')}>
                                                    {String(index + 1).padStart(2, '0')}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>


                                    <FormControl className="custom-label" variant="outlined" margin="normal" fullWidth>
                                        <InputLabel className="custom-label" name='guest' id="meal-label">
                                            Meal Preferences
                                        </InputLabel>
                                        <Select
                                            labelId="meal-label"
                                            id="dropdown"
                                            name="meal"
                                            value={form.meal}
                                            onChange={handleChange}
                                            required
                                        >
                                            <MenuItem value="">
                                                <em>Meal Preferences</em>
                                            </MenuItem>
                                            <MenuItem value="Veg">Veg</MenuItem>
                                            <MenuItem value="non_veg">Non-Veg</MenuItem>
                                        </Select>
                                    </FormControl> */}


                                    <div className='dropdown-menu'>
                                        <select id="dropdown" required className='dropdown-item' name='meal' value={form.meal} onChange={handleChange}>
                                            <option value=""><em>Meal Prefrences</em></option>
                                            <option value="Veg">Veg</option>
                                            <option value="non_veg">Non-Veg</option>
                                        </select>
                                    </div>



                                    <Button type='submit' variant="contained" sx={{ backgroundColor: '#EA81C2', color: 'white', mt: 2 }} fullWidth>
                                        <Email /> &nbsp; {loading ? "Sending..." : "Send"}
                                    </Button>
                                </form>
                            </div>
                        </Grid>
                        <Grid item xs={10} md={3} >

                            <div className="rspv-image-section">
                                <div className='rspv-image-section-inner'>
                                    <img src={ButterflyImage} alt="" />
                                </div>
                                <div className='rspv-image-section-inner'>
                                    <img src={Gift3} alt="" />
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </PageContainer>
            </div >
        </>
    )
}

export default RSPV