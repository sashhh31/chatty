import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import WebVitals from "./WebVitals.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="chat-app">
      <App/>
    </div>
  </StrictMode>
);

WebVitals();
