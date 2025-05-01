import React from 'react'

import About from './Components/About/About'
import { Home } from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Experience from './Components/Experience/Experience'
import Contact from './Components/Contact/Contact'
import Project from './Components/Projects/Project'


function App() {
  

  return (
    <div className='bg-[#171d32] h-auto w-full overflow-hidden'>
    <Navbar />
      <Home />
      <About />
      <Experience />
      <Project />
      <Contact />
      
    </div>
  )
}

export default App;
