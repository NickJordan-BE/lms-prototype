'use client';

import React, { useState } from 'react';
import NextLink from 'next/link';
import Grid from '@mui/material/Grid';
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElements>) => {
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
      <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '80vh' }}>
        <Grid item xs={12} sm={8} md={5}>
          <Paper elevation={3} sx={{ p: 4, width: '400px' }}>
            <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
              <Typography variant="h4" textAlign="center">Sign Up</Typography>
            </Stack>
            <form onSubmit={handleSubmit} style={{ marginTop: '2rem' }}>
              <Stack spacing={3}>
                <TextField label="Name" name="name" value={form.name} onChange={handleChange} fullWidth required/>
                <TextField label="Email" name="email" value={form.email} onChange={handleChange} fullWidth required/>
                <TextField label="Password" name="password" value={form.password} onChange={handleChange} fullWidth required/>
                <TextField label="Confirm Password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} fullWidth required/>
                <Button type="submit" variant="contained" color="primary">
                  Sign Up
                </Button>
                <NextLink href="/login">
                  <Link variant="body1" color="primary">
                    Already have an account?
                  </Link>
                </NextLink>
              </Stack>
            </form>
          </Paper>
        </Grid>
      </Grid>
  )
}

export default page
