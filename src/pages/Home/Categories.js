import {
    Button,
    Box,
    Stack,
    Typography,
    useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CategoryCard from '../../components/cards/CategoryCard';

export default function Categories () {
    const theme = useTheme();

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
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    rowGap: 6,
                    columnGap: 8
                }}
            >
            {[1,2,3,4,5,6,7,8].map((item, key) =>
                <CategoryCard key={key} {...item} />
            )}
            </Box>
            <Stack flexDirection="row" justifyContent="center" sx={{ pt: 10 }}>
                <Button variant="outlined">View all deals</Button>
            </Stack>
        </Box>
    )
}