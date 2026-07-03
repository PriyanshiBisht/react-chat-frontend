import React ,{ useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
export default function Login() {
   const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
     if (!username || !password) {
    alert("Please fill all fields");
    return;
  }
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });
    const data = await response.json();
    console.log(data);
   
  if (data.message === "Login successful") {
    localStorage.setItem("username",username );
    localStorage.setItem("token", data.token);
    navigate('/chat');
  } else {
    alert("Invalid credentials");
  }
  }
  return (
    <div>
      
      <div className='flex flex-col items-center justify-center h-screen p-4 bg-gray-800'>
        <div className='w-98 rounded bg-gray-800 p-4 shadow-2xl'> 
 <h1 className='text-2xl font-bold text-center mb-2 text-blue-400'>WELCOME BACK!</h1> 
 <h3 className='m-4 text-center text-white'>Login your account</h3> 
        <input value={username}
onChange={(e) => setUsername(e.target.value)}  type='text' placeholder='Enter your username' className='w-full border rounded-lg p-2 mb-4 bg-gray-800 text-white border-gray-600'/>
        <input  value={password}
onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Enter your password' className='w-full border rounded-lg p-2 mb-4 bg-gray-800 text-white border-gray-600'/>
        <button className='bg-blue-500 text-white p-2 rounded-lg w-full' onClick={handleLogin}>Login</button>  
        <p className="text-white text-center mt-4">
  Don't have an account? <Link to="/" className="text-blue-500">Register</Link>
</p>
        </div> 
        </div>
      
    </div>
  )
}
