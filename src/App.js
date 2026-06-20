import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import Chat from './Chat'
import Register from './Register'
import Login from './Login'


function App() {
 
const allRoutes = createBrowserRouter([
  { path: "/", element: <Register/> },
  { path: "/login", element: <Login/> },
 { path:"/chat",element:(
  <ProtectedRoute>
    <Chat />
  </ProtectedRoute>
 ) 
 },
])

 

  return (
   <RouterProvider router={allRoutes} />
  );
}

export default App;
