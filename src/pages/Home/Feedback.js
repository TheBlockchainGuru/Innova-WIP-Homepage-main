import {
    Button,
    Box,
    Typography,
    Stack
} from '@mui/material';
import FeedbackCard from '../../components/cards/FeedbackCard';

export default function Feedback () {
    return (
        <Box
        >
            <Typography
            >Categories</Typography>
            <Typography
                sx={{
                    textAlign: 'center'
                }}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Integer nec odio. 
                Praesent libero. 
            </Typography>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    rowGap: 6,
                    columnGap: 8
                }}
            >
            {[1,2,3].map((item, key) =>
                <FeedbackCard key={key} {...item} />
            )}
            </Box>
            <Stack flexDirection="row" justifyContent="center" sx={{ pt: 10 }}>
                <Button variant="outlined">View all deals</Button>
            </Stack>
        </Box>
    )
}