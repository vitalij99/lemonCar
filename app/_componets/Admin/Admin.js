'use client';
import Form from '@/app/admin/form/Form';
import React, { useEffect, useState } from 'react';
import ResponsiveAppBar from '../Appbar/Appbar';
import { Box } from '@mui/material';

const Admin = () => {
  const [token, setToken] = useState(null);
  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, []);

  return (
    <Box sx={{ mt: 20 }}>
      {!token ? (
        <Form />
      ) : (
        <>
          <ResponsiveAppBar />
        </>
      )}
    </Box>
  );
};

export default Admin;
