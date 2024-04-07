import { Server } from "socket.io";

const Sockethandler = (req, res) => {
    
    if (res.socket.server.io) {
        console.log("Server is already running.");
    } else {
        const io = new Server(res.socket.server);

        res.socket.server.io = io;
    
        io.on('connection', (socket) => {
            console.log("Server is connected.");
        });
    }

    res.end();
}

export default Sockethandler;