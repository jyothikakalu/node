import React from 'react'
import Home from './Component/Home'
import {BrowserRouter, Routes, Route} from "react-router-dom"

import StudentLogin from './Component/StudentPages/StudentLogin'
import Registrationform from './Component/StudentPages/Registrationform'
import AuthContextAPI from './context/AuthConext'
import StudentHome from './Component/StudentPages/StudentHome'






function App() {
  return (
  //   <div className='bg-orange-400 text-red-900 w-7/12 h-24 m-10 hover:bg-lime-300 hover:rounded-full flex gap-7 items-center border-8 border-green-900'>
  //  welcome To Tailwind Css  
  //  <h1>hii</h1>
  //  <h3>uuuu</h3>
  <>
  <AuthContextAPI>
  <BrowserRouter>
  <Routes>

    <Route path='/' element={<Home/>}></Route>
    <Route path='/studentLogin' element={<StudentLogin/>}></Route>
    <Route path='/Registrationform' element={<Registrationform/>}></Route>
    <Route path='/studentHome' element={<StudentHome/>}></Route>
   
  </Routes>
  </BrowserRouter>
  <studentHome/>

  </AuthContextAPI>

 
  </>

  
    // </div>
  )
}

export default App
