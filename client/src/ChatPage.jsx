import React from 'react'
import ChatBar from './components/ChatBar'
import Chat from './components/Chat'
import Footer from './components/Footer'
import Header from './components/Header'
import './App.css'

const ChatPage = ({socket}) => {
  return (
<div className="app-container">
  <ChatBar socket={socket} />
  <div className="main-content">
    <Header socket={socket} />
    <Chat socket={socket} />
    <Footer socket={socket} />
  </div>
</div>

  )
}

export default ChatPage
