'use client';

import React, { useState } from 'react';
import NextLink from 'next/link';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

const page = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setError('');
    alert('Sign up successful! (No backend connection)');
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8f6f3 0%, #E1DCD5 50%, #D2BDAC 100%)',
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      padding: '2rem',
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
    }}>
      <Paper 
        elevation={12} 
        sx={{ 
          p: 5, 
          width: '100%', 
          maxWidth: '450px',
          borderRadius: '20px',
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 25px 50px rgba(119, 93, 71, 0.15)'
        }}
      >
        <Stack spacing={0} sx={{ mb: 3 }}>
          <Typography 
            variant="h3" 
            sx={{ 
              textAlign: 'center',
              color: '#775D47',
              fontWeight: '300',
              fontSize: '2.5rem',
              letterSpacing: '1px',
              marginBottom: '0.5rem'
            }}
          >
            Create Account
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              textAlign: 'center',
              color: '#8B7355',
              fontSize: '1rem',
              fontWeight: '300'
            }}
          >
            Join us and start your journey
          </Typography>
        </Stack>
        
        {error && (
          <Typography 
            color="error" 
            variant="body2" 
            sx={{ 
              mt: 0, 
              mb: 2, 
              textAlign: 'center',
              backgroundColor: 'rgba(211, 47, 47, 0.1)',
              padding: '12px',
              borderRadius: '8px',
              border: '1px solid rgba(211, 47, 47, 0.2)'
            }}
          >
            {error}
          </Typography>
        )}

        <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
          <Stack spacing={3}>
            <TextField 
              label="Full Name" 
              name="name" 
              value={form.name} 
              onChange={handleChange} 
              fullWidth 
              required
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  '&:hover fieldset': {
                    borderColor: '#8B7355',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#775D47',
                  },
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#775D47',
                },
              }}
            />
            <TextField 
              label="Email Address" 
              name="email" 
              type="email"
              value={form.email} 
              onChange={handleChange} 
              fullWidth 
              required
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  '&:hover fieldset': {
                    borderColor: '#8B7355',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#775D47',
                  },
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#775D47',
                },
              }}
            />
            <TextField 
              label="Password" 
              name="password" 
              type="password"
              value={form.password} 
              onChange={handleChange} 
              fullWidth 
              required
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  '&:hover fieldset': {
                    borderColor: '#8B7355',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#775D47',
                  },
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#775D47',
                },
              }}
            />
            <TextField 
              label="Confirm Password" 
              name="confirmPassword" 
              type="password"
              value={form.confirmPassword} 
              onChange={handleChange} 
              fullWidth 
              required
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  '&:hover fieldset': {
                    borderColor: '#8B7355',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#775D47',
                  },
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#775D47',
                },
              }}
            />
            <Button 
              type="submit" 
              variant="contained" 
              size="large"
              sx={{
                backgroundColor: '#775D47',
                color: 'white',
                borderRadius: '12px',
                padding: '14px',
                fontSize: '1.1rem',
                fontWeight: '500',
                textTransform: 'none',
                boxShadow: '0 8px 20px rgba(119, 93, 71, 0.3)',
                '&:hover': {
                  backgroundColor: '#8B7355',
                  boxShadow: '0 12px 25px rgba(119, 93, 71, 0.4)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Create Your Account
            </Button>
            <Link 
              component={NextLink} 
              href="/login" 
              variant="body1" 
              sx={{ 
                textDecoration: 'none',
                textAlign: 'center',
                color: '#775D47',
                fontSize: '1rem',
                fontWeight: '400',
                '&:hover': {
                  color: '#8B7355',
                  textDecoration: 'underline',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Already have an account? Sign in here
            </Link>
          </Stack>
        </form>
      </Paper>
    </div>
  )
}

export default page