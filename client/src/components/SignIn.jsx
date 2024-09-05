import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import '../App.css'


const SignIn = ({socket}) => {
    const navigate=useNavigate();
    const[username,SetUsername]= useState();
    const HandleSubmit= ()=>{
      socket.emit("userJoined",{ username:username , socketId:socket.id})
      localStorage.setItem("username",username)
      navigate('/chat')
    }
  return (
    <div className="chat-container">
    <h1 className="chat-title">Please Enter a Username To Talk To the World</h1>
  
    <form className="chat-form" onSubmit={HandleSubmit}>
      <label htmlFor="Username"></label>
      <input
        className="chat-input"
        placeholder="username"
        minLength={3}
        maxLength={10}
        name="username"
        value={username}
        onChange={(e) => SetUsername(e.target.value)}
      />
      <button className="chat-button">Join!</button>
    </form>
  </div>
  
  )
}

export default SignIn
