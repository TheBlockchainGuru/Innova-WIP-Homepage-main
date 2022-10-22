import React from 'react';
import {
    Box, 
    Stack,
    Typography,
    OutlinedInput
} from '@mui/material';
import DealCard from '../../components/cards/DealCard';

export default function Explorer () {
    return (
        <Box>
            <Typography>All Deals</Typography>
            <Stack
                flexDirection="row"
                justifyContent="space-between"
            >
                <Typography>217 Deals Available</Typography>
                <Stack
                    flexDirection="row"
                >
                    <Stack
                        flexDirection="row"
                        alignItems="center"
                    >
                        <Typography>Filter By:</Typography>
                        <OutlinedInput />
                    </Stack>
                    <Stack
                        flexDirection="row"
                        alignItems="center"
                    >
                        <Typography>Order By:</Typography>
                        <OutlinedInput 
                            
                        />
                    </Stack>
                </Stack>
            </Stack>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    rowGap: 6,
                    columnGap: 8
                }}
            >
            {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18].map((item, key) =>
                <DealCard key={key} {...item} />
            )}
            </Box>
        </Box>
    );
}