import React from 'react'
import MessageInput from './MessageInput'
import ChatHeader from './ChatHeader'
import MessageList from './MessageList'

export default function ChatWindow({selectedUser ,messages, setMessages, socket }) {
  return (
    <div className='flex-1 flex flex-col h-screen bg-gray-950'>
 <ChatHeader  selectedUser={selectedUser}/>
    <div className='flex-1 overflow-y-auto'>
<MessageList messages={messages} />
    </div>
    <MessageInput selectedUser={selectedUser} setMessages={setMessages} messages={messages} socket ={socket }/>
  
    </div>
  ) 
}
