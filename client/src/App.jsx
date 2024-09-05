import {BrowserRouter, Routes, Route} from "react-router-dom"
import SignIn from "./components/SignIn"
import ChatPage from "./ChatPage";
import socketIO from "socket.io-client";
import ProtectRoute from "./ProtectRoute";
import './App.css'
import CleanerRoute from "./CleanerRoute";


const socket = socketIO.connect("http://localhost:8000")
function App() {
  return (
    <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={
             
              <SignIn socket={socket}/>
             

              }></Route>
            <Route path="/chat"  element={
              <ProtectRoute>
                <ChatPage socket={socket}/>
              </ProtectRoute>}>
              </Route>
          </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;