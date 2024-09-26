/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import { Stack, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/slices/AuthSlice';
import toast from 'react-hot-toast';
import axios from 'axios';

const Services = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { userData } = useSelector((state: any) => state.auth);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/user/auth`, {
        headers: {
          Authorization: `Bearer ${userData?.token}`,
        },
      })
      .catch((err) => {
        if (err.response.data.message === 'Authorization Failed!') {
          toast.error('Session Ended! Please Login again.');
          dispatch(logout());
        }
      });
  }, []);
  return (
    <Stack textAlign='center' p={2}>
      <Typography fontSize={18}>welcome to {location.pathname.split('/')[2]}</Typography>
    </Stack>
  );
};

export default Services;
