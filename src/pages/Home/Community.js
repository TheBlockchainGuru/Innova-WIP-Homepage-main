import {
    Button,

    Box,
    Typography,
    OutlinedInput 
} from "@mui/material";

export default function Community () {
    return (
        <Box>
            <Typography>Join our Community today</Typography>
            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Integer nec odio. 
                Praesent libero. 
            </Typography>
            <OutlinedInput 
                endAdornment={
                    <Button variant="outlined">Subscribe Now</Button>
                }
            />
            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Integer nec odio. 
                Praesent libero. 
            </Typography>
        </Box>
    )
}