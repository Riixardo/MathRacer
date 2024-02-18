const {socketIo, Server} = require('socket.io');

const initializeSocket = (server) => {

    const io = new Server(server, {
        cors: {
            // replace with address of react server and 
            // on react server put address of backend server
          origin: "http://localhost:3000"
        }
    });
    const connectedUsersByPage = {};
    io.on('connection', (socket) => {

        socket.on('joinPage', (page) => {

            if (!connectedUsersByPage[page]) {
                connectedUsersByPage[page] = 0;
            }

            connectedUsersByPage[page]++;
            console.log(connectedUsersByPage);

            io.to(page).emit('updateCount', connectedUsersByPage[page]);
        
            // Join the room corresponding to the page
            socket.join(page);
        
            socket.on('disconnect', () => {
                connectedUsersByPage[page]--;
                io.to(page).emit('updateCount', connectedUsersByPage[page]);
            });
        });
    });
};
module.exports = initializeSocket;