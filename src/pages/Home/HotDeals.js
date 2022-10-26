import {
    Button,
    Box,
    Stack,
    Typography,
    useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import DealCard from  '../../components/cards/DealCard';
import HomeContainer from '../../components/containers/HomeContainer';

export default function HotDeals () {
    const theme = useTheme();
    const navigate = useNavigate();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    const matchUpLg = useMediaQuery(theme.breakpoints.up('lg'));

    return (
        <HomeContainer>
            <Typography
                variant="h3"
                sx={{
                    lineHeight: '64px',
                    textAlign: 'center'
                }}
            >Hot Deals</Typography>
            <Stack
                flexDirection="row"
                justifyContent="center"
                sx={{
                    pt: matchUpMd ? 3: 0,
                    pb: matchUpMd ? 7.5: 9
                }}
            >
                <Typography
                    color="text.secondary"
                    sx={{
                        maxWidth: 445,
                        textAlign: 'center'
                    }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Integer nec odio. 
                    Praesent libero. 
                </Typography>
            </Stack>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: matchUpLg ? 'repeat(3, 1fr)' : matchUpMd ? 'repeat(2, 1fr)' : 'repeat(1, 1fr)',
                    rowGap: matchUpLg ? 6 : 3,
                    columnGap: matchUpLg ? 8 : 4
                }}
            >
            {[1,2,3,4,5,6].map((item, key) =>
                <DealCard key={key} {...item} />
            )}
            </Box>
            <Stack flexDirection="row" justifyContent="center" sx={{ pt: 10 }}>
                <Button 
                    variant="outlined" 
                    sx={{ 
                        px: 4.5, 
                        py: 1.5, 
                        lineHeight: 1,
                        borderRadius: 2.5
                    }}
                    onClick={() => navigate('/explore')}
                >View all deals</Button>
            </Stack>
        </HomeContainer>
    )
}