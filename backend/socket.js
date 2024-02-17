const {socketIo, Server} = require('socket.io');

const initializeSocket = (server) => {
    const io = new Server(server, {
        cors: {
            // replace with address of react server and 
            // on react server put address of backend server
          origin: "http://localhost:3000"
        }
      });
    io.on('connection', (socket) => {
        console.log('a user connected');
        socket.on('disconnect', () => {
          console.log('user disconnected');
        });
    });
};

module.exports = initializeSocket;