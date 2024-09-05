import React, { useState, useEffect } from 'react'
import '../App.css'

const Footer = ({socket}) => {
    const [message, setMessage]= useState("")
    const [typingTimeout, setTypingTimeout] = useState(null);

    const SendMessage= ()=>{
      
      if (message.trim()){
            socket.emit("message", {
                message:message,
                name:localStorage.getItem("username"),
                id: `${socket.id}${Math.random()}`,
                socketId:socket.id,
              })
            }
            setMessage("");
    }
    const HandleTyping=()=>{
        socket.emit("Typing", `${localStorage.getItem("username")} is typing...`)
      

    }
    const HandleStopTyping = () => {
      setTimeout(() => {
        
        socket.emit("Typing", ""); 
      }, 1000);
    };

  
  return (
    <div className="message-container">
    <div className="message-form" >
      <input
        className="message-input"
        type="text"
        placeholder="Type Message"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        onKeyDown={HandleTyping}
        onKeyUp={HandleStopTyping}
        />
      
      <button onClick={SendMessage} className="send-button">Send</button>
    </div>
  </div>
  
  )
}

export default Footer
