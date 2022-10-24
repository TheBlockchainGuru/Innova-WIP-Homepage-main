import {
    Box, 
    Stack,
    Typography
} from '@mui/material';

export default function CategoryCard ({img, title}) {
    return (
        <Stack
            justifyContent="flex-end"
            sx={{
                backgroundImage: `url(${img})`,
                backgroundSize: '100% 100%',
                height: 185,
                background: 'linear-gradient(128.07deg, rgba(28, 59, 84, 0.75) 7.62%, rgba(61, 60, 69, 0.75) 96.23%), url(Rectangle 15.png)',
                borderRadius: 3.5,
                p: 0.375
            }}
        >
            <Box
                sx={{
                    pt: 3,
                    pb: 3,
                    background: 'linear-gradient(109.87deg, rgba(255, 255, 255, 0.3) 13.08%, rgba(0, 0, 0, 0.3) 86.53%)',
                    backdropFilter: 'blur(2.5px)',
                    borderRadius: '0px 0px 14px 14px',
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