import React from 'react'
import Link from 'next/link';
import { Icategory } from "types/interfaces"


interface Iprops {
  title: string;
  links?: Icategory[];
}

const Sidebar: React.FC<Iprops> = ({ title, links = [] }) => {
  const linksElement = links.map(({ title, emoji, slug, description }) => {
    return (
      <Link key={slug}
        href={
          !slug ? '/'
          : `${description ? '/category/' : '/'}${slug}`
        }
      >
        <a className='py-1 my-3 text-sm hover:font-medium'>
          <span className='mr-2 text-lg'>{emoji}</span>
          {title}
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