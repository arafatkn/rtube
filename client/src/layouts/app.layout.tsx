import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {AppBarComponent} from "./app-components/AppBar";
import {DrawerComponent} from "./app-components/Drawer";
import {Outlet} from "react-router-dom";
import Copyright from "./app-components/Copyright"

const AppLayout = () => {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

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

export default AppLayout;
