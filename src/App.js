import React from 'react'
import Navbar from './Component/Navbar'
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/Cart'


function App() {
  return (
    <div>
      <div className='bg-black'>
        <Navbar/>
      </div>
      <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/cart' element={<Cart/>}/>
            </Routes>
      </div>
    </div>
  )
}

export default App
