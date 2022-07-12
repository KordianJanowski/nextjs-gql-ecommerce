import Link from 'next/link'
import React from 'react'
import SearchInput from '../search-input/search-input'
import useNavbar from './navbar.hook'
import NavbarLinks from '../navbar-links'

const Navbar: React.FC = () => {
  const { menuExpanded, setMenuExpanded } = useNavbar();

  return (
    <nav className="flex flex-col items-center justify-between py-4 font-semibold sm:py-6 lg:flex-row mb-14">
      <div className='flex justify-between w-full mb-4 lg:mb-0 lg:w-1/3'>
        <Link href="/">
          <a className="text-2xl font-semibold sm:text-3xl">Shopping</a>
        </Link>
        <div className='flex lg:hidden'>
          <button onClick={() => setMenuExpanded(!menuExpanded)}>
            {/* menu icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 sm:w-9 sm:h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className={`${ menuExpanded ? 'translate-x-0' : 'translate-x-full' } lg:hidden min-w-[14rem] w-2/5 fixed top-0 right-0 flex flex-col items-start h-full px-5 py-8 text-white transform bg-black transition-all duration-700`}>
            <button className='absolute top-3 right-3' onClick={() => setMenuExpanded(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 sm:w-9 sm:h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <NavbarLinks />
          </div>
        </div>
      </div>

      <SearchInput />

      <div className="flex-row justify-end hidden w-1/3 lg:flex">
        <Link href="/cart">
          <div className="flex flex-row items-center mx-8 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round"  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <p className="ml-1">Cart: 0</p>
          </div>
        </Link>
        <div className="relative flex flex-row items-center group">
          {/* user icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <p className="mx-1">
            Hello <span className="font-normal">Guest</span>
          </p>
          {/* chevron icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transition-all duration-75 -rotate-90 group-hover:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
          <div className='absolute right-0 hidden pt-3 top-5 group-hover:flex '>
            <div className='flex flex-col items-start py-5 bg-white border rounded-lg shadow-md px-7 whitespace-nowrap'>
              <NavbarLinks />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
