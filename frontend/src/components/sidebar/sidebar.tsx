import { convertToSlug } from 'utils/index';
import React from 'react'
import Link from 'next/link';

interface IProps {
  title: string;
  links: string[];
}

const Sidebar: React.FC<IProps> = ({ title, links }) => {
  const linksElement = links.map((link:string) => {
    return (
      <Link key={link} href={convertToSlug(link)}>
        <a className={`py-1 my-3 hover:font-semibold ${/\p{Extended_Pictographic}/u.test(link) ? 'first-letter:mr-3 first-letter:text-lg' : ''}`}>
          {link}
        </a>
      </Link>
    )
  })

  return (
    <div className='h-max w-44'>
      <h2 className='text-3xl font-semibold'>{title}</h2>
      <div className='flex flex-col mt-5'>
        {linksElement}
      </div>
    </div>
  )
}

export default Sidebar;