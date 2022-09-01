import React from 'react'

function NavbarDesktop() {
  return (
    <>
        <div className="md:flex md:items-center md:m-10 md:justify-center mx-2">
              <span>
                 <img className="h-8" src="/images/Logo.png" alt="logo"/>
              </span>
            <span>
               <ul className='hidden md:flex md:items-center md:justify-between mx-4 mt-2'>
                  <li className="md:mx-4 my-2 md:my-0">
                      <a href="src/Components/HeroSection/Navbar#NavbarMobile.tsx">Demos</a>
                  </li>
                  <li className="md:mx-4 my-2">
                      <a href="src/Components/HeroSection/Navbar#NavbarMobile.tsx">About</a>
                  </li>
                  <li className="md:mx-4 my-2">
                      <a href="src/Components/HeroSection/Navbar#NavbarMobile.tsx">Blog</a>
                  </li>
                  <li className="md:mx-4 my-2">
                      <a href="src/Components/HeroSection/Navbar#NavbarMobile.tsx">Pages</a>
                  </li>
                  <li className="md:mx-4 my-2">
                      <a href="src/Components/HeroSection/Navbar#NavbarMobile.tsx">Contact</a>
                  </li>
               </ul>
              </span>
        </div>
    </>
  )
}

export default NavbarDesktop