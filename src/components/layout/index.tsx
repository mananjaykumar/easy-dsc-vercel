// /* eslint-disable @typescript-eslint/no-explicit-any */
// import * as React from 'react';
// import { styled, alpha } from '@mui/material/styles';
// import {
//   AppBar,
//   Box,
//   Toolbar,
//   IconButton,
//   Typography,
//   InputBase,
//   Badge,
//   MenuItem,
//   Menu,
//   Stack,
//   Avatar,
//   Button,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import MailIcon from '@mui/icons-material/Mail';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import MoreIcon from '@mui/icons-material/MoreVert';
// import { useNavigate } from 'react-router-dom';
// import theme from '../../theme';
// import * as routes from '../../routes/constants';

// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(3),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: '20ch',
//     },
//   },
// }));

// export const Layout = ({ children }: any) => {
//   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
//   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

//   const isMenuOpen = Boolean(anchorEl);
//   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
//   const navigate = useNavigate();

//   const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMobileMenuClose = () => {
//     setMobileMoreAnchorEl(null);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     handleMobileMenuClose();
//   };

//   const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
//     setMobileMoreAnchorEl(event.currentTarget);
//   };

//   const menuId = 'primary-search-account-menu';
//   const renderMenu = (
//     <Menu
//       anchorEl={anchorEl}
//       anchorOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       id={menuId}
//       keepMounted
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       open={isMenuOpen}
//       onClose={handleMenuClose}
//     >
//       <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//       <MenuItem onClick={handleMenuClose}>My account</MenuItem>
//     </Menu>
//   );

//   const mobileMenuId = 'primary-search-account-menu-mobile';
//   const renderMobileMenu = (
//     <Menu
//       anchorEl={mobileMoreAnchorEl}
//       anchorOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       id={mobileMenuId}
//       keepMounted
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       open={isMobileMenuOpen}
//       onClose={handleMobileMenuClose}
//     >
//       <MenuItem
//         onClick={() => {
//           navigate(routes.MESSAGES);
//           handleMenuClose();
//         }}
//       >
//         <IconButton size='large' aria-label='show 4 new mails' color='inherit'>
//           <Badge badgeContent={4} color='error'>
//             <MailIcon />
//           </Badge>
//         </IconButton>
//         <p>Messages</p>
//       </MenuItem>
//       <MenuItem
//         onClick={() => {
//           navigate(routes.NOTIFICATIONS);
//           handleMenuClose();
//         }}
//       >
//         <IconButton size='large' aria-label='show 17 new notifications' color='inherit'>
//           <Badge badgeContent={17} color='error'>
//             <NotificationsIcon />
//           </Badge>
//         </IconButton>
//         <p>Notifications</p>
//       </MenuItem>
//       <MenuItem onClick={handleProfileMenuOpen}>
//         <IconButton
//           size='large'
//           aria-label='account of current user'
//           aria-controls='primary-search-account-menu'
//           aria-haspopup='true'
//           color='inherit'
//         >
//           <Avatar sx={{ backgroundColor: theme.palette.secondary.main }}>M</Avatar>
//         </IconButton>
//         <p>Profile</p>
//       </MenuItem>
//     </Menu>
//   );

//   return (
//     <Stack>
//       <Box sx={{ flexGrow: 1 }}>
//         <AppBar position='static'>
//           <Toolbar>
//             <IconButton
//               size='large'
//               edge='start'
//               color='inherit'
//               aria-label='open drawer'
//               sx={{ mr: 2 }}
//               onClick={() => {
//                 navigate(routes.ROOT);
//               }}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Typography
//               variant='h6'
//               noWrap
//               component='div'
//               sx={{ display: { xs: 'none', sm: 'block', cursor: 'pointer' } }}
//               onClick={() => {
//                 navigate(routes.ROOT);
//               }}
//             >
//               Unique Services Company
//             </Typography>
//             <Search>
//               <SearchIconWrapper>
//                 <SearchIcon />
//               </SearchIconWrapper>
//               <StyledInputBase placeholder='Search…' inputProps={{ 'aria-label': 'search' }} />
//             </Search>
//             <Box sx={{ flexGrow: 1 }} />
//             <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
//               <IconButton
//                 size='large'
//                 aria-label='show 4 new mails'
//                 color='inherit'
//                 onClick={() => {
//                   navigate(routes.MESSAGES);
//                 }}
//               >
//                 <Badge badgeContent={4} color='error'>
//                   <MailIcon />
//                 </Badge>
//               </IconButton>
//               <IconButton
//                 size='large'
//                 aria-label='show 17 new notifications'
//                 color='inherit'
//                 onClick={() => {
//                   navigate(routes.NOTIFICATIONS);
//                 }}
//               >
//                 <Badge badgeContent={17} color='error'>
//                   <NotificationsIcon />
//                 </Badge>
//               </IconButton>
//               <IconButton
//                 size='large'
//                 edge='end'
//                 aria-label='account of current user'
//                 aria-controls={menuId}
//                 aria-haspopup='true'
//                 onClick={handleProfileMenuOpen}
//                 color='inherit'
//               >
//                 {/* <Avatar sx={{ backgroundColor: theme.palette.secondary.main }}>M</Avatar> */}
//                 Login
//               </IconButton>
//             </Box>
//             <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
//               <IconButton
//                 size='large'
//                 aria-label='show more'
//                 aria-controls={mobileMenuId}
//                 aria-haspopup='true'
//                 onClick={handleMobileMenuOpen}
//                 color='inherit'
//               >
//                 <MoreIcon />
//               </IconButton>
//             </Box>
//           </Toolbar>
//         </AppBar>
//         {renderMobileMenu}
//         {renderMenu}
//       </Box>
//       <Stack flexGrow={1}>{children}</Stack>
//     </Stack>
//   );
// };

