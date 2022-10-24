import {
    Button,
    Box,
    Stack,
    Typography,
    OutlinedInput 
} from "@mui/material";

export default function Contact () {
    return (
        <Stack
            alignItems="center"
            gap={8}
            sx={{
                background: 'linear-gradient(116.41deg, rgba(103, 103, 103, 0.22) -56.52%, rgba(45, 37, 58, 0.22) 130.2%)',
                boxShadow: '0px 1.45455px 36.3636px rgba(69, 42, 124, 0.1)',
                backdropFilter: 'blur(42.5447px)',
                py: 12,
                px: 4 
            }}
        >
            <Stack gap={2}>
                <Typography variant="h5" sx={{ textAlign: 'center' }}>Are you providing consultancy or resources on this tool?</Typography>
                <Typography color="text.secondary" sx={{ textAlign: 'center' }}>
                    Contact us at experts@joinsecret.com to promote your expertise to our community of startups.
                </Typography>
                <Stack flexDirection="row" justifyContent="center" sx={{ pt: 5 }}>
                    <Button
                        sx={{
                            py: 1.5,
                            px: 5,
                            background: 'linear-gradient(110.83deg, #AF59CD 12.82%, #0360B7 120.34%)',
                            borderRadius: 2.5,
                            whiteSpace: 'nowrap',
                            border: 'none'
                        }}
                    >Contact us</Button>
                </Stack>
            </Stack>
        </Stack>
    )
}