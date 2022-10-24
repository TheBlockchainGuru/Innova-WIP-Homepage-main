import {
    Box,
    Stack,
    Typography,
    useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import WorkCard from '../../components/cards/WorkCard';
import { howItWorks } from '../../constants/content';

export default function HowItWorks () {
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
            >How it works</Typography>
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
                    gridTemplateColumns: matchUpMd 
                                        ? 'repeat(3, 1fr)' 
                                        : 'repeat(1, 1fr)',
                    gap: 6,
                }}
            >
            {howItWorks.map((item, key) =>
                <WorkCard key={key} {...item} />
            )}
            </Box>
        </Stack>
    )
}