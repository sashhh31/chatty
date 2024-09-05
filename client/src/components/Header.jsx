import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'


const Header = ({socket}) => {
    const navigate= useNavigate();
    const [typing , setTyping]=useState()
    useEffect(()=>{
        socket.on("Typer", data=>setTyping(data))
    })
    const HandleLeave=()=>{
        localStorage.removeItem("username")
        navigate("/", { replace: true })
        window.location.reload()
    }



    return (
    <div className="header-container">
    <div className="header-content">
      <h1 className="header-title">World Chat</h1>
      <button className="leave-button" onClick={HandleLeave}>Leave</button>
    </div>
    <p className="typing-indicator">{typing}</p>
  </div>
  
  )
}

export default Header
