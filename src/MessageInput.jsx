
import React, { useState } from 'react'

export default function MessageInput({setMessages,messages,selectedUser,socket}) {
  const [input, setInput] = useState("");
  const handleMessage = async () => {
    const messageData = { 
    sender: localStorage.getItem("username"), 
    receiver: selectedUser, 
    text: input, 
    timestamp: new Date() 
  };
  
  setMessages([...messages, messageData]);
  socket.emit("send_message", messageData);
     
  const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/messages`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({sender: localStorage.getItem("username"), receiver:selectedUser, text: input})
  });
  setInput("");
  const data = await response.json();
  console.log(data);
   
}
  return (
   <div className="w-full border-t p-3 flex gap-2">
  
  <input
  type="text"
  placeholder="Type a message..."
  className="flex-1 border rounded-lg p-2"
  value={input}
  onChange={(e) => setInput(e.target.value)}
/>
<button className="bg-blue-500 text-white p-2  rounded-lg" onClick={handleMessage}>Send</button>
    
   </div>
       
  )
}
