import { 
    Box,
    Stack,
    Typography
} from "@mui/material";

export default function ActiaveCard () {
    return (
        <Box
            sx={{
                p: 3.5,
                background: 'linear-gradient(116.41deg, rgba(103, 103, 103, 0.5) -56.52%, rgba(45, 37, 58, 0.5) 130.2%)',
                boxShadow: '0px 1.45455px 36.3636px rgba(69, 42, 124, 0.1)',
                backdropFilter: 'blur(42.5447px)',
                borderRadius: 3.5,
                border: '4px solid #695f7d',
            }}
        >
            <Stack flexDirection="row" alignItems="center" gap={2.5}>
                <Stack flexDirection="row">
                    <Box src="/images/aws.png" component="img" />
                </Stack>
                <Stack>
                    <Typography variant="h5">AWS Activate</Typography>
                    <Typography variant="caption" color="text.secondary">Amazon's Cloud Services Platform</Typography>
                </Stack>
            </Stack>
        </Box>
    )
}