import { Server as ServerIO } from 'socket.io';

const ioHandler = (req, res) => {
  console.log('start soket');

  if (!res.socket.server.io) {
    console.log('*First use, starting Socket.IO');
    const path = '/api/socket/io';
    const httpServer = res.socket.server;

    const io = new ServerIO(httpServer, {
      path: path,

      addTrailingSlash: false,
    });

    io.on('connection', socket => {
      console.log(`Socket ${socket.id} connected.`);

      socket.on('message', message => {
        io.emit('form', message);
      });

      socket.on('disconnect', () => {
        console.log(`Socket ${socket.id} disconnected.`);
      });
    });

    res.socket.server.io = io;
  }

  res.end();
};

export default ioHandler;
