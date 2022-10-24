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

export default function Feedback () {
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Stack
            alignItems="center"
        >
            <Typography
                variant="h3"
                sx={{
                    lineHeight: '64px'
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
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    rowGap: 6,
                    columnGap: 8
                }}
            >
            {feedbacks.map((item, key) =>
                <FeedbackCard key={key} {...item} />
            )}
            </Box>
        </Stack>
    )
}