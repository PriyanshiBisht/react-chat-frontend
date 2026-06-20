import React,{useState,useEffect} from 'react'
 import { useNavigate } from 'react-router-dom'

export default function Sidebar({setSelectedUser}) {
    
    const [users, setUsers] = useState([]);
    useEffect(() => {
  fetch(`${process.env.REACT_APP_BACKEND_URL}/users`)
    .then(res => res.json())
    .then(data => setUsers(data));
}, []);
 const myUsername = localStorage.getItem("username");

const navigate = useNavigate();

const handleLogout = () => {
  localStorage.removeItem("username");
  navigate('/');
}
  return (

    <div className="w-1/3 border-r bg-gray-900 flex flex-col h-screen">
        <div className=' text-white text-center mt-3'>Contacts</div>
   <div className='mt-4 flex-1 overflow-y-auto'>
    {
   

        users.filter(user => user.username !== myUsername)
        .map((v,i)=>{
return <div key={i} className='border rounded-lg p-3 m-2 cursor-pointer hover:bg-indigo-500  text-white' onClick={() => setSelectedUser(v.username)}>{v.username}</div>
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
