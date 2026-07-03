
import React, { useState,useEffect } from 'react'
import ChatWindow from './ChatWindow';
import { io } from "socket.io-client";


import Sidebar from './Sidebar';
 const socket = io(process.env.REACT_APP_BACKEND_URL);
export default function Chat() {
 
     const [selectedUser, setSelectedUser] = useState(null);
    const [messages, setMessages] = useState([]);
    const [onlineUsers, setOnlineUsers] = useState([]);
const [typingUser, setTypingUser] = useState(null);
    
useEffect(() => {
  socket.on("receive_message", (data) => {
    setMessages((prev) => [...prev, data]);
  });

  socket.on("online_users", (users) => {
    setOnlineUsers(users);
  });

  socket.on("typing", (sender) => {
    setTypingUser(sender);
  });

  socket.on("stop_typing", () => {
    setTypingUser(null);
  });

  return () => {
    socket.off("receive_message");
    socket.off("online_users");
    socket.off("typing");
    socket.off("stop_typing");
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
  <div className='flex h-dvh w-full'>
    <div className={selectedUser ? "hidden md:block md:w-1/3 shrink-0" : "w-full md:w-1/3 shrink-0"}>
     
      <Sidebar setSelectedUser={setSelectedUser} onlineUsers={onlineUsers}/>
    </div>
    <div className={selectedUser ? "flex-1" : "hidden md:flex flex-1"}>
      <ChatWindow selectedUser={selectedUser} messages={messages} setMessages={setMessages} socket={socket} setSelectedUser={setSelectedUser} typingUser={typingUser}/>
    </div>
  </div>
);
}
