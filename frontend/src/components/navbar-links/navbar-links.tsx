import React from 'react'
import Link from 'next/link'
import { useUserContext } from 'contexts/UserContext'


const NavbarLinks: React.FC = () => {
  const { user } = useUserContext()

  return (
    <>
      {
        user.isLogged ? (
          <>
            <Link href="/user-account">
              <a className="my-3">My account</a>
            </Link>
            <Link href="/user-orders">
              <a className="my-3">My orders</a>
            </Link>
            <Link href="/user-favorites">
              <a className="my-3">Favorites</a>
            </Link>
            <button className="my-3">Logout</button>
          </>
        ) : (
          <>
            <Link href="/login">
              <a className="my-3">Login</a>
            </Link>
            <Link href="/register">
              <a className="my-3">Register</a>
            </Link>
          </>
        )
      }
    </>
  )
}

export default NavbarLinks
