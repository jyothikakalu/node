import React, { useContext } from 'react'
import Navbar from './Navbar'
import Aside from './Aside'
import Footer from './Footer'
import Main1 from './Main1'
import { AuthContext } from '../context/AuthConext'
import { useNavigate } from 'react-router-dom'
import studentHome from './StudentPages/StudentHome'


function Home() {
  const { Auth } = useContext(AuthContext)
  //console.log(Auth)
  const navigate = useNavigate()

  return (
    <div>

      {Auth ? navigate("/studentHome") :
        <div>
          <Navbar />
          <div className='flex'>
            <Aside />
            <Main1 />
          </div>
          <Footer />
          
          
        </div>}

    </div>

  )
}

export default Home
