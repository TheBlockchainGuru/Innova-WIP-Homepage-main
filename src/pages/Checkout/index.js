import React from 'react';
import {
    Box, 
    Button,
    Checkbox,
    Divider,
    OutlinedInput, 
    Stack,
    Typography
} from '@mui/material';
import PaymentComplete from '../../components/modals/PaymentComplete';

export default function Checkout () {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
        <Box
            sx={{ 
                pt: 20,
                pb: 21
            }}
        >
            <Stack gap={2}>
                <Typography variant="h1" sx={{ textAlign: 'center' }}>Checkout</Typography>
                <Stack>
                    <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                    Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor incididunt
                    </Typography>
                </Stack>
            </Stack>
            <Stack
                flexDirection="row"
                alignItems="flex-start"
                gap={6}
                sx={{
                    pt: 16.5,
                    px: 17
                }}
            >
                <Box
                    flex={3}
                    sx={{
                        background: 'linear-gradient(116.41deg, rgba(103, 103, 103, 0.35) -56.52%, rgba(45, 37, 58, 0.35) 130.2%)',
                        boxShadow: '0px 1.45455px 36.3636px rgba(69, 42, 124, 0.1)',
                        backdropFilter: 'blur(42.5447px)',
                        borderRadius: 3.5,
                        px: 7,
                        py: 6
                    }}
                >
                    <Stack gap={6}>
                        <Typography variant="h5" sx={{ fontWeight: 600 }}>Start saving on AWS Activate</Typography>
                        <Stack gap={3.5}>
                            <Stack flexDirection="row" justifyContent="space-between" gap={6}>
                                <Stack flexDirection="row" gap={2.5}>
                                    <Checkbox sx={{  p: 0 }} />
                                    <Stack gap={.5}>
                                        <Typography variant="body2" sx={{ color: '#C090FF', fontWeight: 700 }}>Pay only for the AWS Activate deal</Typography>
                                        <Typography variant="caption">Pay only 149$ to get access to the AWS Activate deal</Typography>
                                    </Stack>
                                </Stack>
                                <Typography variant="body2" sx={{ fontWeight: 800 }}>$149</Typography>
                            </Stack>
                            <Stack flexDirection="row" justifyContent="space-between" gap={6}>
                                <Stack flexDirection="row" gap={2.5}>
                                    <Checkbox sx={{  p: 0 }} />
                                    <Stack gap={.5}>
                                        <Typography variant="body2" sx={{ color: '#C090FF', fontWeight: 700 }}>Unlimited access to all deals</Typography>
                                        <Typography variant="caption">Get access to all our deals including AWS Activate with our Unlimited subscription</Typography>
                                    </Stack>
                                </Stack>
                                <Typography variant="body2" sx={{ fontWeight: 800 }}>$199/y</Typography>
                            </Stack>
                        </Stack>
                        <Stack gap={3.5}>
                            <Stack gap={.5}>
                                <Typography variant="caption">Company*</Typography>
                                <OutlinedInput size="small" />
                            </Stack>
                            <Stack gap={.5}>
                                <Typography variant="caption">Country*</Typography>
                                <OutlinedInput size="small" placeholder="United States" />
                            </Stack>
                        </Stack>
                    </Stack>
                    <Box sx={{ pt: 8, pb: 6 }}>
                        <Divider />
                    </Box>
                    <Stack gap={4}>
                        <Typography variant="h5" sx={{ fontFamily: 'Syne', fontWeight: 600 }}>Payment Details</Typography>
                        <Stack gap={.5}>
                            <Typography variant="caption">Credit Card*</Typography>
                            <OutlinedInput 
                                size="small"
                                startAdornment={
                                    <></>
                                }
                                placeholder="Card Number"
                            />
                        </Stack>
                        <Stack flexDirection="row" gap={2}>
                            <Checkbox /> 
                            <Typography variant="caption">By clicking on the next button you accept our Terms of Use and confirm that you have read our Privacy Policy</Typography>
                        </Stack>
                        <Button
                            fullWidth
                            sx={{
                                background: 'linear-gradient(110.83deg, #AF59CD 12.82%, #0360B7 120.34%)',
                                borderRadius: 2,
                                py: 1.5
                            }}
                            onClick={handleOpen}
                        >
                            Complete Purchase
                        </Button>
                    </Stack>
                </Box>
                <Stack
                    flex={2}
                    gap={6}
                    sx={{
                        background: 'linear-gradient(110.83deg, rgba(175, 89, 205, 0.25) 12.82%, rgba(3, 96, 183, 0.25) 120.34%)',
                        boxShadow: '0px 16px 40px rgba(175, 89, 206, 0.33)',
                        borderRadius: 3.5,
                        px: 7,
                        py: 6
                    }}
                >
                    <Typography variant="h4" sx={{ fontFamily: 'Syne', fontWeight: 600 }}>Order Summary</Typography>
                    <Stack gap={1} sx={{ pt: 6 }}>
                        <Stack 
                            flexDirection="row" 
                            alignItems="center"
                            justifyContent="space-between" 
                            sx={{ py: 2,
                                borderBottom: '1px solid rgba(255, 255, 255, 0.15)'
                            }}
                        >
                            <Typography variant="body2" sx={{ fontWeight: 400, color: '#CAAFED' }}>Subtotal</Typography>
                            <Typography>$199</Typography>
                        </Stack>
                        <Stack
                            flexDirection="row" 
                            alignItems="center"
                            justifyContent="space-between" 
                            sx={{ py: 2,
                                borderBottom: '1px solid rgba(255, 255, 255, 0.15)'
                            }}
                        >
                            <Typography variant="body2" sx={{ fontWeight: 400, color: '#CAAFED' }}>VAT</Typography>
                            <Typography variant="body2">$0</Typography>
                        </Stack>
                        <Stack 
                            flexDirection="row" 
                            alignItems="center"
                            justifyContent="space-between" 
                            sx={{ py: 2 }}
                        >
                            <Typography variant="subtitle1" sx={{ color: '#AE70FF' }}>Total</Typography>
                            <Typography variant="subtitle1">$199</Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
            <PaymentComplete 
                open={open}
                handleOpen={handleOpen}
                handleClose={handleClose}
            />
        </Box>
    );
}