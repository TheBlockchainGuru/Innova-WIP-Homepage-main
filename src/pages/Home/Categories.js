import {
    Button,
    Box,
    Stack,
    Typography,
    useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useQuery } from 'react-query';
import CategoryCard from '../../components/cards/CategoryCard';
import HomeContainer from '../../components/containers/HomeContainer';
// import { categories } from '../../constants/content';

const endPoint = 'http://localhost:3000/graphql/';
const CATEGORY_QUERY = `
{
    categories(filter:{}, page:0, perPage: 8, sortField: createdAt, sortOrder:Desc) {
        _id
        createdAt
        deleted {
            adminId
            date
        }
        imageUrl
        name
        updatedAt
    }
}
`
export default function Categories () {
    const  { data, isLoading, error } = useQuery("categories", () => {
        return fetch(endPoint, {
            method: 'POST',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ query: CATEGORY_QUERY })
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
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    const matchUpLg = useMediaQuery(theme.breakpoints.up('lg'));
    const matchUpSm = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <HomeContainer>
            <Typography
                variant="h3"
                sx={{
                    lineHeight: '64px',
                    textAlign: 'center'
                }}
            >Categories</Typography>
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
                    width: '100%',
                    gridTemplateColumns: matchUpLg 
                                        ? 'repeat(4, 1fr)' 
                                        : matchUpMd
                                        ? 'repeat(3, 1fr)'
                                        : matchUpSm 
                                        ? 'repeat(2, 1fr)'
                                        : 'repeat(1, 1fr)',
                    rowGap: matchUpLg ? 6 : 3,
                    columnGap: matchUpLg ? 8 : 4
                }}
            >
                {data && data.categories && data.categories.length
                ?
                    data.categories.map((category, key) => 
                        <CategoryCard key={key} {...category} index={key} />
                    )
                :   <></>
                }
            </Box>
        </HomeContainer>
    )
}