/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Stack,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import * as routes from '../../routes/constants';
import toast from 'react-hot-toast';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { logout } from '../../store/slices/AuthSlice';
import { useDispatch, useSelector } from 'react-redux';
import theme from '../../theme';

interface Props {
  children: any;
}

export const Layout = ({ children }: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userData } = useSelector((state: any) => state.auth);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    // handleMobileMenuClose();
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      sx={{
        '& .MuiList-root': {
          padding: '5px',
          display: 'flex',
          flexDirection: 'column',
          gap: theme.spacing(0.6),
        },
        '& .MuiMenuItem-root': {
          backgroundColor: theme.palette.grey[100],
          borderRadius: '4px',
          fontSize: '13px',
          '&:hover': {
            backgroundColor: '#EDF5FF',
          },
        },
      }}
    >
      <MenuItem
        onClick={() => {
          navigate(routes.DASHBOARD);
          handleMenuClose();
        }}
      >
        Dashboard
      </MenuItem>
      <MenuItem
        onClick={() => {
          navigate(routes.SERVICES('accounting'));
          handleMenuClose();
        }}
      >
        Accounting
      </MenuItem>
      <MenuItem
        onClick={() => {
          navigate(routes.SERVICES('it-returns'));
          handleMenuClose();
        }}
      >
        IT Returns
      </MenuItem>
      <MenuItem
        onClick={() => {
          navigate(routes.SERVICES('trading'));
          handleMenuClose();
        }}
      >
        Trading
      </MenuItem>
      <MenuItem
        onClick={() => {
          navigate(routes.DOCUMENTS);
          handleMenuClose();
        }}
      >
        Documents
      </MenuItem>
      {!userData?.role?.includes('admin') && (
        <MenuItem
          onClick={() => {
            navigate(routes.ADMIN_LOGIN);
            handleMenuClose();
          }}
        >
          Admin Login
        </MenuItem>
      )}
      {userData?.role?.includes('admin') && (
        <MenuItem
          onClick={() => {
            navigate(routes.ADMIN_UPLOAD_DOCUMENTS);
            handleMenuClose();
          }}
        >
          Upload Documents
        </MenuItem>
      )}
    </Menu>
  );
  return (
    <Stack>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position='fixed'
          sx={{
            boxShadow: '0 15px 40px -20px rgba(40,44,63,.15)',
            backgroundColor: '#fff',
            padding: '20px',
            zIndex: 1000,
            transform: 'translateZ(0)',
            transition: 'transform .3s ease',
            // contain: "size layout style",
            height: '120px',
            color: '#3d4152',
          }}
        >
          <Toolbar>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2 }}
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant='h6'
              component='div'
              sx={{ flexGrow: 1, cursor: 'pointer' }}
              onClick={() => navigate(routes.ROOT)}
            >
              Unique Services Company
            </Typography>
            {userData?.token ? (
              <Button
                // color='inherit'
                variant='outlined'
                sx={{
                  backgroundColor: 'white',
                  '&:hover': {
                    backgroundColor: 'white',
                    color: theme.palette.primary.main,
                    '&:hover': {
                      transform: 'scale(1.1,1.1)',
                      transition: 'transform 0.2s',
                    },
                  },
                }}
                startIcon={<LogoutIcon />}
                onClick={() => {
                  dispatch(logout());
                  toast.success('Logged Out Successfully!');
                }}
              >
                Logout
              </Button>
            ) : (
              <Button
                // color='inherit'
                variant='outlined'
                sx={{
                  backgroundColor: 'white',
                  '&:hover': {
                    backgroundColor: 'white',
                    color: theme.palette.primary.main,
                    '&:hover': {
                      transform: 'scale(1.1,1.1)',
                      transition: 'transform 0.2s',
                    },
                  },
                }}
                startIcon={<LoginIcon />}
                onClick={() => {
                  navigate(routes.LOGIN);
                }}
              >
                Login
              </Button>
            )}
          </Toolbar>
        </AppBar>
        {renderMenu}
      </Box>
      <Stack flexGrow={1}>{children}</Stack>
    </Stack>
  );
};
