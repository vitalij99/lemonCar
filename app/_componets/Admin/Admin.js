'use client';

import Form from '@/app/admin/form/Form';
import { useEffect, useState } from 'react';
import ResponsiveAppBar from '../Appbar/Appbar';
import { Box } from '@mui/material';
import axios from 'axios';

const Admin = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const accessToken = localStorage.getItem('token');
    setToken(accessToken);

    axios.defaults.headers.common['Authorization'] = accessToken;
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
