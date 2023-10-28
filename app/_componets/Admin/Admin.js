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

  //webSocket
  // useEffect(() => {
  //   console.log('start client soket');
  //   const socketInstance = new ClientIO(process.env.NEXT_PUBLIC_SITE_URL, {
  //     path: '/api/socket/io',
  //     addTrailingSlash: false,
  //   });
  //   socketInstance.on('connect', () => {
  //     console.log('connected');
  //   });
  //   socketInstance.on('disconnect', () => {
  //     console.log('disconnect');
  //   });
  //   socketInstance.on('form', message => {
  //     console.log(message);
  //     setMessages(prevMessages => (prevMessages += 1));
  //   });
  //   setSocket(socketInstance);
  //   return () => {
  //     socketInstance.disconnect();
  //   };
  // }, []);

  return (
    <Box sx={{ mt: 20 }}>
      {!token ? (
        <Form />
      ) : (
        <>
          <h1>isConnected </h1>
          <ResponsiveAppBar data={data} />
        </>
      )}
    </Box>
  );
};

export default Admin;
