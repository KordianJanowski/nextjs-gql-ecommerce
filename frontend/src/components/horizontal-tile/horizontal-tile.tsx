import React from 'react'
import Link from 'next/link'
import { Icategory } from 'types/interfaces'

interface Iprops {
  category: Icategory
  boxColor: string
}

const HorizontalTile: React.FC<Iprops> = ({ category: { title, description, emoji, slug }, boxColor }) => {
  return (
    <Link href={`/category/${slug}`}>
      <div className={`even:mt-2 odd:mb-2 horizontal-tile flex flex-row items-center justify-around p-2 px-5 rounded-md shadow ${boxColor} w-full h-32 xl:h-1/2 hover:scale-[.97] cursor-pointer transition-all`}>
        <div className='pr-4'>
          <p className='text-xl font-semibold sm:text-2xl'>{title}</p>
          <p className='text-sm sm:text-base'>{description}</p>
        </div>
        <div className='text-4xl sm:text-5xl xl:text-7xl'>{emoji}</div>
      </div>
    </Link>
  )
}

export default HorizontalTile;