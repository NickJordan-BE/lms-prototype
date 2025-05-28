'use client';

import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import NextLink from 'next/link';

const page = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError('Please fill in all fields');
      return;
    }
    setError('');
    alert('Login successful! (No backend connection)');
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '80vh' }}>
      <Grid item xs={12} sm={8} md={5}>
        <Paper elevation={3} sx={{ p: 4, width: '400px' }}>
          <Typography variant="h4" textAlign="center">
            Login
          </Typography>
          <form onSubmit={handleSubmit} style={{ marginTop: '2rem' }}>
            <Stack spacing={3}>
              <TextField
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                fullWidth
                required
              />
              <TextField
                label="Password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                fullWidth
                required
              />
              {error && (
                <Typography color="error" varaint="body2">
                  {error}
                </Typography>
              )}
              <Button type="submit" variant="contained" color="primary">
                Login
              </Button>
              <NextLink href="/signup">
                <Link variant="body1" color="primary">
                  Don't have an account? Sign Up
                </Link>
              </NextLink>
            </Stack>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default page;
