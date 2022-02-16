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
import {Link, useNavigate} from "react-router-dom";
import {useSnackbar} from "notistack";
import api from "../../core/api";

export default function Login() {

    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        api.post("/auth/login",{
            email: data.get('email'),
            password: data.get('password'),
        }).then((response) => {
            enqueueSnackbar("Logged in successfully.");
            localStorage.setItem("auth_token", response.data.token.token);
            navigate("/user");
        }).catch((errors) => {
            if (errors.response?.data?.message) {
                enqueueSnackbar(errors.response.data.message);
            } else if(errors.response?.data?.errors) {
                errors.response.data.errors.map((error: { message: any; }) => enqueueSnackbar(error.message));
            }
        })

    };

    return (
        <>
            <Avatar sx={{m: 1, backgroundColor: 'secondary.main'}}>
                <LockOutlinedIcon/>
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
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
                    autoComplete="current-password"
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary"/>}
                    label="Remember me"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{mt: 3, mb: 2}}
                >
                    Sign In
                </Button>
                <Grid container>
                    <Grid item xs>
                        <Link to="#">
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link to="/auth/register">
                            Don't have an account? Sign Up
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}