import React from 'react';
import {
    Box, 
    Stack,
    Typography
} from '@mui/material';
import Dashboard from './Dashboard';
import HowItWorks from './HowItWorks';
import HotDeals from './HotDeals';
import Categories from './Categories';

export default function Home () {
    return (
        <Stack
            gap={20}
            sx={{
                px: 14
            }}
        >
            <Dashboard />
            <HowItWorks />
            <HotDeals />
            <Categories />
        </Stack>
    );
}