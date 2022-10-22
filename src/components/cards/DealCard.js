import {
    Box,
    Chip,
    Stack,
    Typography,
} from '@mui/material';

export default function DealCard () {
    return (
        <Box
            sx={{
                background: 'linear-gradient(116.41deg, rgba(103, 103, 103, 0.5) -56.52%, rgba(45, 37, 58, 0.5) 130.2%)',
                boxShadow: '0px 1.45455px 36.3636px rgba(69, 42, 124, 0.1)',
                backdropFilter: 'blur(42.5447px)',
                borderRadius: 3.5,
                pt: 3.5,
                pb: 3
            }}
        >
            <Stack
                gap={5}
            >
                <Stack
                    flexDirection="row"
                    gap={2.5}
                    sx={{
                        px: 3.5
                    }}
                >
                    <Stack
                        flexDirection="row"
                    >
                        <Box 
                            component="img"
                            src="/images/aws.png"
                        />
                    </Stack>
                    <Stack>
                        <Typography>AWS Activate</Typography>
                        <Typography>Amazon's cloud services platform</Typography>
                    </Stack>
                </Stack>
                <Box sx={{
                    px: 3.5
                }}>
                    <Typography>
                        6 Months Free plus 1,000 credits for startups
                    </Typography>
                </Box>
                <Box>
                    <Box
                        sx={{
                            background: '#594F6D',
                            transform: 'rotate(-5deg)'
                        }}
                    >
                        <Typography>Save Up To $5000</Typography>
                    </Box>
                </Box>
                <Stack
                    flexDirection="row"
                    justifyContent="flex-end"
                    sx={{
                        px: 3
                    }}
                >
                    <Chip 
                        label="Agency"
                        variant="outlined"
                    />
                </Stack>
            </Stack>
        </Box>
    )
}