import React from 'react';
import emailjs from 'emailjs-com';
import { Card, Grid, TextField, Button } from '@material-ui/core';

const ContactForm = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, e.target, process.env.REACT_APP_YOUR_USER_ID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  }


  return (
    <div className="container">
      <Card style={{ boxShadow: "none", maxWidth: 1400, margin: "0 auto", padding: "40px 40px" }}>
        <form onSubmit={sendEmail}>
          <h2 className="section-title">Contact Me</h2>
          <Grid container spacing={3}>
            <Grid xs={12} sm={6} item>
              <TextField label="First Name" placeholder="Enter first name" variant="outlined" fullWidth required name="firstName" />
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField label="Last Name" placeholder="Enter last name" variant="outlined" fullWidth required name="lastName" />
            </Grid>
            <Grid xs={12} item>
              <TextField type="email" label="Email" placeholder="Enter email" variant="outlined" fullWidth required name="email" />
            </Grid>
            <Grid xs={12} item>
              <TextField type="tel" label="Phone" placeholder="Enter phone number" variant="outlined" fullWidth name="phone" />
            </Grid>
            <Grid xs={12} item>
              <TextField multiline rows={4} label="Message" placeholder="Type your message" variant="outlined" fullWidth name="message" />
            </Grid>
            <Grid xs={12} item>
              <Button className="btn-style" type="submit" variant="outlined">Submit</Button>
            </Grid>
          </Grid>
        </form>
      </Card>
    </div>
  )
}

export default ContactForm;