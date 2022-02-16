import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {Outlet, useNavigate} from "react-router-dom";
import {AppBarComponent} from "./user-components/AppBar";
import {DrawerComponent} from "./user-components/Drawer";
import Toolbar from "@mui/material/Toolbar";

export default function UserLayout() {

    const navigate = useNavigate();

    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    if (localStorage.getItem("auth_token") == null) {
        navigate("/auth/login", {replace: true});
        return <></>;
    }

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>

            <AppBarComponent open={open} toggleDrawer={toggleDrawer}/>

            <DrawerComponent open={open} toggleDrawer={toggleDrawer}/>

            <Box
                component="main"
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                }}
            >
                <Toolbar/>

                <Container maxWidth="lg" sx={{mt: 4, mb: 4}}>

                    <Outlet />

                </Container>
            </Box>
        </Box>
    );
}