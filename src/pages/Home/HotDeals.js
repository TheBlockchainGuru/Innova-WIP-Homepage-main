import {
    Button,
    Box,
    Stack,
    Typography,
    useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import DealCard from  '../../components/cards/DealCard';
import HomeContainer from '../../components/containers/HomeContainer';

const endpoint = "http://localhost:3000/graphql/";
const DEAL_QUERY = `
{
    deals(filter:{}, page:0, perPage: 6, sortField: createdAt, sortOrder:Desc) {
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
}`

export default function HotDeals () {
    const  { data, isLoading, error } = useQuery("deals", () => {
        return fetch(endpoint, {
            method: 'POST',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ query: DEAL_QUERY })
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

    const theme = useTheme();
    const navigate = useNavigate();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    const matchUpLg = useMediaQuery(theme.breakpoints.up('lg'));

    return (
        <HomeContainer>
            <Typography
                variant="h3"
                sx={{
                    lineHeight: '64px',
                    textAlign: 'center'
                }}
            >Hot Deals</Typography>
            <Stack
                flexDirection="row"
                justifyContent="center"
                sx={{
                    pt: matchUpMd ? 3: 0,
                    pb: matchUpMd ? 7.5: 9
                }}
            >
                <Typography
                    color="text.secondary"
                    sx={{
                        maxWidth: 445,
                        textAlign: 'center'
                    }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Integer nec odio. 
                    Praesent libero. 
                </Typography>
            </Stack>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: matchUpLg ? 'repeat(3, 1fr)' : matchUpMd ? 'repeat(2, 1fr)' : 'repeat(1, 1fr)',
                    rowGap: matchUpLg ? 6 : 3,
                    columnGap: matchUpLg ? 8 : 4
                }}
            >
                {data && data.deals && data.deals.length
                ?
                    data.deals.map((element, key) => 
                        <DealCard key={key} {...element} />
                    )
                :   <></>
                }
            </Box>
            <Stack flexDirection="row" justifyContent="center" sx={{ pt: 10 }}>
                <Button 
                    variant="outlined" 
                    sx={{ 
                        px: 4.5, 
                        py: 1.5, 
                        lineHeight: 1,
                        borderRadius: 2.5
                    }}
                    onClick={() => navigate('/explore')}
                >View all deals</Button>
            </Stack>
        </HomeContainer>
    )
}