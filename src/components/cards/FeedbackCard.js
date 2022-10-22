import {
    Avatar,
    Box, 
    Stack, 
    Typography, 
    Rating
} from '@mui/material';

export default function FeedbackCard () {
    return (
        <Box
            sx={{
                height: 460,
                backgroundImage: 'url(/images/feedback/1.png)',
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
                {/* <Box component="img" src="/images/feedback/1.png" /> */}
                <Stack
                    sx={{
                        // position: 'absolute',
                        // width: '100%',
                        // bottom: 0,
                        p: 4
                    }}
                >
                    <Rating name="read-only" value={5} readOnly />
                    <Typography>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Typography>
                    <Stack
                        flexDirection="row"
                        alignItems="center"
                    >

                        <Avatar 
                            src="/images/avatar/1.png"
                        />
                        <Typography>Brock</Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    );
}