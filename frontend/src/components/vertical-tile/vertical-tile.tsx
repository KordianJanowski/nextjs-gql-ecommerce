import React from 'react'
import Image from 'next/image';

interface IProps {
  title: string
  price: number
  image: string
}

const VertivalTile: React.FC<IProps> = ({ title, price, image }) => {
  return (
    <div className='even:ml-2 odd:mr-2 flex flex-col items-center justify-around p-4 rounded-md shadow bg-gray-100 xl:h-full w-1/2 hover:scale-[.97] cursor-pointer transition-all'>
      <div className='relative w-32 overflow-hidden border rounded shadow-md h-44 md:w-40 md:h-52 lg:w-52 xl:w-40 lg:h-64 xl:h-52 border-gray-50'>
        <Image src={image} alt={title} layout="fill" className='object-cover' />
      </div>
      <p className='my-4 text-xl font-semibold text-center sm:text-2xl'>{title}</p>
      <p>${price}</p>
    </div>
  )
}

export default VertivalTile;