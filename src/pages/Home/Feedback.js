import {
    Button,
    Box,
    Typography,
    Stack,
    useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import FeedbackCard from '../../components/cards/FeedbackCard';
import { feedbacks } from '../../constants/content';
import HomeContainer from '../../components/containers/HomeContainer';

export default function Feedback () {
    const theme = useTheme();
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
            >What the say about us</Typography>
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
            {/* <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    rowGap: matchUpLg ? 6 : 3,
                    columnGap: matchUpLg ? 8 : 4
                }}
            >
            {feedbacks.map((item, key) =>
                <FeedbackCard key={key} {...item} />
            )}
            </Box> */}
        </HomeContainer>
    )
}