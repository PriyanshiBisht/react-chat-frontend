
import React, { useState,useEffect } from 'react'
import ChatWindow from './ChatWindow';
import { io } from "socket.io-client";


import Sidebar from './Sidebar';
 const socket = io(process.env.REACT_APP_BACKEND_URL);
export default function Chat() {
 
     const [selectedUser, setSelectedUser] = useState(null);
    const [messages, setMessages] = useState([]);
    useEffect(() => {
  socket.on("receive_message", (data) => {
    setMessages((prev) => [...prev, data]);
  });
   return () => {
    socket.off("receive_message");
  };
}, []);

     useEffect(() => {
    const myUsername = localStorage.getItem("username");
    socket.emit("user_online", myUsername);
  }, []);
  
    useEffect(() => {
  if (selectedUser) {
    const myUsername = localStorage.getItem("username");
    
    fetch(`${process.env.REACT_APP_BACKEND_URL}/messages/${myUsername}/${selectedUser}`)
      .then(res => res.json())
      .then(data => setMessages(data));
  }
}, [selectedUser]);
  return (

      <div className='flex h-screen'  >
     
      <Sidebar setSelectedUser={setSelectedUser}/>
     <ChatWindow selectedUser={selectedUser}  messages={messages} setMessages={setMessages} socket={socket}/>
      </div>
  );
}
