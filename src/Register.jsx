import React ,{ useState } from 'react'
import { Link,useNavigate} from 'react-router-dom'
export default function Register() {

  const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();
const handleRegister = async () => {
   if (!username || !password) {
    alert("Please fill all fields");
    return;
  }
  const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });
  const data = await response.json();
  console.log(data);

  if (data.message === "Username already exists") {
  alert("Username already exists, please choose another");
} else {
  localStorage.setItem("username", username);
  localStorage.setItem("token", data.token);
  navigate('/chat');
}
}
  return (
    <div>
      <div className='flex flex-col items-center justify-center h-screen p-4'>
        <div className='w-98 rounded bg-gray-800 p-4'> 
 <h1 className='m-4 text-center text-white'>Register yourself</h1> 
        <input value={username}
onChange={(e) => setUsername(e.target.value)} type='text' placeholder='Enter your username' className='w-full border rounded-lg p-2 mb-4'/>
        <input value={password}
onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Enter your passsword' className='w-full border rounded-lg p-2 mb-4'/>
        <button className='bg-blue-500 text-white p-2 rounded-lg w-full' onClick={handleRegister}>Register</button> 
        
<p className="text-center mt-4 text-white">
  Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
</p> 
        </div> 
        </div>
      
    </div>
  )
}
