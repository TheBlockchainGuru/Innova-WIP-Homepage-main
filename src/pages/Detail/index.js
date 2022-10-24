import { StackedBarChart } from '@mui/icons-material';
import {
    Box,
    Breadcrumbs,
    Button,
    Typography,
    Stack 
} from '@mui/material';
import { Link } from 'react-router-dom';
import ShareIcon from '@mui/icons-material/Share';
export default function Detail () {
    return (
        <Box
            sx={{
                px: 14,
                py: 10,
                pb: 20
            }}
        >
            <Stack flexDirection="row">
                <Stack flex={1}>
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
                    <Stack>
                        <Stack>
                            <Stack flexDirection="row">
                                <Stack flexDirection="row">
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
                            <Typography>Efficiently develop, deploy and maintain high-performance and scalable applications.</Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <Box flex={1}>
                    <Stack>
                        <Typography>$5000 in AWS credits for 2 years</Typography>
                        <Button>Get deal for $149</Button>
                        <Typography>Eligibility criteria:</Typography>
                        <Stack>
                            <Stack>
                                <Stack flexDirection="row">
                                    <Stack flexDirection="row" alignItems="center">
                                        <Box component="img" src="/images/check.png" />
                                    </Stack>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        Integer nec odio. 
                                        Praesent libero. 
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                        <Button
                            fullWidth
                            startIcon={<ShareIcon />}
                        >
                            Share deal
                        </Button>
                        <Box>
                            <Stack flexDirection="row" alignItems="center">
                                <Typography>Satisfaction Guaranteed</Typography>
                                <Stack flexDirection="row" alignItems="center">
                                    <Box component="img" src="/images/check1.png" />
                                </Stack>
                            </Stack>
                            <Typography>
                                All our deals are 100% verified as they are all negotiated directly with the vendors by our team.
                            </Typography>
                        </Box>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}