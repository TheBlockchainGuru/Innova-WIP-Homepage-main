import {
    Box, 
    Button,
    OutlinedInput, 
    Stack,
    Typography
} from '@mui/material';

export default function Offer () {
    return (
        <Box
            sx={{ 
                pt: 20,
                pb: 21
            }}
        >
            <Stack gap={2}>
                <Typography variant="h1" sx={{ textAlign: 'center' }}>Offer $20, Get $20</Typography>
                <Stack>
                    <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                    Balance sharing is caring.<br /> Give your friends $20 to spend and get $20 after they purchase
                    </Typography>
                </Stack>
            </Stack>
            <Stack
                flexDirection="row"
                gap={6}
                sx={{
                    pt: 16.5,
                    px: 17
                }}
            >
                <Box
                    flex={1}
                    sx={{
                        background: 'linear-gradient(116.41deg, rgba(103, 103, 103, 0.35) -56.52%, rgba(45, 37, 58, 0.35) 130.2%)',
                        boxShadow: '0px 1.45455px 36.3636px rgba(69, 42, 124, 0.1)',
                        backdropFilter: 'blur(42.5447px)',
                        borderRadius: 3.5,
                        px: 4,
                        py: 3.5
                    }}
                >
                    <Stack
                        flexDirection="row"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{
                            background: 'rgba(198, 155, 255, 0.22)',
                            boxShadow: '0px 1.45455px 36.3636px rgba(69, 42, 124, 0.1)',
                            backdropFilter: 'blur(42.5447px)',
                            borderRadius: 3.5,
                            px: 3.5,
                            py: 2
                        }}
                    >
                        <Typography variant="body2" sx={{ textTransform: 'uppercase' }}>Your account balance</Typography>
                        <Typography variant="h3">$0.00</Typography>
                    </Stack>
                </Box>
                <Stack
                    flex={1}
                    gap={6}
                    sx={{
                        background: 'linear-gradient(110.83deg, rgba(175, 89, 205, 0.25) 12.82%, rgba(3, 96, 183, 0.25) 120.34%)',
                        boxShadow: '0px 16px 40px rgba(175, 89, 206, 0.33)',
                        borderRadius: 3.5,
                        px: 6.5,
                        py: 7.5
                    }}
                >
                    <Typography variant="h4">Share your referral link</Typography>
                    <Stack gap={1}>
                        <Typography variant="caption">Your unique sharing link</Typography>
                        <Stack flexDirection="row" gap={2}>
                            <OutlinedInput 
                                fullWidth
                                size="small"
                            />
                            <Button
                                size="small"
                                sx={{
                                    background: 'linear-gradient(110.83deg, #AF59CD 12.82%, #0360B7 120.34%)',
                                    borderRadius: 2,
                                    py: 1.5,
                                    px: 4
                                }}
                            >Copy</Button>
                        </Stack>
                    </Stack>
                    <Stack gap={3}>
                        <Typography variant="h5" sx={{ fontWeight: 500 }}>Share on Social Networks</Typography>
                        <Stack flexDirection="row" gap={5}>
                            <Stack flexDirection="row">
                                <Box component="img" src="/images/linkedin.png" />
                            </Stack>
                            <Stack flexDirection="row">
                                <Box component="img" src="/images/twitter.png" />
                            </Stack>
                            <Stack flexDirection="row">
                                <Box component="img" src="/images/instagram.png" />
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    );
}