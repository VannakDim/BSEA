import React from 'react';
import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Login from './pages/login';
import Register from './pages/register';
import Write from './pages/write';
import Navbar from './components/partial/navbar'
import Footer from './components/partial/footer'
import Error from './pages/error'
import "./style.scss"

const Layout = ()=>{
  return(
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}


const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children:[
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/write",
    element: <Write />
  },
  {
    path: "*",
    element: <Error />
  },
])
function App(){
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router= {router} />
      </div>
    </div>
  )
}

export default App;
