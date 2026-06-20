import React from 'react'

export default function ChatHeader({ selectedUser}) {
  return (
    <div className='text-center mt-3  text-white'>Conversation with { selectedUser }</div>
  )
}
