import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';

import Header from './Header';
import Footer from './Footer';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
                transition: theme.transitions.create('margin', {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                }),
        }),
    }),
);
  
export default function Layout () {  
    const theme = useTheme();
 
    return (
        <Box
            sx={{
                minHeight: '100vh',
                bgcolor: theme.palette.background.default
            }}
        >
            <Box>
                <CssBaseline />
                <Header />
                <Main>
                    <Outlet />
                </Main>
                <Footer />
            </Box>
        </Box>
    );
}