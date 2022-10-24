import {
    Box,
    Stack,
    Typography
} from '@mui/material';
import ActiaveCard from '../../../components/cards/ActivateCard';

export default function Alternatives () {
    return (
        <Box
            sx={{
                pt: 12,
                pb: 16,
                px: 7.5,
                bgcolor: 'rgba(0, 0, 0, 0.18)'
            }}
        >
            <Typography variant="h5" sx={{ color: '#C69BFF' }}>Alternative to AWS Activate</Typography>
            <Box sx={{ 
                pt: 5,
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                rowGap: 4.5,
                columnGap: 5
            }}>
            {[1,2,3,4].map((ele,key) => 
                <ActiaveCard key={key} />
            )}
            </Box>
        </Box>
    )
}