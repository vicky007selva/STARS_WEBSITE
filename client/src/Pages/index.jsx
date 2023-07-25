import React from 'react';

import Grid from '@mui/material/Unstable_Grid2';
import { Box } from '@mui/material';
import LoginForm from './LoginForm';

const useStyles = {
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundColor:'',
  background: 'linear-gradient(to right, #63228A 35%, #C238B8 65%)', 
  backgroundBlendMode: screen,
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  paddingLeft:'6rem',
  


}

const LoginPage = () => {


  return (
    <Box
      style={useStyles}
    >
      <LoginForm />
    </Box>
  );
};

export default LoginPage;
