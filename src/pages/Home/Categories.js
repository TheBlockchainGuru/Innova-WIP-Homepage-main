import {
    Button,
    Box,
    Stack,
    Typography,
    useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CategoryCard from '../../components/cards/CategoryCard';
import { categories } from '../../constants/content';

export default function Categories () {
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
            >Categories</Typography>
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
                    width: '100%',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    rowGap: 6,
                    columnGap: 8
                }}
            >
            {categories.map((item, key) =>
                <CategoryCard key={key} {...item} />
            )}
            </Box>
        </Stack>
    )
}