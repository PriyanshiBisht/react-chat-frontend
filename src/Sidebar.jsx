import React,{useState,useEffect} from 'react'
 

export default function Sidebar({setSelectedUser,onlineUsers}) {
    
    const [users, setUsers] = useState([]);
    useEffect(() => {
  fetch(`${process.env.REACT_APP_BACKEND_URL}/users`)
    .then(res => res.json())
    .then(data => setUsers(data));
}, []);
 const myUsername = localStorage.getItem("username");



const handleLogout = () => {

  localStorage.removeItem("username");
  localStorage.removeItem("token");
  window.location.replace("/"); 
}
  return (
<div className="w-full border-r bg-gray-900 flex flex-col h-dvh">

        <div className=' text-white text-center mt-3'>Contacts</div>
   <div className='mt-4 flex-1 overflow-y-auto'>
    {
   

        users.filter(user => user.username !== myUsername)
        .map((v,i)=>{
return <div key={i} className='border rounded-lg p-3 m-2 cursor-pointer hover:bg-indigo-500 text-white flex items-center gap-2' onClick={() => setSelectedUser(v.username)}>
  <span className={`w-2 h-2 rounded-full ${onlineUsers.includes(v.username) ? "bg-green-400" : "bg-gray-500"}`}></span>
  {v.username}
</div>
        }
    )
    } 
   
    </div> 
      <button onClick={handleLogout} className="p-2 m-2 w-50 bg-red-500 text-white rounded-lg">
  Logout
</button>
   
    </div>
  )
}
