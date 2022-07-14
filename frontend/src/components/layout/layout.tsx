import React from 'react'
import Navbar from '../navbar/navbar'

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="px-6 sm:px-16 2xl:px-80 min-h-[75vh]">
      <Navbar />
      {children}
    </div>
  )
}

export default Layout
