import {
    Box, 
    Stack,
    Typography,
    Divider
} from '@mui/material';
import { Link } from 'react-router-dom';

export default function Footer () {
    return (
        <Box
            sx={{
                background: 'linear-gradient(116.41deg, rgba(103, 103, 103, 0.22) -56.52%, rgba(45, 37, 58, 0.22) 130.2%)',
                // boxShadow: '0px 1.45455px 36.3636px rgba(69, 42, 124, 0.1)',
                // backdropFilter: 'blur(42.5447px)',
            }}
        >
            <Stack
                flexDirection="row"
                alignItems="center"
                sx={{
                    px: 14,
                    py: 7
                }}
            >
                <Stack 
                    flex={1}
                    gap={3}
                >
                    <Box 
                        component="img"
                        src="/images/logo.png"
                        sx={{
                            width: 54
                        }}
                    />
                    <Typography
                        variant="caption"
                        sx={{
                            textTransform: 'capitalize',
                            maxWidth: 440
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Integer nec odio. 
                        Praesent libero. 
                        Sed cursus
                    </Typography>
                    <Stack
                        flexDirection="row"
                        alignItems="center"
                        gap={3}
                    >
                        <Box 
                            component="img"
                            src="/images/linkedin.png" 
                        />
                        <Box 
                            component="img"
                            src="/images/twitter.png" 
                        />
                        <Box 
                            component="img"
                            src="/images/instagram.png" 
                        />
                    </Stack>
                </Stack>
                <Stack
                    flexDirection="row"
                    flex={1}
                    gap={12}
                >
                    <Stack>
                        <Typography sx={{ color: '#8E55FF', fontWeight: 800 }}>Marketplace</Typography>
                        <Stack flexDirection="row" gap={3}>
                            <Divider orientation='vertical' flexItem />
                            <Stack gap={2} sx={{
                                pt: 3,
                                '& a': {
                                    color: 'inherit'
                                }
                            }}>
                                <Link>
                                    <Typography>All Deals</Typography>
                                </Link>
                                <Link>
                                    <Typography>Pricing</Typography>
                                </Link>
                                <Link>
                                    <Typography>Affiliation</Typography>
                                </Link>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack>
                        <Typography sx={{ color: '#8E55FF', fontWeight: 800 }}>Company</Typography>
                        <Stack
                            flexDirection="row"
                            gap={8}
                        >
                            <Stack flexDirection="row" gap={3}>
                                <Divider orientation='vertical' flexItem />
                                <Stack gap={2} sx={{
                                    pt: 3,
                                    '& a': {
                                        color: 'inherit'
                                    }
                                }}>
                                    <Link>
                                        <Typography>Contact us</Typography>
                                    </Link>
                                    <Link>
                                        <Typography>About us</Typography>
                                    </Link>
                                    <Link>
                                        <Typography>Blogs</Typography>
                                    </Link>
                                </Stack>
                            </Stack>
                            <Stack
                                sx={{
                                    pt: 3,
                                    '& a': {
                                        color: 'inherit'
                                    }
                                }}
                            >
                                <Link>
                                    <Typography>Terms & Conditions</Typography>
                                </Link>
                                <Link>
                                    <Typography>Privacy Policy</Typography>
                                </Link>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    );
}