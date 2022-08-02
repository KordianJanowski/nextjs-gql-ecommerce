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
    <div className="px-6 sm:px-16 2xl:px-0 2xl:w-2/3 mx-auto min-h-[75vh] pb-40">
      <Navbar />
      <div className='flex flex-col md:flex-row'>
        <Sidebar
          title={sidebarTitle}
          links={links}
        />
        <div className='w-full md:ml-10 mt-10 md:mt-0'>
          <PageHeader title={headerTitle} />
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout;
