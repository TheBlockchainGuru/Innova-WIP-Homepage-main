import React from 'react';
import {
    Box, 
    Button,
    Stack, 
    Typography,
    useMediaQuery
} from '@mui/material';
import { keyframes } from '@emotion/react';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import HomeContainer from '../../components/containers/HomeContainer';
import BoxCard from '../../components/cards/BoxCard';

export default function Dashboard () {
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    const navigate = useNavigate();
    const move5 = keyframes`
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-30px);
        }
        100% {
            transform: translateY(0);
        }
    `;
    const move4 = keyframes`
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(30px);
        }
        100% {
            transform: translateY(0);
        }
    `;
    const move3 = keyframes`
        0% {
            transform: translate(0, 0);
        }
        25% {
            transform: translate(-30px, -30px);
        }
        50% {
            transform: translate(0, 0);
        }
        75% {
            transform: translate(30px, -30px);
        }

        100% {
            transform: translate(0, 0);
        }
    `;
    
    const move2 = keyframes`
        0% {
            transform: translateX(0);
        }
        50% {
            transform: translateX(30px);
        }
        100% {
            transform: translateX(0);
        }
    `;
    
    const move1 = keyframes`
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-30px);
        }
        100% {
            transform: translateY(0);
        }
    `;

    return (
        <HomeContainer>
            <Stack gap={12}
                sx={{
                    pt: 7
                }}
            >
                <Stack
                    flexDirection={matchUpMd ? "row" : "column"}
                    gap={matchUpMd ? 7 : 4}
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
                                    md: 'none',
                                
                                },
                                position: 'relative'
                            }}
                        >
                            <BoxCard top={0} right={100} move={move3} />
                            <BoxCard left={-100} bottom={100} move={move2} />
                            <BoxCard right={0} bottom={0} move={move4} />
                            <Box    
                                component="img" 
                                src="/images/box1.png" 
                                sx={{
                                    maxWidth: '100%',
                                    animation: `${move1} 10s linear infinite`,
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
                            position: 'relative',
                            display: {
                                xs: 'none', md: 'flex' 
                            }
                        }}
                    >
                        <BoxCard top={0} right={100} move={move3} />
                        <BoxCard left={-100} bottom={100} move={move2} />
                        <BoxCard right={0} bottom={0} move={move5} />
                        <Stack flexDirection="row">
                            <Box 
                                component="img" 
                                src="/images/box1.png" 
                                sx={{
                                    maxWidth: '100%',
                                    animation: `${move1} 10s linear infinite`,
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