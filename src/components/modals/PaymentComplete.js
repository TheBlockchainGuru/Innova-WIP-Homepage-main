import {
    Box,
    Button,
    Stack,
    Typography,
    Modal,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    maxWidth: 454,
    background: 'linear-gradient(110.83deg, rgba(175, 89, 205, 0.25) 12.82%, rgba(3, 96, 183, 0.25) 120.34%)',
    boxShadow: '0px 16px 40px rgba(175, 89, 206, 0.33)',
    borderRadius: 3.5,
    boxShadow: 24,
    py: 7,
    px: 6
};

export default function PaymentComplete ({open, handleClose}) {
    const navigate = useNavigate();
    return ( 
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
                background: 'rgba(38, 38, 38, 0.51)',
                backdropFilter: 'blur(10px)',
            }}
        >
            <Stack 
                alignItems="center"
                gap={4}
                sx={style}
            >
                <Stack flexDirection="row">
                    <Box component="img"
                        // sx={{ width: 64, height: 64 }}
                        src="/images/check-big.png" />
                </Stack>
                <Typography variant="h5" sx={{ fontFamily: 'Syne', fontWeight: 600, textAlign: 'center' }}>
                    Payment Complete!
                </Typography>
                <Typography variant="caption" sx={{ textAlign: 'center'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                </Typography>
                <Stack flexDirection="row" justifyContent="center">
                    <Button
                        onClick={() => navigate('/')}
                        size="small"
                        sx={{
                            background: 'linear-gradient(110.83deg, #AF59CD 12.82%, #0360B7 120.34%)',
                            borderRadius: 2.5,
                            px: 6,
                            py: 1.5
                        }}
                    >Return to Home</Button>
                </Stack>
            </Stack>
        </Modal>
    )
}