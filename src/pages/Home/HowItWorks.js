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

    return (
        <Stack
            alignItems="center"
        >
            <Typography
            >How it works</Typography>
            <Typography
                sx={{
                    textAlign: 'center'
                }}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Integer nec odio. 
                Praesent libero. 
            </Typography>
            <Stack flexDirection="row" gap={6}>
            {howItWorks.map((item, key) =>
                <WorkCard key={key} {...item} />
            )}
            </Stack>
        </Stack>
    )
}