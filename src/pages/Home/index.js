import React from 'react';
import {
    Box, 
    Stack,
} from '@mui/material';
import Dashboard from './Dashboard';
import HowItWorks from './HowItWorks';
import HotDeals from './HotDeals';
import Categories from './Categories';
import Community from './Community';
import Feedback from './Feedback';
import Faq from './Faq';
import HomePattern from '../../components/patterns/HomePattern';

export default function Home () {
    return (
        <Box
            sx={{
                pb: 25,
                pt: 16,
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