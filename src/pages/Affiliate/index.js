import {
    Box, 
    Typography,
    Stack,
    Chip,
    Button
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import AffiliateCard from '../../components/cards/AffiliateCard';
import TestimonialCard from '../../components/cards/TestimonialCard';
import FeedbackCard from '../../components/cards/FeedbackCard';
import { invests, affiliates, feedbacks } from '../../constants/content';

export default function Affiliate () {
    return (
        <Box sx={{ pt: 20, pb: 23 }}>
            <Stack
                alignItems="center"
                justifyContent="center"
                gap={2}
            >
                <Typography variant="h1">Affiliate Program</Typography>
                <Stack gap={5}>
                    <Typography variant="body2" color="text.secondary"
                        sx={{
                            maxWidth:  467,
                            fontWeight: 400,
                            textAlign: 'center',
                            lineHeight: '28px'
                        }}
                    >Give your community a 20% discount and get paid $30 every time you send us a customer!</Typography>
                    <Button
                        fullWidth
                        sx={{
                            background: 'linear-gradient(110.83deg, #AF59CD 12.82%, #0360B7 120.34%)',
                            borderRadius: 2.5,
                            py: 1.5
                        }}
                    >Join our Affiliate Program</Button>
                </Stack>
            </Stack>
            <Box sx={{
                pt: 30, pb: 8, px: 14
            }}>
                <Stack gap={3} sx={{ maxWidth: 972 }}>
                    <Typography variant="h2">
                        Why you should join the Secret Affiliate Program?
                    </Typography>
                    <Typography color="text.secondary">
                        Join the Secret affiliate program and enjoy generous commissions on your referrals. No sign-up fee, no minimum sales requirement and no caps on your earnings!
                    </Typography>
                </Stack>
            </Box>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    columnGap: 6,
                    px: 14,
                    pb: 33
                }}
            >
            {affiliates.map((item, key) => 
                <AffiliateCard key={key} {...item} />
            )}
            </Box>
            <Stack flexDirection="row" alignItems="center"
                sx={{
                    pl: 14,
                    overflow: 'hidden'
                }}
            >
                <Box flex={1}>
                    <Stack gap={3} sx={{ maxWidth: 492 }}>
                        <Typography variant="h2" sx={{ lineHeight: 1.4 }}>They love our affiliate program</Typography>
                        <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>Hundreds of bloggers, youtubers, instagramers and B2B influencers are promoting Secret to help their community save money on the best software.</Typography>
                    </Stack>
                </Box>
                <Box flex={1}
                    sx={{
                        overflow: 'hidden'
                    }}
                >
                    <Box
                        sx={{
                            display: 'grid',
                            width: 1280,
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: 5,
                            position: 'relative',
                        }}
                    >
                    {feedbacks.map((item, key) =>
                        <FeedbackCard 
                            key={key}
                            {...item}
                        />
                    )}
                    </Box>
                    <Stack
                        flexDirection="row"
                        justifyContent="flex-end"
                        gap={3.5}
                        sx={{ pr: 14, pt: 8 }}
                    >
                        {/* <Stack flexDirection="row"> */}
                        <Box 
                            component='img'
                            src="/images/arrow-left.png"
                        />
                        {/* </Stack> */}
                        <Box 
                            component='img'
                            src="/images/arrow-right.png"
                        />
                        <Box />
                    </Stack>
                </Box>
            </Stack>
            <Stack
                justifyContent="center"
                sx={{
                    pt: 28,
                }}
                gap={3.5}
            >
                <Typography variant="h5" sx={{ textAlign: 'center'}}>Join our affiliate program</Typography>
                <Typography color="text.secondary" sx={{ textAlign: 'center'}}>Start earning now!</Typography>
                <Stack flexDirection="row" justifyContent="center" gap={4} sx={{ pt: 2.5 }}>
                    <Button
                        variant="outlined"
                        sx={{
                            py: 1.5,
                            px: 4.5,
                            lineHeight: 1
                        }}
                    >Log in</Button>
                    <Button
                        variant="outlined"
                        sx={{
                            py: 1.5,
                            px: 4.5,
                            lineHeight: 1
                        }}
                    >Become our Affiliate</Button>
                </Stack>
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