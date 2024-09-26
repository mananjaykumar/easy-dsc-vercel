/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Typography, Stack, TextField, Button } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import useUser from '../../hooks/useUser';
// import useAuth from '../../hooks/useAuth';
import { useSelector } from 'react-redux';
// import { logout } from '../../store/slices/AuthSlice';
// import toast from 'react-hot-toast';

const Dashboard = () => {
  // const dispatch = useDispatch();
  const { userData } = useSelector((state: any) => state.auth);
  const [amount, setAmount] = useState('');
  const handleSubmit = () => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/api/payment`, {
        amount: Number(amount) * 100,
      })
      .then((res) => {
        console.log('res', res);
        window.location.replace(res?.data?.data?.data?.instrumentResponse?.redirectInfo?.url);
      })
      .catch((err) => console.log('error', err));
  };

  // useEffect(() => {
  //   axios
  //     .get(`${process.env.REACT_APP_BACKEND_URL}/api/user/auth`, {
  //       headers: {
  //         Authorization: `Bearer ${userData?.token}`,
  //       },
  //     })
  //     .catch((err) => {
  //       if (err.response.data.message === 'Authorization Failed!') {
  //         toast.error('Session Ended! Please Login again.');
  //         dispatch(logout());
  //       }
  //     });
  // }, []);
  return (
    <Stack>
      <Stack p={2} textAlign='center'>
        <Typography fontWeight={600} fontSize={24}>
          Get money out of credit card @1% only
        </Typography>
        {userData?.firstName?.length !== 0 && (
          <Typography fontWeight={600} fontSize={18} color='primary'>
            Welcome Onboard {userData?.firstName}!
          </Typography>
        )}
      </Stack>
      <Stack
        spacing={2}
        sx={{
          margin: '0 auto',
        }}
      >
        <TextField
          id='outlined-number'
          label='Amount'
          type='number'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button variant='contained' onClick={handleSubmit}>
          Submit
        </Button>
      </Stack>
      <Stack
        spacing={2}
        sx={{
          margin: '0 auto',
          padding: '50px',
        }}
      >
        <Typography>For Testing Use below credentials:</Typography>
        <Typography>card_number: 4208585190116667,</Typography>
        <Typography>card_type: CREDIT_CARD,</Typography>
        <Typography>card_issuer: VISA,</Typography>
        <Typography>expiry_month: 06,</Typography>
        <Typography>expiry_year: 2027,</Typography>
        <Typography>cvv: 508</Typography>
        <Typography fontWeight={600}>Note: OTP = 123456</Typography>
      </Stack>
    </Stack>
  );
};
export default Dashboard;
