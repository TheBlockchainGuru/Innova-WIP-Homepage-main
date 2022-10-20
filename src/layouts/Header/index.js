import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import {
    MenuItem,
    useMediaQuery,
    Stack,
    OutlinedInput,
    Divider
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

const pages = [{
        title: 'Explore',
        href: '/explore'
    }, {
        title: 'Pricing',
        href: '/pricing'
    }, {
        title: 'Affiliation',
        href: '/affiliation'
    }, {
        title: 'Blog',
        href: '/blog'
    }, {
        title: 'Sign In',
        href: '/login'
    }, {
        title: 'Join Us',
        href: '/join'
    }
];

const categories = ['No Code', 'Nft', 'Defi', 'Ico', 'Tools', 'Utility', 'Agency', 'Instant']
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function Header () {

    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    const matchUpSm = useMediaQuery(theme.breakpoints.up('sm'));
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
  
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
                    px: 9,
                    gap: matchUpMd ? 5 : 3,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Stack>
                    <Box 
                        component="img"
                        src="/images/logo.png" 
                    />
                </Stack>
                <OutlinedInput 
                    size="small"
                    fullWidth
                    startAdornment={<SearchIcon />}
                    placeholder="Search by deal..."
                    sx={{
                        gap: 2,
                        fontFamily: 'Epilogue',
                        fontStyle: 'italic',
                        fontWeight: 300,
                        bgcolor: '#222129',
                    }}
                />
                { matchUpMd ? 
                <>
                {['Explore', 'Pricing', 'Affiliation', 'Blog'].map((item, key) =>
                    <Link
                        style={{
                            textDecoration: 'none',
                            color: 'inherit'
                        }}
                    >
                        <Typography>{item}</Typography>
                    </Link>
                )}
                <Button
                    variant="outlined"
                    sx={{
                        px: 4,
                        whiteSpace: 'nowrap'
                    }}
                >
                    Sign in
                </Button>
                <Button
                    variant="contained"
                    // fullWidth
                    sx={{
                        px: 4,
                        whiteSpace: 'nowrap',
                        background: 'linear-gradient(110.83deg, #AF59CD 12.82%, #0360B7 120.34%)'
                    }}
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
                    sx={{ mt: '45px' }}
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
                    {pages.map((page, key) => (
                    <MenuItem key={key} onClick={() => handleCloseUserMenu}>
                        <Link to={page.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Typography textAlign="center">{page.title}</Typography>
                        </Link>
                    </MenuItem>
                    ))}
                    {!matchUpMd ?
                    <MenuItem onClick={handleCloseUserMenu}>
                        <Typography
                        onClick={handleClickOpen}
                        sx={{ 
                            cursor: 'pointer',
                            display: {
                                xs: 'none',
                                md: 'block'
                            }
                        }}
                        >Contact Us</Typography>
                    </MenuItem>
                    :   <></>
                    }
                </Menu>
            </Toolbar>
            <Divider />
            <Stack
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{
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
                        color: '#FFFFFF'
                    }}
                >Categories:</Typography>
                {categories.map((item, key) =>
                    <Typography
                        variant="caption"
                        sx={{
                            color: '#D4B4FF',
                            fontFamily: 'Syne',
                            fontWeight: 500,
                            textTransform: 'uppercase'
                        }}
                    >{item}</Typography>
                )}
            </Stack>

        </AppBar>
    );
}