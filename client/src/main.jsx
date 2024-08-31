import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ChatWindow from "./Chatwindow.jsx";
import Sidebar from "./SideBar.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="chat-app">
      <Sidebar />
      <ChatWindow />
    </div>
  </StrictMode>
);
