import {
    Button,
    Box,
    Stack,
    Typography,
    OutlinedInput 
} from "@mui/material";

export default function Community () {
    return (
        <Stack
            alignItems="center"
            gap={8}
            sx={{
                background: 'linear-gradient(116.41deg, rgba(103, 103, 103, 0.22) -56.52%, rgba(45, 37, 58, 0.22) 130.2%)',
                boxShadow: '0px 1.45455px 36.3636px rgba(69, 42, 124, 0.1)',
                backdropFilter: 'blur(42.5447px)',
                py: 10,
                pb: 9, 
            }}
        >
            <Stack gap={2}>
                <Typography variant="h3" sx={{ textAlign: 'center' }}>Join our Community today</Typography>
                <Typography color="text.secondary" sx={{ textAlign: 'center' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Integer nec odio. 
                    Praesent libero. 
                </Typography>
            </Stack>
            <Stack gap={3}>
                <OutlinedInput 
                    endAdornment={
                        <Stack flexDirection="row" sx={{ p: 1 }}>
                            <Button variant="outlined" 
                                sx={{ 
                                    background: 'linear-gradient(110.83deg, #AF59CD 12.82%, #0360B7 120.34%)',
                                    borderRadius: 2.5,
                                    whiteSpace: 'nowrap',
                                    border: 'none'
                                }}
                            >Subscribe Now</Button>
                        </Stack>
                    }
                    placeholder="Your Email"
                    size="small"
                    sx={{
                        background: 'linear-gradient(116.41deg, rgba(0, 0, 0, 0.5) -56.52%, rgba(29, 22, 43, 0.5) 130.2%)',
                        boxShadow: '0px 1.45455px 36.3636px rgba(69, 42, 124, 0.1)',
                        backdropFilter: 'blur(42.5447px)',
                        borderRadius: 3.5,
                        border: '1px solid #C0B6D6',
                        pr: 0
                    }}
                />
                <Typography variant="caption" color="text.primary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Integer nec odio. 
                    Praesent libero. 
                </Typography>
            </Stack>
        </Stack>
    )
}