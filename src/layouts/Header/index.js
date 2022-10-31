import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import {
    MenuItem,
    useMediaQuery,
    Stack,
    OutlinedInput,
    Divider
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useQuery } from 'react-query';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { categories, pages } from '../../constants/content';
import HomeContainer from '../../components/containers/HomeContainer';
   
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

export default function Header () {
    const  { data, isLoading, error } = useQuery("categories", () => {
        return fetch(process.env.REACT_APP_END_POINT, {
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
    const navigate = useNavigate();
    const [ searchParams ] = useSearchParams();
    const c = searchParams.get('c');
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    const matchUpSm = useMediaQuery(theme.breakpoints.up('sm'));
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <AppBar position="static" 
            sx={{ 
                bgcolor: theme.palette.background.default,
                backgroundImage: 'none',
                boxShadow: 'none',
                border: `1px solid ${theme.palette.divider}`
            }}
        >
            <Toolbar 
                disableGutters 
                sx={{
                    gap: matchUpMd ? 5 : 3,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    px: matchUpMd ? 9 : matchUpSm ? 5 : 2,
                }}
            >
                <Stack>
                    <Box 
                        component="img"
                        src="/images/logo.png" 
                        onClick={() => navigate('/')}
                        sx={{
                            cursor: 'pointer'
                        }}
                    />
                </Stack>
                <OutlinedInput 
                    size="small"
                    fullWidth
                    startAdornment={<SearchIcon />}
                    placeholder="Search by deal..."
                    sx={{
                        gap: 2,
                        fontWeight: 300,
                        bgcolor: '#222129',
                        '& input::placeholder': {
                            fontStyle: 'italic',
                        }
                    }}
                />
                { matchUpMd ? 
                <>
                {['Explore', 'Pricing', 'Affiliation', 'Blog'].map((item, key) =>
                    <Link
                        key={key}
                        to={`/${item.toLowerCase()}`}
                        style={{
                            textDecoration: 'none',
                        }}
                    >
                        <Typography
                            color="text.secondary"
                            sx={{
                                // color: '#F1F2F2',
                                '&:hover': {
                                    color: '#fff'
                                }
                            }}
                        >{item}</Typography>
                    </Link>
                )}
                <Button
                    variant="outlined"
                    sx={{
                        px: 4,
                        whiteSpace: 'nowrap'
                    }}
                    onClick={() => navigate('/login')}
                >
                    Sign in
                </Button>
                <Button
                    variant="contained"
                    sx={{
                        px: 4,
                        whiteSpace: 'nowrap',
                        background: 'linear-gradient(110.83deg, #AF59CD 12.82%, #0360B7 120.34%)'
                    }}
                    onClick={() => navigate('/register')}
                >Join us</Button>
                </>
                :
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={handleOpenUserMenu}
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                }
                <Menu
                    sx={{
                        '& .MuiPaper-root': {
                            width: '100%',
                            background: 'rgba(38, 38, 38, 0.84)',
                            backdropFilter: 'blur(10px)',
                            minHeight: '100vh',
                            maxWidth: '100%',
                            maxHeight: '100%',
                            top: '0 !important',
                            left: '0 !important',
                            p: 4,
                            px: matchUpSm ? 4 : 2
                        }
                    }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                >
                    <Stack 
                        flexDirection="row" 
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Stack flexDirection="row">
                            <Box 
                                component="img"
                                src="/images/logo.png"
                            />
                        </Stack>
                        <CloseIcon 
                            onClick={handleCloseUserMenu}
                            sx={{ 
                                fontSize: 32,
                                cursor: 'pointer'
                            }}
                        />
                    </Stack>
                    <Stack
                        flexDirection="row"
                        sx={{
                            pt: 16
                        }}
                    >
                        <Stack flex={1} gap={5}>
                        {['Explore', 'Pricing', 'Affiliation', 'Blog'].map((ele, key) => 
                            <Typography 
                                variant="subtitle1" 
                                key={key}
                                onClick={() => {handleCloseUserMenu(); navigate('/' + ele.toLowerCase())}}
                                style={{
                                    cursor: 'pointer'
                                }}
                            >
                                {ele}
                            </Typography>
                        )}
                        </Stack>
                        <Stack flex={1}>
                            <Typography variant="subtitle1" sx={{ color: '#8E55FF' }}>Categories</Typography>
                            <Stack flexDirection="row" gap={3}>
                                <Divider 
                                    orientation='vertical'
                                    flexItem
                                />
                                <Stack gap={4}>
                                {(data && data.categories && data.categories.length)
                                ?   data.categories.map((item, key) =>
                                    <Typography
                                        key={key}
                                        variant="caption"
                                        onClick={() => {handleCloseUserMenu(); navigate('/explore?c=' + item._id)}}
                                        sx={{
                                            cursor: 'pointer',
                                            fontWeight: 500,
                                            textTransform: 'uppercase',
                                            textDecoration: c === item._id ? 'underline' : 'none',
                                            color: c === item._id ? '#b075ff' : 'text.secondary'
                                        }}
                                    >{item.name}</Typography>
                                    )
                                :   <></>
                                }
                                </Stack>
                            </Stack>
                        </Stack>

                    </Stack>
                    <Stack 
                        flexDirection="row"
                        gap={matchUpSm ? 4 : 2}
                        sx={{
                            pt: 25
                        }}
                    >
                        <Button
                            variant="outlined"
                            fullWidth
                            sx={{
                                px: 4,
                                whiteSpace: 'nowrap'
                            }}
                            onClick={() => {handleCloseUserMenu(); navigate('/login')}}
                        >
                            Sign in
                        </Button>
                        <Button
                            variant="contained"
                            fullWidth
                            sx={{
                                px: 4,
                                whiteSpace: 'nowrap',
                                background: 'linear-gradient(110.83deg, #AF59CD 12.82%, #0360B7 120.34%)'
                            }}
                            onClick={() => { handleCloseUserMenu(); navigate('/register')}}
                        >Join us</Button>
                    </Stack>
                </Menu>
            </Toolbar>
            <Divider />
            <Stack
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{
                    bgcolor: 'rgba(0,0,0,0.26)',
                    display: {
                        md: 'flex',
                        xs: 'none'
                    },
                    px: 9,
                    py: 3
                }}
            >
                <Typography
                    variant="caption"
                    sx={{
                        color: '#FFFFFF',
                        fontWeight: 500
                    }}
                >Categories:</Typography>
                {(data && data.categories && data.categories.length) 
                ?
                    data.categories.map((item, key) =>
                    <Link 
                        key={key}
                        to={`/explore?c=${item._id}`} 
                        style={{ 
                            color: 'inherit',
                            textDecoration: 'none'
                        }}
                    >
                        <Typography
                            variant="caption"
                            sx={{
                                display: 'block',
                                color: '#D4B4FF',
                                fontFamily: 'Roboto',
                                fontWeight: 500,
                                textTransform: 'uppercase',
                                textDecoration: c === item._id ? 'underline' : 'none',
                                color: c === item._id ? '#b075ff' : "text.secondary",
                                '&:hover': {
                                    transform: 'scaleX(1.1)',
                                }
                            }}
                        >{item.name}</Typography>
                    </Link>
                    )
                :   <></>
                }
            </Stack>
        </AppBar>
    );
}