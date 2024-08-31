import {Server} from 'socket.io';


const io= new Server(8000, {
    cors:true,
});
io.on ("connection", (socket)=>{
    socket.on("chatu", (msg)=>{
        socket.broadcast.emit("chatu",msg)
});

});

