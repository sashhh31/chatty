
const express = require("express")
const app = express()
const cors = require("cors")
const {Server} = require('socket.io')

const io= new Server(8000, {
    cors: {
        origin: "http://localhost:5173"
    },
});

app.use(cors())
const users = []

io.on("connection", (socket)=>{
    socket.on("userJoined", (data)=>{
        users.push(data)
        socket.emit("ActiveUsers", users)
    })

    socket.on("Typing", data=>{
        socket.emit("Typer", data)
    })

    socket.on("message", (data)=>{
        socket.emit("NewMessage", data)
    })

    socket.on('disconnect', () => {
         users.filter(user => user.socketID !== socket.id)
        socket.emit("ActiveUsers", users)
        socket.disconnect()
      });
})