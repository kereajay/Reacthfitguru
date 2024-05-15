import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Outlet,createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './Component/Header.jsx'
import Footer from './Component/Footer.jsx'
import Body from './Component/Body.jsx'
import Exercise from './Component/Exercise.jsx'
import Details from './Component/Detail.jsx'

 
const Main=()=>{
  return(
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    
    </>
  )
}


const routera=createBrowserRouter([
  {
    path:'/',
    element:<Main/>,
    children:[
     {
      path:'/',
      element:<Body/>
      
     } ,
     {
      path:'/Body',
      element:<Body/>
     },{
      path:'/Exercise',
      element:<Exercise/>
     },{
      path:'/Details/:id',
      element:<Details/>
     }
    ]
  }



  
])
const root=ReactDOM.createRoot(document.getElementById('root')) 
root.render(<RouterProvider router={routera}/>)