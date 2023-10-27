'use client';
import { io as ClientIO } from 'socket.io-client';
import Form from '@/app/admin/form/Form';
import { useEffect, useState } from 'react';
import ResponsiveAppBar from '../Appbar/Appbar';
import { Box } from '@mui/material';

const Admin = () => {
  const [token, setToken] = useState(null);

  const [socket, setSocket] = useState(null);
  const [message, setMessages] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, []);

  useEffect(() => {
    console.log('start client soket');
    const socketInstance = new ClientIO(process.env.NEXT_PUBLIC_SITE_URL, {
      path: '/api/socket/io',
      addTrailingSlash: false,
    });
    socketInstance.on('connect', () => {
      console.log('connected');
      setIsConnected(true);
    });
    socketInstance.on('disconnect', () => {
      console.log('disconnect');
      setIsConnected(false);
    });
    socketInstance.on('message', message => {
      console.log('seed message');
      console.log(message);
      setMessages(prevMessages => (prevMessages += message));
    });
    setSocket(socketInstance);
    console.log(socketInstance);
    return () => {
      socketInstance.disconnect();
    };
  }, []);

  return (
    <Box sx={{ mt: 20 }}>
      {!token ? (
        <Form />
      ) : (
        <>
          <h1>isConnected {message}</h1>
          <ResponsiveAppBar />
        </>
      )}
    </Box>
  );
};

export default Admin;
