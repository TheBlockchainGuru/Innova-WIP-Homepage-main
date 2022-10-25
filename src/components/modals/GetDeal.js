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
    p: .5
};

export default function GetDeal ({open, handleClose}) {
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
                sx={style}
            >
                <Stack 
                    alignItems="center"
                    gap={8}
                    sx={{
                        py: 7,
                        background: 'rgba(100, 87, 142, 0.31)',
                        borderRadius: 2
                    }}
                    
                >
                    <Typography variant="h5" sx={{ 
                        fontFamily: 'Syne', 
                        fontWeight: 600, 
                        textAlign: 'center',
                        maxWidth: 360
                    }}>
                        Do you confirm you wish to get access to this deal ? 
                    </Typography>
                    <Stack flexDirection="row" justifyContent="center" gap={3}>
                        <Button
                            onClick={() => navigate('/')}
                            size="small"
                            variant="outlined"
                            sx={{
                                borderRadius: 2.5,
                                px: 3.5,
                                py: 1
                            }}
                        >No</Button>
                        <Button
                            onClick={() => navigate('/')}
                            size="small"
                            sx={{
                                background: 'linear-gradient(110.83deg, #AF59CD 12.82%, #0360B7 120.34%)',
                                borderRadius: 2.5,
                                px: 3.5,
                                py: 1
                            }}
                        >Yes</Button>
                    </Stack>
                </Stack>
            </Stack>
        </Modal>
    )
}