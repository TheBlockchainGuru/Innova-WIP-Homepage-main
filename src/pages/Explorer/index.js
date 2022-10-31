import React from 'react';
import {
    Box, 
    Button,
    Stack,
    Typography,
    OutlinedInput,
    useMediaQuery,
    Select
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useQuery } from 'react-query';
import DealCard from '../../components/cards/DealCard';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { categories } from '../../constants/content';
import HomeContainer from '../../components/containers/HomeContainer';
import ExplorerPattern from '../../components/patterns/ExplorerPattern';

export default function Explorer () {
    const theme = useTheme();
    const matchUpLg = useMediaQuery(theme.breakpoints.up('lg'));
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    const matchUpSm = useMediaQuery(theme.breakpoints.up('sm'));
    const navigate = useNavigate();
    const [ searchParams ] = useSearchParams();

    const c = searchParams.get('c');

    const [order, setOrder] = React.useState('createdAt');
    const [direction, setDirection] = React.useState('Desc');
    const [page, setPage] = React.useState(0);

    const handleOrder = (e) => {
        if (e.target.value === '2') {
            setOrder('createdAt');
            setDirection('Desc');
        } else if (e.target.value === '3') {
            setOrder('createdAt');
            setDirection('Desc');
        } else {
            setOrder('createdAt');
            setDirection('Desc');
        }
    }
    
    React.useEffect(() => {
        refetch();
    }, [order, direction])
        
    const  { data, isLoading, error, refetch } = useQuery("deals", () => {
        return fetch(process.env.REACT_APP_END_POINT, {
            method: 'POST',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ 
                query: `
                {
                    deals(filter:{}, page:${page}, perPage: 50, sortField: ${order}, sortOrder:${direction}) {
                        _id
                        amountSaved
                        categories {
                            _id
                            name
                        }
                        categoriesIds
                        companyDesc
                        companyLogoURL
                        companyName
                        createdAt
                        descriptionInHTML
                        externalLink
                        name
                        promoText
                        redeemedAmount
                        requirements
                        smallDesc
                        updatedAt
                        videoUrl
                    }
                }
                `
            })
        })
        .then((response) => {
            if (response.status >= 400) {
                throw new Error("Error fetching data");
            } else {
                return response.json();
            }
        })
        .then((data) => data.data)
    })

    return (
        <Box sx={{ 
                position: 'relative', 
                overflow: 'hidden' 
            }}
        >
            <HomeContainer>
                <Box
                    sx={{
                        pt: 6,
                        pb: 24,
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
                        flexDirection={matchUpMd ? "row" : "column"} 
                        justifyContent="space-between"
                        alignItems={matchUpMd ? "center": "flex-start"}
                        gap={5}
                        sx={{
                            pt: matchUpMd ? 3.5 : 1.5,
                            pb: 11
                        }}
                    >
                        <Typography variant="body2" color="text.secondary" 
                            sx={{ fontStyle: categories[c] ? 'italic' : 'inherit'}}
                        >{data && data.deals && data.deals.length ? `${data.deals.length} Deals Available` : 'No Deals Available'}</Typography>
                        <Stack
                            flexDirection={matchUpSm ? "row" : "column"}
                            justifyContent={matchUpMd ? 'inherit' : 'space-between'}
                            gap={matchUpMd ? 8 :  4}
                        >
                            <Stack
                                flexDirection={matchUpMd ? "row" : "column"}
                                alignItems={matchUpMd ? "center" : "flex-start"}
                                gap={matchUpMd ? 2 : 0.5}
                            >
                                <Typography variant="body2" color="text.secondary">Order By:</Typography>
                                <Select native
                                    size="small"
                                    onClick={handleOrder}
                                >
                                    <option value="1">Most popular first</option>
                                    <option value="2">A - Z first</option>
                                    <option value="3">Z - A first</option>
                                </Select>
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
                                        <Typography variant="h5" color="text.secondary" sx={{ fontWeight: 500 }}>We’re sorry what you’re looking for; please try another way</Typography>
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
                            gridTemplateColumns: matchUpLg 
                                                ? 'repeat(3, 1fr)' 
                                                : matchUpMd 
                                                ? 'repeat(2, 1fr)' 
                                                : 'repeat(1, 1fr)',
                            rowGap: matchUpLg ? 6 : 3,
                            columnGap: matchUpLg ? 8 : 4
                        }}
                    >
                    {(data && data.deals && data.deals.length) 
                    ?   
                        data.deals.map((element, key) =>
                            <DealCard key={key} {...element} />
                        )
                    :   
                        <></>
                    }
                    </Box>
                    }
                </Box>
            </HomeContainer>
            <ExplorerPattern />
        </Box>
    );
}