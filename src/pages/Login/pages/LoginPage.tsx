import React from 'react';
import { Box, Button, Card, Container, FormControl, FormLabel, Input, Stack } from '@mui/joy';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { shulekwanzalogo } from '../../../assets';
import { NAVIGATE_TO_ADMINDASHBOARD } from '../../../routes/types';

const LoginPage = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleLogin = () => {
    // Set isLogged to localStorage
    localStorage.setItem('isLogged', 'true');
    
    // Navigate to the dashboard
    navigate(NAVIGATE_TO_ADMINDASHBOARD);
  };

  return (
    <Box sx={{
      height: '96vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'background.level1',
      boxSizing: 'border-box',
      overflow: 'hidden',
      m: 0,
      p: 0,
      borderRadius: 4
    }}>
      <Box sx={{ borderRadius: 4, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Stack sx={{ maxWidth: '500px', gap: 2, borderRadius: 4 }}>
          <Card>
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <img
                alt="logo"
                src={shulekwanzalogo}
                style={{
                  width: '25%',
                  height: '25%',
                  objectFit: 'cover',
                }}
              />
            </Box>

            <FormControl required>
              <FormLabel>Email</FormLabel>
              <Input type="email" name="email" />
            </FormControl>
            <FormControl required>
              <FormLabel>Password</FormLabel>
              <Input type="password" name="password" />
            </FormControl>
            <FormControl>
              <FormLabel></FormLabel>
              <Button onClick={handleLogin}>LOGIN</Button> {/* Attach handleLogin */}
            </FormControl>
          </Card>
        </Stack>
      </Box>
    </Box>
  );
}

export default LoginPage;