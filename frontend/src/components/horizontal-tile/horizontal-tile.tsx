import React from 'react'

interface IProps {
  mainText: string
  subText: string
  emoji: string
  boxColor: string
}

const HorizontalTile: React.FC<IProps> = ({ mainText, subText, emoji, boxColor }) => {
  return (
    <div className={`even:mt-2 odd:mb-2 horizontal-tile flex flex-row items-center justify-around p-2 px-5 rounded-md shadow ${boxColor} w-full h-32 xl:h-1/2 hover:scale-[.97] cursor-pointer transition-all`}>
      <div className='pr-4'>
        <p className='text-xl sm:text-2xl font-semibold'>{mainText}</p>
        <p className='text-sm sm:text-base'>{subText}</p>
      </div>
      <div className='text-4xl sm:text-5xl xl:text-7xl'>{emoji}</div>
    </div>
  )
}

export default HorizontalTile;