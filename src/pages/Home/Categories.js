import {
    Button,
    Box,
    Stack,
    Typography,
    useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CategoryCard from '../../components/cards/CategoryCard';
import HomeContainer from '../../components/containers/HomeContainer';
import { categories } from '../../constants/content';

export default function Categories () {
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    const matchUpLg = useMediaQuery(theme.breakpoints.up('lg'));
    const matchUpSm = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <HomeContainer>
            <Typography
                variant="h3"
                sx={{
                    lineHeight: '64px',
                    textAlign: 'center'
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
                    gridTemplateColumns: matchUpLg 
                                        ? 'repeat(4, 1fr)' 
                                        : matchUpMd
                                        ? 'repeat(3, 1fr)'
                                        : matchUpSm 
                                        ? 'repeat(2, 1fr)'
                                        : 'repeat(1, 1fr)',
                    rowGap: matchUpLg ? 6 : 3,
                    columnGap: matchUpLg ? 8 : 4
                }}
            >
            {categories.map((item, key) =>
                <CategoryCard key={key} {...item} index={key} />
            )}
            </Box>
        </HomeContainer>
    )
}