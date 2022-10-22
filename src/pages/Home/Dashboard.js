import React from 'react';
import {
    Box, Stack, Typography
} from '@mui/material';

export default function Dashboard () {
    return (
        <Stack
            flexDirection="row"
        >
            <Stack
                flex={1}
            >
                <Typography>
                    Build in web3 with lowest cost. 
                </Typography>
                <Typography
                    sx={{
                        textTransform: 'capitalize'
                    }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Integer nec odio. 
                    Praesent libero. 
                    Sed cursus ante dapibus diam.
                </Typography>
            </Stack>
        </Stack>
    );
}