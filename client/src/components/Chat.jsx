import React, { useEffect, useState, useRef } from "react";
import "../App.css";

const Chat = ({ socket }) => {
  const [messages, setMessages] = useState([]);
  const lastMessageRef = useRef(null);
  useEffect(() => {
    const beforeUnloadHandler = (event) => {
      socket.emit('disconnect', ()=>{  localStorage.removeItem('username') });

      event.preventDefault();
      event.returnValue = ''; 
    };

    window.addEventListener('beforeunload', beforeUnloadHandler);

    return () => {
      window.removeEventListener('beforeunload', beforeUnloadHandler);
    };
  }, []);

  useEffect(() => {
    socket.on("NewMessage", (data) => {
      setMessages([...messages, data]);
    });
  }, [socket, messages]);

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      {messages.map((msg) =>
        msg.name === localStorage.getItem("userName") ? (
          <div className="chat-message self" key={msg.id}>
            <p className="chat-message-user">You</p>
            <div className="chat-message-text">
              <p>{msg.message}</p>
            </div>
          </div>
        ) : (
          <div className="chat-message other" key={msg.id}>
            <p className="chat-message-user">{msg.name}</p>
            <div className="chat-message-text">
              <p>{msg.message}</p>
            </div>
          </div>
        )
      )}

      <div ref={lastMessageRef} />
    </>
  );
};

export default Chat;
