import React from 'react';
import {
    Box, 
    Stack,
    Typography
} from '@mui/material';

export default function WorkCard ({img, title, content}) {
    return (
        <Box
            sx={{
                flex: 1,
                background: 'linear-gradient(156.67deg, rgba(104, 97, 148, 0.248) 0.07%, rgba(35, 23, 97, 0.232) 99.07%)',
                boxShadow: '0px 7px 40px rgba(5, 34, 52, 0.06)',
                borderRadius: 3.5,
                pt: 5,
                px: 7.5
            }}
        >
            <Stack
                alignItems="center"
            >
                <Stack
                    flexDirection="row"
                    justifyContent="center"
                >
                    <Box 
                        component="img"
                        src={img}
                    />
                </Stack>
                <Typography variant="body2" sx={{ fontWeight: 700 }}>{title}</Typography>
                <Typography sx={{ textAlign: 'center' }}>{content}</Typography>
            </Stack>
        </Box>
    )
}