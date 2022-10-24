import {
    Avatar,
    Box, 
    Stack, 
    Typography, 
    Rating
} from '@mui/material';

export default function TestimonialCard ({img, title, content, client, clientName}) {
    return (
        <Box
            sx={{
                height: 460,
                backgroundImage: `url(${img})`,
                backgroundSize: '100% 100%',
                borderRadius: 3.5
            }}
        >
            <Stack
                justifyContent="flex-end"
                sx={{
                    height: '100%',
                    background: 'linear-gradient(360deg, #2C233D 0%, rgba(25, 18, 37, 0.38) 61.19%), url(indieground-plastic-textures-05.jpg)',
                    backgroundBlendMode: 'normal, lighten',
                    borderRadius: 3.5
                }}
            >
                <Stack
                    gap={3.5}
                    sx={{
                        p: 4
                    }}
                >
                    <Box>
                        <Typography variant="h5">{title}</Typography>
                        <Rating name="read-only" value={5} readOnly />
                    </Box>
                    <Typography variant="caption"
                    >{content}</Typography>
                    <Stack
                        flexDirection="row"
                        alignItems="center"
                        gap={2}
                    >

                        <Avatar 
                            src={client}
                        />
                        <Typography>{clientName}</Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    );
}