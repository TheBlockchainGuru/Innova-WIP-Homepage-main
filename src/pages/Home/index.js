import React from 'react';
import {
    Box, 
    Stack,
    useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Dashboard from './Dashboard';
import HowItWorks from './HowItWorks';
import HotDeals from './HotDeals';
import Categories from './Categories';
import Community from './Community';
import Feedback from './Feedback';
import Faq from './Faq';
import HomePattern from '../../components/patterns/HomePattern';

export default function Home () {
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Box
            sx={{
                pb: 25,
                pt: matchUpMd ? 16 : 4,
                zIndex: 1,
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <Stack
                gap={20}
            >
                <Dashboard />
                <HowItWorks />
                <HotDeals />
                <Categories />
                <Community />
                <Feedback />
                <Faq />
            </Stack>
            <HomePattern />
        </Box>
    );
}