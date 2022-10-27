import React from 'react';
import {
    Box, 
    Button,
    OutlinedInput,
    Stack,
    Typography,
    useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { invests } from '../../constants/content';
import { Link } from 'react-router-dom';
import HomeContainer from '../../components/containers/HomeContainer';
import WarningIcon from '@mui/icons-material/Warning';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import GoogleIcon from '@mui/icons-material/Google';

export default function Login () {
    const theme = useTheme();
    const matchUpLg = useMediaQuery(theme.breakpoints.up('lg'));
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    const matchUpSm = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <HomeContainer>
            <Box sx={{ pt: 12, pb: 25 }}>
                <Stack flexDirection={matchUpMd ? "row" : "column"} 
                    justifyContent="space-between"
                gap={matchUpMd ? 5 : 8}>
                    <Stack flex={1} gap={12}>
                        <Stack 
                            gap={2}
                        >
                            <Typography variant="h2">Savings start here.</Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 480 }}>
                                Join Secret to access big savings on the best tools to kickstart or grow your business.
                            </Typography>
                        </Stack>
                        <Box
                            sx={{
                                display: matchUpMd ? 'grid' : 'none',
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
                    </Stack>
                    <Stack flex={1} flexDirection="row" justifyContent="flex-end">
                        <Box
                            sx={{
                                maxWidth: matchUpMd ? 576 : '100%',
                                width: '100%',
                                background: 'linear-gradient(110.83deg, rgba(175, 89, 205, 0.25) 12.82%, rgba(3, 96, 183, 0.25) 120.34%);',
                                boxShadow: '0px 16px 40px rgba(175, 89, 206, 0.33)',
                                border: '4px solid #6a5cc4',
                                borderRadius: 3.5
                            }}
                        >
                            <Stack
                                sx={{
                                    pt: 6,
                                    px: matchUpLg ? 6.5 : matchUpSm ? 4 : 2,
                                    pb: 10
                                }}
                            >
                                <Stack gap={2.5}>
                                    <Typography variant="h4">Log in</Typography>
                                    <Typography variant="caption"
                                        sx={{
                                            maxWidth: 324
                                        }}
                                    >Connect your account with Google (business account preferred) or Linkedin:</Typography>
                                </Stack>
                                <Stack flexDirection="row" sx={{ pt: 4 }}>
                                    <Button
                                        variant="outlined"
                                        startIcon={
                                            <Stack flexDirection="row"
                                                sx={{
                                                    bgcolor: '#fff',
                                                    p: .5,
                                                    borderRadius: 1
                                                }}
                                            >
                                                <GoogleIcon fontSize="small" sx={{ color: '#442950' }}/>
                                            </Stack>}
                                    >
                                        <Typography variant="caption">Sign in with Google</Typography>
                                    </Button>
                                </Stack>
                                <Stack gap={3.5} sx={{ pt: 6 }}>
                                    <Stack gap={.5}>
                                        <Typography variant="caption">Professional email*</Typography>
                                        <OutlinedInput 
                                            fullWidth
                                            placeholder='test@email'
                                            size="small"
                                        />
                                        <Stack 
                                            flexDirection="row" 
                                            alignItems="center" 
                                            gap={1} 
                                            sx={{ 
                                                color: '#FF6565', 
                                                pt: .5 
                                            }}
                                        >
                                            <WarningIcon fontSize="small" sx={{ fontSize: 16 }} />
                                            <Typography variant="caption" sx={{ lineHeight: 1 }}>Please enter a valid email address</Typography>
                                        </Stack>
                                    </Stack>
                                    <Stack gap={.5}>
                                        <Typography variant="caption">Password (6 characters minimum)*</Typography>
                                        <OutlinedInput 
                                            fullWidth 
                                            size="small"
                                            type="password"
                                            endAdornment={
                                                <RemoveRedEyeIcon sx={{ color: 'rgba(255, 255, 255, 0.63)' }} />
                                            }
                                        />
                                    </Stack>
                                </Stack>
                                <Stack flexDirection="row" alignItems="center" sx={{ pt: 4.5 }}>
                                    {/* <Checkbox size='small' /> */}
                                    <Typography variant="caption" sx={{ lineHeight: 1 }}>
                                        Forgot your password? &nbsp;
                                        <Link style={{ color: 'inherit', fontWeight: 700 }}>Retrieve</Link>
                                    </Typography>
                                </Stack>
                                <Box sx={{ pt: 7.5 }}>
                                    <Button 
                                        fullWidth
                                        size="small"
                                        sx={{
                                            background: 'linear-gradient(110.83deg, #AF59CD 12.82%, #0360B7 120.34%)',
                                            borderRadius: 2,
                                            py: 1.5
                                        }}
                                    >Log in</Button>
                                </Box>
                                <Box sx={{ pt: 5 }}>
                                    <Typography variant="caption">Not Signed up? &nbsp;
                                        <Link to="/register" style={{ color: 'inherit', fontWeight: 700 }}>Sign up now</Link>
                                    </Typography>
                                </Box>
                            </Stack>
                        </Box>
                    </Stack>
                    
                    <Box
                        sx={{
                            display: matchUpMd ? 'none' : 'grid',
                            gridTemplateColumns: matchUpMd ? 'repeat(4, 1fr)' : matchUpSm ?  'repeat(2, 1fr)' : 'repeat(1, 1fr)',
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
                </Stack>
            </Box>
        </HomeContainer>
    );
}