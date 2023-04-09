import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
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
    // Console loggs the whatever is eneter
    console.log({
    email: data.get("email"),
    password: data.get("password"),
    });

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
                Welcome !
            </Typography>

{/* -------------------------------------------------------------IMPORTANT PART-------------------------------------------------------------------------------------------- */}
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }} >

                <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus />
                <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />

                {/* Customize the Color palatte by finding out the class name from dev tools and adding styles in App.css */}
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2,}} > 
                Sign Up
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