'use client';
// import { io as ClientIO } from 'socket.io-client';
import Form from '@/app/admin/form/Form';
import { useEffect, useState } from 'react';
import ResponsiveAppBar from '../Appbar/Appbar';
import { Box } from '@mui/material';
import { useFetcher } from '@/lib/fetcher';

const Admin = () => {
  const [token, setToken] = useState(null);
  const { data, error, isLoading } = useFetcher('/api/swr');

  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, []);

  return (
    <Box sx={{ mt: 20 }}>
      {!token ? (
        <Form />
      ) : (
        <>
          <h1>{isLoading ? 'Load' : 'isConnected'}</h1>
          {data && <ResponsiveAppBar data={data} />}
        </>
      )}
    </Box>
  );
};

export default Admin;
