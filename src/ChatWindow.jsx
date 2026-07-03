import React from 'react'
import MessageInput from './MessageInput'
import ChatHeader from './ChatHeader'
import MessageList from './MessageList'

export default function ChatWindow({selectedUser ,messages, setMessages, socket,setSelectedUser,typingUser}) {
 if (!selectedUser) {
  return (
    <div className='flex-1 flex flex-col h-dvh bg-gray-950 items-center justify-center gap-4'>
      
      {/* Icon */}
      <div className="w-20 h-20 rounded-full bg-gray-800 border-2 border-gray-700 flex items-center justify-center animate-float">
        <span className="text-4xl">💬</span>
      </div>

      {/* Text */}
      <p className="text-gray-200 text-xl font-medium animate-fadeUp">Select a conversation</p>
      <p className="text-gray-500 text-sm animate-fadeUp">Choose a contact to start chatting</p>

    </div>
  )
}
  return (
    <div className='flex-1 flex flex-col h-dvh bg-gray-950'>
 <ChatHeader  selectedUser={selectedUser}  setSelectedUser={setSelectedUser}/>
    <div className='flex-1 overflow-y-auto'>
      {typingUser === selectedUser && (
  <div className="text-gray-400 text-sm px-4 pb-1 italic">
    {typingUser} is typing...
  </div>
)}
<MessageList messages={messages} />
    </div>
    <MessageInput selectedUser={selectedUser} setMessages={setMessages} messages={messages} socket ={socket }/>
  
    </div>
  ) 
}
