import React from 'react'
import Navbar from '../navbar/navbar'
import PageHeader from '@components/page-header/page-header'
import Sidebar from '@components/sidebar/sidebar'
import { IsidebarLink } from 'types/interfaces'

interface Props {
  children: React.ReactNode,
  sidebarTitle: string,
  headerTitle: string,
  links?: IsidebarLink[]
}

const Layout: React.FC<Props> = ({ children, sidebarTitle, links = [], headerTitle }) => {
  return (
    <div className="px-6 sm:px-16 2xl:px-80 min-h-[75vh]">
      <Navbar />
      <div className='flex flex-row'>
        <Sidebar
          title={sidebarTitle}
          links={links}
        />
        <div className='ml-6'>
          <PageHeader title={headerTitle} />
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout;
