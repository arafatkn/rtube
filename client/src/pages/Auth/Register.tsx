import React from "react";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import {Link} from "react-router-dom";
import axios from "axios";

export default function Register() {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        axios.post("http://localhost:3333/auth/register",{
            name: data.get('name'),
            email: data.get('email'),
            password: data.get('password'),
            password_confirmation: data.getAll('password_confirmation'),
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
    };

    return (
        <>
            <Avatar sx={{m: 1, backgroundColor: 'secondary.main'}}>
                <LockOutlinedIcon/>
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign Up
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    autoComplete="name"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password_confirmation"
                    label="Password"
                    type="password"
                    id="password_confirmation"
                />
                <FormControlLabel
                    control={<Checkbox value="terms" color="primary"/>}
                    label="I agree to terms and conditions"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{mt: 3, mb: 2}}
                >
                    Sign Up
                </Button>
                <Grid container>
                    <Grid item xs>

                    </Grid>
                    <Grid item>
                        <Link to="/auth/login">
                            Have an account? Sign In
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}