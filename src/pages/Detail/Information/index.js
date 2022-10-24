import {
    Box,
    Stack,
    Typography
} from '@mui/material';
import Alternatives from './Alternatives';
import Content from './Content';
import Promo from './Promo';
import Contact from './Contact';

export default function Information () {
    return (
        <Box
            sx={{
                background: 'linear-gradient(116.41deg, rgba(103, 103, 103, 0.25) -56.52%, rgba(45, 37, 58, 0.25) 130.2%)',
                boxShadow: '0px 1.45455px 36.3636px rgba(69, 42, 124, 0.1)',
                backdropFilter: 'blur(42.5447px)',
                borderRadius: 3.5,
                border: '4px solid #57516a'
            }}
        >
            <Content />
            <Alternatives />
            <Promo />
            <Contact />
        </Box>
    )
}