import React from 'react';
import './App.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="user-profile">
        <img src="https://via.placeholder.com/50" alt="User" />
        <h2>User Name</h2>
      </div>
      <div className="chat-list">
        <h3>Chats</h3>
        {/* List of chats */}
        <div className="chat-item active">John Doe</div>
        <div className="chat-item">Jane Smith</div>
        <div className="chat-item">Mike Johnson</div>
      </div>
      <div className="settings">
        <button>Settings</button>
      </div>
    </div>
  );
};

export default Sidebar;
