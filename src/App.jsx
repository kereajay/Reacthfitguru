import { useState, } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import useGymapi from './Component/Content'
import Header  from './Component/Header'
import Body from "./Component/Body"
import Footer from "./Component/Footer"

function App() {
 
  // console.log(Fetachgymapi());
// const{Fetachgymapi}=useGymapi()

  return (
    <>
     <button onClick={Fetachgymapi} className='text-white bg-orange-600'>ajay</button>
    
    <Header/>
    <br />
    <Footer/>
  
    </>
  )
}

export default App
