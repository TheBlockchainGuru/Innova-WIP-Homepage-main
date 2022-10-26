import React from 'react';
import {
    Box, 
    Button,
    Stack, 
    Typography,
    useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import HomeContainer from '../../components/containers/HomeContainer';

export default function Dashboard () {
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    const navigate = useNavigate();

    return (
        <HomeContainer>
            <Stack gap={12}
                sx={{
                    pt: 7
                }}
            >
                <Stack
                    flexDirection={matchUpMd ? "row" : "column"}
                >
                    <Stack
                        flex={1}
                        justifyContent="center"
                        gap={matchUpMd ? 4 :  8}
                    >
                        <Stack>
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
                            <Typography variant="h1"
                                sx={{
                                    '& span': {
                                        background: 'linear-gradient(110.83deg, #AF59CD 12.82%, #0360B7 120.34%)',
                                        backgroundClip: 'text',
                                        textFillColor: 'transparent',
                                    }
                                }}
                            >
                                Build in <span>web3&nbsp;</span> with lowest cost. 
                            </Typography>
                        </Stack>
                        
                        <Stack flexDirection="row"
                            sx={{
                                display: {
                                    xs: 'flex',
                                    sm: 'flex',
                                    md: 'none'
                                }
                            }}
                        >
                            <Box 
                                component="img" 
                                src="/images/box.svg" 
                                sx={{
                                    maxWidth: '100%'
                                }}
                            />
                        </Stack>
                        <Typography variant="body2"
                            color="text.secondary"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Integer nec odio. 
                            Praesent libero. 
                            Sed cursus ante dapibus diam.
                        </Typography>
                        <Box sx={{ pt: 2.5 }}>
                            <Button
                                sx={{
                                    background: 'linear-gradient(110.83deg, #AF59CD 12.82%, #0360B7 120.34%)',
                                    px: 4.5,
                                    py: 1.5,
                                    borderRadius: 2.5
                                }}
                                onClick={() => navigate('/explore')}
                            >Explore now</Button>
                        </Box>
                    </Stack>
                    <Stack 
                        flex={1} 
                        flexDirection="row"
                        justifyContent="flex-end"
                        sx={{
                            display: {
                                xs: 'none', md: 'flex' 
                            }
                        }}
                    >
                        <Stack flexDirection="row">
                            <Box 
                                component="img" 
                                src="/images/box.png" 
                                sx={{
                                    maxWidth: '100%'
                                }}
                            />
                        </Stack>
                    </Stack>
                </Stack>
                <Stack
                    flexDirection="row"
                    alignItems="center"
                    gap={10}
                    flexWrap="wrap"
                    sx={{
                        opacity: '0.45'
                    }}
                >
                    <Box>
                        <Box 
                            component="img"
                            src="/images/slack.png"
                        />
                    </Box>
                    <Box>
                        <Box 
                            component="img"
                            src="/images/webflow.png"
                        />
                    </Box>
                    <Box>
                        <Box 
                            component="img"
                            src="/images/airtable.png"
                        />
                    </Box>
                    <Box>
                        <Box 
                            component="img"
                            src="/images/notion.png"
                        />
                    </Box>
                    <Box>
                        <Box 
                            component="img"
                            src="/images/tiktok.png"
                        />
                    </Box>
                </Stack>
            </Stack>
        </HomeContainer>
    );
}