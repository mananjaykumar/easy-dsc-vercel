/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { Avatar, Button, TextField, Paper, Box, Grid, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import * as routes from '../routes/constants';
import { useLocation, Link } from 'react-router-dom';
import Signup from './Signup';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { login } from '../store/slices/AuthSlice';
import { setProgress } from '../store/slices/ProgressSlice';

const Login = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    dispatch(setProgress({ progress: 10 }));
    setLoading(true);
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    dispatch(setProgress({ progress: 30 }));
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/login`, {
        email: data.get('email'),
        password: data.get('password'),
      })
      .then((res) => {
        // localStorage.setItem('userData', JSON.stringify(res.data));
        dispatch(setProgress({ progress: 70 }));
        toast.success(res?.data?.message);
        setLoading(false);
        // login(res?.data);
        dispatch(login({ userInfo: res?.data?.data }));
        dispatch(setProgress({ progress: 100 }));
        // navigate(routes.ROOT);
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
        setLoading(false);
        dispatch(setProgress({ progress: 100 }));
      });
  };

  return (
    <Grid container component='main' sx={{ height: '91vh', marginTop: '-10px' }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {location.pathname !== '/signup' ? (
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h1'>
              Please Log in First !
            </Typography>
            <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin='normal'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                autoFocus
              />
              <TextField
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
              />
              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
                startIcon={loading && <CircularProgress size='20px' />}
                disabled={loading}
              >
                Sign In
              </Button>
              <Grid container spacing={1}>
                <Grid item xs>
                  <Link to=''>Forgot password?</Link>
                </Grid>
                <Grid item>
                  <Link to={routes.SIGNUP}>{"Don't have an account? Sign Up"}</Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      ) : (
        <Signup />
      )}
    </Grid>
  );
};

export default Login;
