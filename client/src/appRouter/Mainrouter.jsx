import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Services from '../Pages/Services'
import Blog from '../Pages/Blog'
import Contact from '../Pages/Contact'

const MainRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default MainRouter
