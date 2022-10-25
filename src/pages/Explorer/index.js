import React from 'react';
import {
    Box, 
    Button,
    Stack,
    Typography,
    OutlinedInput
} from '@mui/material';
import DealCard from '../../components/cards/DealCard';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { categories } from '../../constants/content';

export default function Explorer () {
    const navigate = useNavigate();
    const [ searchParams ] = useSearchParams();

    const c = searchParams.get('c');
    
    return (
        <Box
            sx={{
                px: 14,
                pt: 6,
                pb: 24
            }}
        >
            <Stack flexDirection="row">
                <Box
                    component="img"
                    src="/images/spark.png"
                    sx={{
                        position: 'relative',
                        left: -20
                    }}
                />
            </Stack>
            <Typography variant="h1" sx={{ textTransform: 'uppercase' }}>{categories[c] ? categories[c].title : "All Deals"}</Typography>
            <Stack
                flexDirection="row"
                justifyContent="space-between"
                sx={{
                    pt: 3.5,
                    pb: 11
                }}
            >
                <Typography variant="body2" color="text.secondary" 
                    sx={{ fontStyle: categories[c] ? 'italic' : 'inherit'}}>{categories[c] ? "No Deals Available" : "217 Deals Available"}</Typography>
                <Stack
                    flexDirection="row"
                    gap={8}
                >
                    <Stack
                        flexDirection="row"
                        alignItems="center"
                        gap={2}
                    >
                        <Typography variant="body2" color="text.secondary">Filter By:</Typography>
                        <OutlinedInput 
                            placeholder='All Deals'
                            size="small"
                        />
                    </Stack>
                    <Stack
                        flexDirection="row"
                        alignItems="center"
                        gap={2}
                    >
                        <Typography variant="body2" color="text.secondary">Order By:</Typography>
                        <OutlinedInput 
                            placeholder='Most popular first'
                            size="small"
                        />
                    </Stack>
                </Stack>
            </Stack>
                {categories[c] ?

                    <Stack
                        alignItems="center"
                        justifyContent="center"
                        sx={{
                            py: 30
                        }}
                    >
                        <Stack gap={5}>
                            <Stack gap={2}>
                                <Typography variant="h1">Sorry, No Result found ☹️</Typography>
                                <Typography variant="h5" color="text.secondary" sx={{ fontSize: 500 }}>We’re sorry what you’re looking for; please try another way</Typography>
                            </Stack>
                            <Stack flexDirection="row">
                                <Button variant="outlined" onClick={() => navigate('/')}>Back to Home</Button>
                            </Stack>
                        </Stack>
                    </Stack>
                :
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    rowGap: 6,
                    columnGap: 8
                }}
            >
                {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18].map((item, key) =>
                    <DealCard key={key} {...item} />
                )}
            </Box>
            }
        </Box>
    );
}