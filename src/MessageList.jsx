import React from 'react'

export default function MessageList({ messages }) {
  return (
    <div className="flex-1 overflow-y-auto p-4 bg-black">
      {messages.map((msg, i) => (
        <div key={i} className={msg.sender === localStorage.getItem('username') 
  ? "ml-auto bg-green-400 text-white rounded-lg p-3 m-2 max-w-xs" 
  : "mr-auto bg-gray-300 text-black rounded-lg p-3 m-2 max-w-xs"
}>
   {msg.sender === localStorage.getItem('username') && (
    <span className="text-xs font-bold block opacity-80">You</span>)}
          {msg.text}
          <span className="text-xs block mt-1 opacity-70">
  {new Date(msg.timestamp).toLocaleTimeString()}
</span>
        </div>
      ))}
    </div>
  )
}