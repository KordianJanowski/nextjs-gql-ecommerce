import Link from 'next/link'
import React from 'react'
import SearchInput from '../search-input/search-input'
import useNavbar from './navbar.hook'
import NavbarLinks from '../navbar-links'

import { UserIcon, ShoppingCartIcon, ChevronDownIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

const Navbar: React.FC = () => {
  const { menuExpanded, setMenuExpanded } = useNavbar();

  return (
    <nav className="flex flex-col items-center justify-between py-4 font-semibold sm:py-6 lg:flex-row mb-14">
      <div className='flex justify-between w-full mb-4 lg:mb-0 lg:w-1/3'>
        <Link href="/">
          <a className="text-2xl font-semibold sm:text-3xl">Shopping</a>
        </Link>
        <div className='flex lg:hidden'>
          <Link href="/cart">
            <a className='relative '>
              <ShoppingCartIcon className='h-7 w-7 sm:w-8 sm:h-8' />
              <span className='absolute flex items-center justify-center w-4 h-4 text-xs text-white bg-black rounded-full -right-1 -top-1'>9</span>
            </a>
          </Link>
          <button onClick={() => setMenuExpanded(!menuExpanded)}>
            <MenuIcon className="w-8 h-8 ml-3 sm:w-9 sm:h-9" />
          </button>
          <div className={`${ menuExpanded ? 'translate-x-0' : 'translate-x-full' } lg:hidden min-w-[14rem] w-2/5 fixed top-0 right-0 flex flex-col items-start h-full px-5 py-8 text-white transform bg-black transition-all duration-[600ms]`}>
            <button className='absolute w-8 h-8 top-3 right-3' onClick={() => setMenuExpanded(false)}>
              <XIcon className="w-8 h-8 sm:w-9 sm:h-9" />
            </button>
            <NavbarLinks />
          </div>
        </div>
      </div>

      <SearchInput />

      <div className="flex-row justify-end hidden w-1/3 lg:flex">
        <Link href="/cart">
          <a className="flex flex-row items-center mx-8 cursor-pointer">
            <ShoppingCartIcon className='w-6 h-6' />
            <p className="ml-1">Cart: 0</p>
          </a>
        </Link>
        <div className="relative flex flex-row items-center group">
          <UserIcon className='w-6 h-6' />
          <p className="mx-1">Hello <span className="font-normal">Guest</span></p>
          <ChevronDownIcon className='w-5 h-5 transition-all duration-75 -rotate-90 group-hover:rotate-0' />
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
