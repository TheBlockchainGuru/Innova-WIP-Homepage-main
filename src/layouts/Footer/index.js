import {
    Box, 
    Stack,
    Typography,

} from '@mui/material';

export default function Footer () {
    return (
        <Stack 
            alignItems="center"
            sx={{ py: 7 }}
        >
            <Stack
                alignItems="center"
                gap={5}
                sx={{
                    maxWidth: 560
                }}
            >
                <Box component="img" src="/images/logo-white.png" />
                <Typography sx={{
                    textTransform: 'uppercase',
                    color: '#9DAFBD',
                    fontFamily: 'Roboto'
                }}>About Us</Typography>
                <Typography variant="h4">H3M</Typography>
                <Typography sx={{ textAlign: 'center', px: 4 }}>We are an immersive media company providing services and tools to companies that want a 360 virtual presence in the Metaverse.</Typography>
                <Stack alignItems="center">
                    <Typography sx={{ color: '#9DAFBD', fontWeight: 300, fontFamily: 'Roboto' }}>Copyright © H3M Inc</Typography>
                    <Typography sx={{ color: '#9DAFBD', fontWeight: 300, fontFamily: 'Roboto' }}>All rights reserved</Typography>
                </Stack>
            </Stack>
        </Stack>
    );
}