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
        <Box
            sx={{
                px: 14,
                pt: 6,
                pb: 24
            }}
        >
            <Stack flexDirection="row">
                <Box
                    component="img"
                    src="/images/spark.png"
                    sx={{
                        position: 'relative',
                        left: -20
                    }}
                />
            </Stack>
            <Typography variant="h1">All Deals</Typography>
            <Stack
                flexDirection="row"
                justifyContent="space-between"
                sx={{
                    pt: 3.5,
                    pb: 11
                }}
            >
                <Typography variant="body2" color="text.secondary">217 Deals Available</Typography>
                <Stack
                    flexDirection="row"
                    gap={8}
                >
                    <Stack
                        flexDirection="row"
                        alignItems="center"
                        gap={2}
                    >
                        <Typography variant="body2" color="text.secondary">Filter By:</Typography>
                        <OutlinedInput 
                            placeholder='All Deals'
                            size="small"
                        />
                    </Stack>
                    <Stack
                        flexDirection="row"
                        alignItems="center"
                        gap={2}
                    >
                        <Typography variant="body2" color="text.secondary">Order By:</Typography>
                        <OutlinedInput 
                            placeholder='Most popular first'
                            size="small"
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