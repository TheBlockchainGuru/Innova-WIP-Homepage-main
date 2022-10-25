import {
    Box, 
    Typography,
    Stack,
    Chip,
    Button
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import TestimonialCard from '../../components/cards/TestimonialCard';
import { invests } from '../../constants/content';

export default function Pricing () {
    return (
        <Box sx={{ pt: 20 }}>
            <Stack
                alignItems="center"
                justifyContent="center"
                gap={2}
            >
                <Typography variant="h1">Join the Secret club</Typography>
                <Typography variant="body2" color="text.secondary"
                    sx={{
                        maxWidth:  625,
                        fontWeight: 400,
                        textAlign: 'center',
                        lineHeight: '28px'
                    }}
                >Whether you’re looking for a specific deal or you want to save money on your whole stack, we’ve got the right pricing for you.</Typography>
            </Stack>
            <Stack
                alignItems="center"
                sx={{
                    pt: 13
                }}
            >
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        columnGap: 8
                    }}
                >
                    <Box
                        sx={{
                            background: 'linear-gradient(116.41deg, rgba(103, 103, 103, 0.5) -56.52%, rgba(45, 37, 58, 0.5) 130.2%)',
                            boxShadow: '0px 1.45455px 36.3636px rgba(69, 42, 124, 0.1)',
                            backdropFilter: 'blur(42.5447px)',
                            borderRadius: 3.5,
                            px: 5,
                            pt: 4,
                            pb: 6.5
                        }}
                    >
                        <Chip 
                            label="Pay as you go"
                        />
                        <Stack 
                            flexDirection="row" 
                            alignItems="flex-end" 
                            gap={1}
                            sx={{
                                pt: 4,
                                pb: 3
                            }}
                        >
                            <Typography variant="h1" sx={{ lineHeight: 1 }}>$49</Typography>
                            <Stack>
                                <Typography color="text.secondary">for each</Typography>
                                <Typography color="text.secondary">individual deal</Typography>
                            </Stack>
                        </Stack>
                        <Typography variant="body2" color="text.secondary">Upgrade to Unlimited anytime</Typography>
                        <Stack
                            gap={1}
                            sx={{
                                pt: 3
                            }}
                        >
                            <Stack flexDirection="row" alignItems="center" gap={1.5}>
                                <CheckCircleIcon fontSize="small" sx={{ color: '#17FF12' }} />
                                <Typography>Access the deals you pay for</Typography>
                            </Stack>
                            <Stack flexDirection="row" alignItems="center" gap={1.5}>
                                <CancelIcon fontSize="small" sx={{ color: '#FF4242' }} />
                                <Typography>Private community access</Typography>
                            </Stack>
                            <Stack flexDirection="row" alignItems="center" gap={1.5}>
                                <CancelIcon fontSize="small" sx={{ color: '#FF4242' }} />
                                <Typography>Priority Support</Typography>
                            </Stack>
                        </Stack>
                    </Box>
                    <Box
                        sx={{
                            background: 'linear-gradient(116.41deg, rgba(103, 103, 103, 0.5) -56.52%, rgba(45, 37, 58, 0.5) 130.2%)',
                            boxShadow: '0px 1.45455px 36.3636px rgba(69, 42, 124, 0.1)',
                            backdropFilter: 'blur(42.5447px)',
                            borderRadius: 3.5,
                            px: 5,
                            pt: 4,
                            pb: 6.5
                        }}
                    >
                        <Chip 
                            label="Unlimited"
                        />
                        <Stack 
                            flexDirection="row" 
                            alignItems="flex-end" 
                            gap={1}
                            sx={{
                                pt: 4,
                                pb: 3
                            }}
                        >
                            <Typography variant="h1" sx={{ lineHeight: 1 }}>$49</Typography>
                            <Typography color="text.secondary">per year</Typography>
                        </Stack>
                        <Typography variant="body2" color="text.secondary">Full access to all our deals</Typography>
                        <Stack
                            gap={1}
                            sx={{
                                pt: 3
                            }}
                        >
                            <Stack flexDirection="row" alignItems="center" gap={1.5}>
                                <CheckCircleIcon fontSize="small" sx={{ color: '#17FF12' }} />
                                <Typography>Access all current deals and new deals</Typography>
                            </Stack>
                            <Stack flexDirection="row" alignItems="center" gap={1.5}>
                                <CheckCircleIcon fontSize="small" sx={{ color: '#17FF12' }} />
                                <Typography>Private community access</Typography>
                            </Stack>
                            <Stack flexDirection="row" alignItems="center" gap={1.5}>
                                <CheckCircleIcon fontSize="small" sx={{ color: '#17FF12' }} />
                                <Typography>Priority Support</Typography>
                            </Stack>
                        </Stack>
                        <Box sx={{ pt: 4.5 }}>
                            <Button
                                fullWidth
                                sx={{
                                    background: 'linear-gradient(110.83deg, #AF59CD 12.82%, #0360B7 120.34%)',
                                    borderRadius: 2.5,
                                    py: 1.5
                                }}
                            >Get Unlimited membership</Button>
                        </Box>
                    </Box>
                </Box>
            </Stack>
            <Box
                sx={{
                    py: 20
                }}
            >
                <Stack
                    flexDirection="row"
                    justifyContent="space-between"
                    sx={{
                        background: 'linear-gradient(156.67deg, rgba(104, 97, 148, 0.248) 0.07%, rgba(35, 23, 97, 0.232) 99.07%)',
                        boxShadow: '0px 7px 40px rgba(5, 34, 52, 0.06)',
                        p: 13,
                    }}
                >
                    <Stack gap={2.5}>
                        <Box>
                            <Typography variant="h2" sx={{ textAlign: 'right' }}>43,198</Typography>
                            <Typography variant="h5" sx={{ textAlign: 'right' }}>users</Typography>
                        </Box>
                        <Typography sx={{ textAlign: 'right' }}>You'll never walk alone, join our community!</Typography>
                    </Stack>
                    <Stack gap={2.5}>
                        <Box>
                            <Typography variant="h2" sx={{ textAlign: 'right' }}>401</Typography>
                            <Typography variant="h5" sx={{ textAlign: 'right' }}>partners</Typography>
                        </Box>
                        <Typography sx={{ textAlign: 'right' }}>Only the best!</Typography>
                    </Stack>
                    <Stack gap={2.5}>
                        <Box>
                            <Typography variant="h2" sx={{ textAlign: 'right' }}>+$38,969,250</Typography>
                            <Typography variant="h5" sx={{ textAlign: 'right' }}>saved</Typography>
                        </Box>
                        <Typography sx={{ textAlign: 'right' }}>We love to give back to founders!</Typography>
                    </Stack>
                </Stack>
            </Box>
            <Stack
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
            >    
                <Box sx={{ maxWidth: 972 }}>
                    <TestimonialCard 
                        {...card}
                    />
                </Box>
            </Stack>
            <Stack
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
            >    
                <Box sx={{ maxWidth: 972 }}>
                    <Stack gap={1} sx={{ pb: 8, pt: 25 }}>
                        <Typography variant="subtitle1"
                            sx={{
                                background: 'linear-gradient(110.83deg, #CD3FFF 12.82%, #0085FF 120.34%)',
                                backgroundClip: 'text',
                                textFillColor: 'transparent',
                                textAlign: 'center'
                            }}
                        >You're in good hands</Typography>
                        <Typography variant="h3" sx={{ textAlign: 'center' }}>We feature the most powerful tools</Typography>
                    </Stack>
                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, 1fr)',
                            columnGap: 2.5,
                            rowGap: 3.5
                        }}
                    >
                    {invests.map((item, key) => 
                        <Stack 
                            key={key}
                            alignItems="center" 
                            justifyContent="center"
                            sx={{ 
                                height: 120, 
                                bgcolor: '#fff',
                                boxShadow: '-2px 3px 10px rgba(0, 0, 0, 0.09)',
                                borderRadius: 3,
                                border: '4px solid #524c56'
                            }}
                        >
                            <Box 
                                component="img" 
                                src={item} 
                                sx={{
                                    maxHeight: '100%'
                                }}
                            />
                                
                        </Stack>
                    )}
                    </Box>
                </Box>
            </Stack>
            <Stack
                alignItems="center"
                justifyContent="center"
                gap={3.5}
                sx={{
                    pt: 20,
                    pb: 25
                }}
            >    
                <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 600 }}>White Label</Typography>
                <Typography color="text.secondary" sx={{ maxWidth: 520, textAlign: 'center' }}>Secret helps VCs, accelerators, incubators, entrepreneurs communities & many more businesses create and manage their own perks marketplace effortlessly.</Typography>
                <Box sx={{ pt: 2.5 }}>
                    <Button 
                        variant="outlined" 
                        sx={{ 
                            px: 4.5, 
                            py: 1.5, 
                            lineHeight: 1,
                            borderRadius: 2.5
                        }}
                    >View all deals</Button>
                </Box>
            </Stack>
        </Box>
    )
}

const card = {
    img: '/images/testimonial/1.png',
    title: 'An amazing resource for startups',
    content: 'AWS Activate\'s credits have been a HUGE help in these first couple of months since Accomplice\'s launch while I\'m working to build a solid base of users and MRR. It\'s one less thing for me to worry about for now, which for a solo founder is an absolute godsend.',
    client: '/images/avatar/3.png',
    clientName: 'Daniel',
    position: 'Marketing Manager @Foxycart'
}