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
                py: 5, 
                background: 'linear-gradient(156.67deg, rgba(104, 97, 148, 0.248) 0.07%, rgba(35, 23, 97, 0.232) 99.07%)',
                boxShadow: '0px 7px 40px rgba(5, 34, 52, 0.06)',
                borderRadius: 3.5,
            }}
        >
            <Stack
                flex={1}
                alignItems="center"
            >
                <Stack
                    flexDirection="row"
                    justifyContent="center"
                    flex="0 0 40%"
                >
                    <Box 
                        component="img"
                        src={img}
                        sx={{
                            maxWidth: '100%',
                            maxHeight: '100%'
                        }}
                    />
                </Stack>
                <Box flex="0 0 25%" sx={{ pt: 4 }}>
                    <Typography variant="subtitle2">{title}</Typography>
                </Box>
                <Box flex="0 0 35%" 
                    sx={{ 
                        pt: 2, 
                        px: 7.5,
                    }}
                >
                    <Typography sx={{ textAlign: 'center' }}>{content}</Typography> 
                </Box>
            </Stack>
        </Box>
    )
}