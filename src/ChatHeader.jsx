import React from 'react'

export default function ChatHeader({ selectedUser, setSelectedUser }) {
  return (
    <div className='flex items-center gap-3 text-white p-3 bg-gray-950'>
      <button 
        onClick={() => setSelectedUser(null)} 
        className='md:hidden bg-gray-700 px-3 py-1 rounded-lg'
      >
        ←
      </button>
      <div className='text-center flex-1'>Conversation with {selectedUser}</div>
    </div>
  )
}