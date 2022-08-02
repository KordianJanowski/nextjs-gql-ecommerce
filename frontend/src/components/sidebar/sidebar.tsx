import React from 'react'
import Link from 'next/link';
import { IsidebarLink } from "types/interfaces"


interface IProps {
  title: string;
  links?: IsidebarLink[];
}

const Sidebar: React.FC<IProps> = ({ title, links = [] }) => {
  const linksElement = links.map((link:IsidebarLink) => {
    return (
      <Link key={link.slug} href={link.slug}>
        <a className='py-1 my-3 text-sm hover:font-medium'>
          <span className='mr-2 text-lg'>{link.emoji}</span>
          {link.title}
        </a>
      </Link>
    )
  })

  return (
    <div className='h-max w-44'>
      <h2 className='text-3xl font-semibold'>{title}</h2>
      <div className='flex flex-col mt-5'>
        {
          links.length > 0 ?
            linksElement
          : ''
        }
      </div>
    </div>
  )
}

export default Sidebar;