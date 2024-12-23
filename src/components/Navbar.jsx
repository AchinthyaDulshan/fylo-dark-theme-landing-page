import React from 'react'
import { NavBarContent } from './Const'

const Navbar = () => {
  return (
    // navbar start 
    <nav className='bg-Dark-Blue-1'>
      <div className='max-w-screen-2xl py-10 lg:py-5 px-10 flex items-center justify-between font-heading mx-auto'>
        {/* logo  */}
        <img className='h-5 lg:h-10' src={NavBarContent.logo} alt="Logo" />
        {/* Navlinks start */}
        <div className='flex gap-5'>
          {NavBarContent.navLinks.map((item, index) => (
            <a key={index} className='relative after:absolute after:block after:h-0.5 after:bg-white after:w-0 hover:font-semibold hover:after:w-full after:-bottom-1/1 after:rounded-full transition-all duration-200 after:transition-all after:duration-200' href={item.link}>{item.text}</a>
          ))}
        </div>
        {/* Navlinks end  */}
      </div>

    </nav>
    // navbar end 
  )
}

export default Navbar