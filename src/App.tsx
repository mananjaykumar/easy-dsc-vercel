import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { Toaster } from 'react-hot-toast';
import { Navigation } from './routes';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Toaster position='top-center' />
      <Navigation />
    </ThemeProvider>
  );
}

export default App;
