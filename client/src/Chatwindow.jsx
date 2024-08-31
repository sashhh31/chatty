import React, { useState, useMemo, useEffect, useCallback } from "react";
import "./App.css";
import io from "socket.io-client";

const ChatWindow = () => {
  const socket = useMemo(() => io("localhost:8000"), []);

  // State to store received messages
  const [messages, setMessages] = useState([]);

  // State for the message to be sent
  const [newMessage, setNewMessage] = useState("");
  //State to store sent messages
  const [senderMessages, setSenderMessages] = useState([]);

  // Handle sending messages
  const handleSend = () => {
    if (newMessage.trim()) {
      socket.emit("chatu", newMessage)
      setSenderMessages((prevMessages) => [...prevMessages, newMessage])
      setNewMessage("");
    
  };}

  // Handle receiving messages from the server
  useEffect(() => {
    socket.on("chat", (msg)=>{
      setMessages((prevMessages) => [...prevMessages, msg]); // Include sender information
    });

    return () => socket.disconnect();
  }, [socket]); 

  return (
    <div className="chat-window">
      <div className="chat-header">
        <h2>John Doe</h2>
      </div>
      <div className="message-area">
        {senderMessages.map((msg, index) => (
          <div key={index} className="sender">
            {msg}
          </div>
        ))}
        {messages.map((msg, index) => (
          <div key={index} className="receiver">
            {msg}
          </div>
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
