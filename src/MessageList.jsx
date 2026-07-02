import React from 'react'

export default function MessageList({ messages }) {
if (messages.length === 0) {
  return (
    <div className="h-full flex items-center justify-center bg-black flex-col gap-4">
      
      {/* Floating bubbles illustration */}
      <div className="animate-float relative">
        <div className="w-20 h-14 bg-green-400 rounded-3xl rounded-bl-sm flex items-center justify-center animate-popIn">
          <div className="flex gap-1">
            <span className="w-2 h-2 bg-white rounded-full opacity-70"></span>
            <span className="w-2 h-2 bg-white rounded-full opacity-70"></span>
            <span className="w-2 h-2 bg-white rounded-full opacity-70"></span>
          </div>
        </div>
        <div className="w-14 h-10 bg-gray-700 rounded-3xl rounded-br-sm flex items-center justify-center absolute -bottom-7 -right-12 animate-popIn">
          <div className="flex gap-1">
            <span className="w-2 h-2 bg-white rounded-full opacity-70"></span>
            <span className="w-2 h-2 bg-white rounded-full opacity-70"></span>
          </div>
        </div>
      </div>

      {/* Text */}
      <p className="text-gray-200 text-xl font-medium mt-8 animate-fadeUp">No messages yet</p>
      <p className="text-gray-500 text-sm animate-fadeUp">Say hi and start the conversation!</p>

    </div>
  )
}
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