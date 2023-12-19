'use client';
// import { io as ClientIO } from 'socket.io-client';
import Form from '@/app/admin/form/Form';
import { useEffect, useState } from 'react';
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
          <ResponsiveAppBar data={data} />
        </>
      )}
    </Box>
  );
};

export default Admin;
