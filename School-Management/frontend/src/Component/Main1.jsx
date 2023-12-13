import React from 'react'
import {Link} from "react-router-dom"
function Main1() {
  return (
    <div className='bg-slate-500 flex-grow'>
      <Link to="/studentLogin">
      <div className='bg-slate-200 h-28 w-56 text-3xl font-bold text-blue-900 mb-6 flex-grow  mt-5  hover:bg-blue-900 hover:text-white ml-96 pl-12 pt-4 pb-6'>
        <h1>Students</h1>
        <i className='fa-solid fa-graduation-cap text-5xl '/>


      </div>
      </Link>
    
 
    </div>
  )
}

export default Main1
