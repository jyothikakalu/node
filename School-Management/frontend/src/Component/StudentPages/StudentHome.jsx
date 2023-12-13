import React from 'react'
import Navbar from '../Navbar'
import Aside from '../Aside'
import Footer from '../Footer'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthConext'
import { useNavigate } from 'react-router-dom'

function StudentHome() {
  const {setAuth} =useContext(AuthContext)
  const navigate=useNavigate()
  const handleLogout=()=>{
    localStorage.removeItem("token")
    setAuth(false)
    navigate("/")
    
  }
  return (
    
    <div>
      {/* <h1>home page</h1> */}
      <Navbar/>
      <div className='flex'>
      <Aside/>
      <section className='flex-1 bg-white'>
        <button className='bg-green-900 px-5 py-3 rounded-lg float-right text-white font-bold hover:bg-yellow-500 hover:text-green-950 border-black-900' onClick={(e)=>{
          handleLogout(e)
        }}>
          LOGOUT 
          <i className="fa-solid fa-right-to-bracket ml-2 text-lg"></i>
        </button>
      </section>
      </div>
      <Footer/>
   
    
    </div>
  )
}

export default StudentHome

