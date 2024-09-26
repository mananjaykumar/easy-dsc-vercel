import React from 'react';
import { Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Typed from 'react-typed';
import * as routes from '../../routes/constants';

const Home = () => {
  const navigate = useNavigate();
  return (
    <Stack
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        marginTop: '-20px',
      }}
    >
      <Stack
        sx={{
          margin: '0 auto',
        }}
      >
        <Typed // Typed component from "react-typed"
          className='text-white text-2xl'
          strings={['Welcome to Unique Services Company.']}
          typeSpeed={100}
          loop={true}
          backSpeed={50}
        />
      </Stack>
      <Stack
        sx={{
          margin: '0 auto',
        }}
      >
        <Button
          variant='contained'
          sx={{
            borderRadius: '20px',
          }}
          onClick={() => navigate(routes.DASHBOARD)}
        >
          Get Started
        </Button>
      </Stack>
    </Stack>
  );
};

export default Home;
