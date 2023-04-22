// To do:- 1) Send entered email and password, Remember me also  to backend to verify        <---- Done
//         2) On Create user -> route to /Register                                           <---- DONE
//         3) Read MUI Docs and search for other cool stuff to implement                     <---- DONE        
//         4) 


import axios from 'axios';
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";


export default function Login() {
// The function that is triggered onClick on the SignIn button
const handleSubmit = (event) => {

    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // Console loggs the whatever is returned from input form --------------------------------------------------
    console.log({
    email: data.get("email"),
    password: data.get("password"),
    });

    // axios -------------------------------------------------------------------------------------
    axios.post('/<ENTER_BACK_END_STUFF>', {
        email: data.get("email"),
        password : data.get("password"),
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
        <Grid container>
        <CssBaseline />

{/* Grid item for image. NOTE: if the screen width is smaller than a threshold , then this item is deleted  */}
        <Grid item xs={false} sm={4} md={7} sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
                t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
            }} />

{/* Grid item for Rest of the functionalities */}
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square >

            {/* The div with that Encloses  Entire thing*/}
            <Box sx={{ my: 8, mx: 4, display: "flex", flexDirection: "column", alignItems: "center",}}>

            <Typography component="h1" variant="h5">
                Welcome Back
            </Typography>

{/* -------------------------------------------------------------IMPORTANT PART-------------------------------------------------------------------------------------------- */}
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }} >
                

                <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus />
                <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />

                {/* ----------Remember Me-------- */}
                <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
                
                {/* Customize the Color palatte by finding out the class name from dev tools and adding styles in App.css */}
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2,}} > 
                    Sign In
                </Button>
{/* --------------------------------------------------------------------------------------------------------------------------------------------------------------- */}


                <Grid container>
                {/* First item on grid ----> FORGOT PASSWORD */}
                <Grid item xs>
                    {/* Insert link for forgot password */}
                    <Link href="/Reset"  variant="body2" color="inherit" >
                    Forgot password?
                    </Link>
                </Grid>


                {/* Second item on grid ----> SIGN - UP */}
                <Grid item>
                    <Link href="/Register" variant="body2" color="inherit" >
                    {/* Insert link to the Sign-Up */}
                    {"Don't have an account? Sign Up"}
                    </Link>
                </Grid>
                </Grid>

            </Box>


            </Box>
        </Grid>
        </Grid>


    </Box>
    </Container>
  );
}