import {
    Box,
    Chip,
    Stack,
    Typography,
    useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function DealCard () {
    const theme = useTheme();
    const matchUpSm = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <Box
            sx={{
                background: 'linear-gradient(116.41deg, rgba(103, 103, 103, 0.5) -56.52%, rgba(45, 37, 58, 0.5) 130.2%)',
                boxShadow: '0px 1.45455px 36.3636px rgba(69, 42, 124, 0.1)',
                backdropFilter: 'blur(42.5447px)',
                borderRadius: 3.5,
                border: `4px solid #594F6D`,
                pt: matchUpSm ? 3.5 : 2,
                pb: matchUpSm ? 3 : 2,
                overflow: 'hidden'
            }}
        >
            <Stack
                gap={5}
            >
                <Stack
                    flexDirection="row"
                    alignItems="flex-start"
                    gap={matchUpSm ? 2.5 : 1.5}
                    sx={{
                        px: matchUpSm ? 3.5 : 2
                    }}
                >
                    <Stack
                        flexDirection="row"
                        sx={{
                            background: '#594F6D',
                            // opacity: 0.25,
                            boxShadow: '-2px 3px 10px rgba(0, 0, 0, 0.09)',
                            borderRadius: 3,
                            p: 0.375
                        }}
                    >
                        <Box 
                            component="img"
                            src="/images/aws.png"
                        />
                    </Stack>
                    <Stack>
                        <Typography variant="h5">AWS Activate</Typography>
                        <Typography variant="caption" color="text.secondary">Amazon's cloud services platform</Typography>
                    </Stack>
                </Stack>
                <Box sx={{
                    px: matchUpSm ? 3.5 : 2
                }}>
                    <Typography 
                        variant="h6" 
                        sx={{ 
                            '& span': {
                                color: '#C69BFF'
                            },
                            lineHeight: '30px' }}
                    >
                        <span>6 Months Free </span> plus <br /> 1,000 credits for startups
                    </Typography>
                </Box>
                <Box>
                    <Box
                        sx={{
                            background: '#594F6D',
                            transform: 'rotate(-5deg) scale(1.05, 1)',
                            py: 2,
                        }}
                    >
                        <Typography
                            sx={{
                                color: 'rgba(219, 201, 255, 0.87)',
                                textTransform: 'uppercase',
                                textAlign: 'center',
                                lineHeight: 1,
                                letterSpacing: 1.44,
                                fontWeight: 800,
                                fontSize: '20px !important'
                            }}
                        >Save Up To $5000</Typography>
                    </Box>
                </Box>
            </Stack>
            <Stack
                flexDirection="row"
                justifyContent="flex-end"
                sx={{
                    px: matchUpSm ? 3 : 2,
                    pt: 2
                }}
            >
                <Chip 
                    label="Agency"
                    variant="outlined"
                    clickable
                    sx={{
                        bgcolor: '#fff',
                        color: '#000',
                        fontWeight: 700,
                        '&:hover': {
                            color: '#fff'
                        }
                    }}
                />
            </Stack>
        </Box>
    )
}