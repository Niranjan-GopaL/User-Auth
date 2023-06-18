import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container, FormControl, FormLabel, Radio, RadioGroup } from "@mui/material";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

// currentTarget is the element to which the event is attached. 
// It will never change. Event.target is the element that triggered the event

export default function Register() {
    const [value, setValue] = useState('teacher');

    const handleChange = (event) => {
      setValue(event.target.value);
    };
  

// The function that is triggered onClick on the SignIn button
    const handleSubmit = (event) => {

    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // Console loggs the whatever is eneter
    console.log({
    email : data.get("email"),
    role : value,
    });

    // axios -------------------------------------------------------------------------------------
    axios.post('/<ENTER_BACK_END_STUFF>', {
        email: data.get("email"),
        role : value,
    })
    .then( (response) => {
        console.log(response);
    })
    .catch( (error) => {
        console.log(error);
    });
    // ------------------------------------------------------------------------------------------
    
};

return (
    <Container component="main" maxWidth="lg">
    <Box sx={{ marginTop: 8,}}>

{/* Basically the entire thing is just two grid item => For image , For Sign-up functionality */}
        <Grid container  sx={{backgroundImage: 'linear-gradient(315deg, #7f5a83 0%, #0d324d 74%)'}}>
        <CssBaseline />

{/* Grid item for image. NOTE: if the screen width is smaller than a threshold , then this item is deleted  */}
        <Grid item xs={false} sm={4} md={7} sx={{
            backgroundImage: "url(https://source.unsplash.com/random?nature)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
                t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
            }} />

{/* Grid item for Rest of the functionalities */}
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{backgroundImage: 'linear-gradient(315deg, #7f5a83 0%, #0d324d 74%)'}} >

            {/* The div with that Encloses  Entire thing*/}
            <Box sx={{ my: 8, mx: 4, display: "flex", flexDirection: "column", alignItems: "center",}}>

            <Typography component="h1" variant="h5" sx={{ color: '#ffffff' }}>
                Welcome !
            </Typography>

{/* -------------------------------------------------------------IMPORTANT PART-------------------------------------------------------------------------------------------- */}
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1  }} >

                <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus InputLabelProps={{
        style: { color: "white" },
      }} />
                {/* <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" /> */}

                {/* Customize the Color palatte by  finding out the class name from dev tools and adding styles in App.css */}
                {/* <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Student" /> */}
                {/* <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Teacher" /> */}
                <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Role as </FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                            value={value}
                            onChange={handleChange}
                        >
                            <FormControlLabel value="teacher" name="teacher" control={<Radio color="secondary" />} label="Teacher" />
                            <FormControlLabel value="student" name="student" control={<Radio color="secondary" />} label="Student" />
                        </RadioGroup>
                </FormControl>

                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2,}} > 
                Send Me Link!
                </Button>
            </Box>
{/* --------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

            </Box>

        </Grid>
        </Grid>


    </Box>
    </Container>
  );
}