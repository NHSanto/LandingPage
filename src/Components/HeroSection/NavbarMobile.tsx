import React, {useState} from 'react';
import NavbarDesktop from "./NavbarDesktop";


function NavbarMobile() {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    return (
        <>
            <div className="md:flex md:items-center md:justify-between flex justify-between h-[50px] w-full">
               <NavbarDesktop/>
                <div className='hidden lg:m-28 md:m-20 md:flex md:items-center md:justify-center'>
                    <button className="bg-blue-600 hover:bg-blue-400 p-2 text-white rounded-lg">Start Free Trail</button>
                </div>
                <div className="flex items-center justify-between m-2 md:hidden" onClick={handleClick}>
                    {!nav ?
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                            </svg>
                        </>
                        :
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                            </svg>

                        </>
                    }
                </div>
            </div>
            <div>
                <ul className={!nav ? 'hidden' : 'md:hidden flex-col items-center justify-between mx-2 mt-2 '}>
                    <li className="mx-2 my-3 my-0 border-zinc-200  border-b-2">
                        <a href="#">Demos</a>
                    </li>
                    <li className="mx-2 my-3 border-zinc-200  border-b-2">
                        <a href="#">About</a>
                    </li>
                    <li className="mx-2 my-3 border-zinc-200  border-b-2">
                        <a href="#">Blog</a>
                    </li>
                    <li className="mx-2 my-3 border-zinc-200  border-b-2">
                        <a href="#">Pages</a>
                    </li>
                    <li className="mx-2 my-3 border-zinc-200  border-b-2">
                        <a href="#">Contact</a>
                    </li>
                    <button className="bg-blue-600 hover:bg-blue-400 p-2 text-white rounded my-3">Start Free Trail
                    </button>
                </ul>
            </div>
        </>
    )
}

export default NavbarMobile