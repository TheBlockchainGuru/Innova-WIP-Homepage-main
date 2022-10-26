import { useState, useEffect } from 'react';
import {
    Box,
    Breadcrumbs,
    Button,
    Typography,
    Tab,
    Tabs,
    Stack,
    useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import ShareIcon from '@mui/icons-material/Share';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckIcon from '@mui/icons-material/Check';
import Alternatives from './Alternatives';
import Features from './Features';
import Information from './Information';
import GetDeal from '../../components/modals/GetDeal';
import HomeContainer from '../../components/containers/HomeContainer';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
            <Box sx={{ py: 3 }}>
                {children}
            </Box>
            )}
        </div>
    );
}
function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}
export default function Detail () {
    const theme = useTheme();
    const matchUpLg = useMediaQuery(theme.breakpoints.up('lg'));
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    const matchUpSm = useMediaQuery(theme.breakpoints.up('sm'));
    const [value, setValue] = useState(0);
    const [open, setOpen] = useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <HomeContainer>
            <Box
                sx={{
                    py: 10,
                    pb: 20
                }}
            >
                <Stack 
                    flexDirection={matchUpMd ? "row" : "column"} 
                    gap={6}
                >
                    <Stack flex={1} gap={matchUpMd ? 10 : 6}>
                        <Breadcrumbs separator=">"  aria-label="breadcrumb">
                            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                                Home
                            </Link>
                            <Link
                                to="/explore" style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                                All Deals
                            </Link>
                            <Typography color="text.primary">AWS Activate Promo Code</Typography>
                        </Breadcrumbs>
                        <Stack 
                            flexDirection={matchUpSm ? "row" : "column"}
                            alignItems="center" 
                            gap={5}
                        >
                            <Stack flexDirection="row">
                                <Box 
                                    component="img"
                                    src="/images/aws.png"
                                />
                            </Stack>
                            <Stack>
                                <Typography variant="h2" sx={{ textAlign: matchUpSm ? 'left' : 'center'}}>AWS Activate</Typography>
                                <Typography 
                                    variant="h6" 
                                    sx={{ 
                                        fontWeight: 400, 
                                        color: '#C7C7C7',
                                        textAlign: matchUpSm ? 'left' : 'center'
                                    }}
                                >Amazon's cloud services platform</Typography>
                            </Stack>
                        </Stack>
                        <Typography
                            variant="h5"
                            sx={{
                                maxWidth: 515,
                                fontFamily: 'Syne'
                            }}
                        >Efficiently develop, deploy and maintain high-performance and scalable applications.</Typography>
                    </Stack>
                    <Box flex={1}
                        sx={{
                            width: '100%',
                            maxWidth: matchUpMd ? 462 : '100%',
                            background: 'linear-gradient(110.83deg, rgba(175, 89, 205, 0.25) 12.82%, rgba(3, 96, 183, 0.25) 120.34%)',
                            boxShadow: '0px 16px 40px rgba(175, 89, 206, 0.33)',
                            borderRadius: 3.5
                        }}
                    >
                        <Stack
                            gap={4}
                            sx={{
                                pt: matchUpSm ? 5 : 2,
                                pl: matchUpSm ? 5 : 2,
                                pr: matchUpSm ? 4 : 2,
                                pb: matchUpSm ? 4 : 2
                            }}
                        >
                            <Typography variant="h4">$5000 in AWS credits for 2 years</Typography>
                            <Button
                                sx={{
                                    background: 'linear-gradient(110.83deg, #AF59CD 12.82%, #0360B7 120.34%)',
                                    borderRadius: 2,
                                    py: 1.5
                                }}
                                onClick={handleOpen}
                            >
                                <Typography variant="body2">Get deal for $149</Typography>
                            </Button>
                            <Stack gap={1.5}>
                                <Typography variant="caption">Eligibility criteria:</Typography>
                                <Stack flexDirection="row" gap={1.5}>
                                    <CheckCircleOutlineIcon sx={{ fontSize: 14 }} />
                                    <Typography variant="caption">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        Integer nec odio. 
                                        Praesent libero. 
                                    </Typography>
                                </Stack>
                                <Stack flexDirection="row" gap={1.5}>
                                    <CheckCircleOutlineIcon sx={{ fontSize: 14 }} />
                                    <Typography variant="caption">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        Integer nec odio. 
                                        Praesent libero. 
                                    </Typography>
                                </Stack>
                            </Stack>
                            <Button
                                variant="outlined"
                                fullWidth
                                startIcon={<ShareIcon />}
                            >
                                Share deal
                            </Button>
                        </Stack>
                        <Stack
                            gap={1}
                            sx={{
                                bgcolor: '#64578E',
                                pl: matchUpSm ? 4.5 : 2,
                                pr: matchUpSm ? 3.5 : 2,
                                pt: 2.5,
                                pb: 3,
                                borderRadius: '0px 0px 10px 10px'
                            }}
                        >
                            <Stack 
                                flexDirection="row" 
                                alignItems="center" 
                                gap={1}
                            >
                                <Typography variant="caption" sx={{ fontWeight: 700 }}>Satisfaction Guaranteed</Typography>
                                <CheckIcon sx={{ fontSize: 14 }} />
                            </Stack>
                            <Typography variant="caption" sx={{ color: '#D9CDF0' }}>
                                All our deals are 100% verified as they are all negotiated directly with the vendors by our team.
                            </Typography>
                        </Stack>
                    </Box>
                </Stack>
                <Box sx={{ pt: 10 }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Information" {...a11yProps(0)} />
                            <Tab label="Features" {...a11yProps(1)} />
                            <Tab label="Alternatives" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <Information />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Features />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Alternatives />
                    </TabPanel>
                </Box>
                <GetDeal 
                    open={open}
                    handleClose={handleClose}
                />
            </Box>
        </HomeContainer>
    )
}