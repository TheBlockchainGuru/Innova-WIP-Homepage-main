import {
    Box, 
    Stack,
    Typography
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function CategoryCard ({img, title, index}) {
    const navigate = useNavigate();
    return (
        <Stack
            justifyContent="flex-end"
            sx={{
                backgroundImage: `url(${img})`,
                backgroundSize: '100% 100%',
                height: 185,
                background: 'linear-gradient(128.07deg, rgba(28, 59, 84, 0.75) 7.62%, rgba(61, 60, 69, 0.75) 96.23%), url(Rectangle 15.png)',
                borderRadius: 3.5,
                p: 0.375,
                cursor: 'pointer'
            }}
            onClick={() => navigate('/explore?c=' + index)}
        >
            <Box
                sx={{
                    py: 3,
                    background: 'linear-gradient(109.87deg, rgba(255, 255, 255, 0.3) 13.08%, rgba(0, 0, 0, 0.3) 86.53%)',
                    backdropFilter: 'blur(2.5px)',
                    borderRadius: '0px 0px 14px 14px',
                    transition: '.3s',
                    '&:hover': {
                        background: 'linear-gradient(109.87deg, rgba(255, 255, 255, 0.3) 13.08%, rgba(0, 0, 0, 0.3) 86.53%)',
                        py: 5
                    }
                }}
            >
                <Typography
                    sx={{
                        textAlign: 'center',
                        textTransform: 'uppercase'
                    }}
                >{title}</Typography>
            </Box>
        </Stack>
    )
}