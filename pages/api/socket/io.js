import { Server as ServerIO } from 'socket.io';

const ioHandler = (req, res) => {
  console.log('start soket');

  if (!res.socket.server.io) {
    const path = '/api/socket/io';
    const httpServer = res.socket.server;
    const io = new ServerIO(httpServer, {
      path: path,
      // @ts-ignore
      addTrailingSlash: false,
    });
    res.socket.server.io = io;
  }

  res.end();
};

export default ioHandler;
