import React, { useEffect, useState } from 'react'
import '../App.css'

const ChatBar = ({socket}) => {
    const [activeUsers , setActiveUsers]= useState([]);

    useEffect(()=>{
        socket.on("ActiveUsers", (data) =>{
         setActiveUsers(data)});
    },[socket]);

  return (
    <div className="sidebar-container">
    <h1 className="sidebar-title">Active Users - {activeUsers.length}</h1>
    {activeUsers.map((user) => (
      <p className="sidebar-user" key={user.socketId}>{user.username}</p>
    ))}
  </div>
  
  )
}

export default ChatBar

