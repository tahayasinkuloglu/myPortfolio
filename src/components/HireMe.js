import React, { useState } from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

const HireMe = () => {

  const [speed, setSpeed] = useState('slow');

  const handleChance = () => {
    setSpeed('fast')
  }
  const handleChance2 = () => {
    setSpeed('slow')
  }

  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden'>
      <div className='w-48 h-auto flex items-center justify-center relative'>
        <CircularText className={`fill-dark animate-spin-${speed} duration-500`} />

        <Link
        onMouseEnter={handleChance}
        onMouseLeave={handleChance2}
        href='mailto:steam_lg@outlook.com'
        className='flex items-center justify-center
        absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark
        text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full
        font-semibold hover:bg-light hover:text-dark duration-300'>
            Hire Me
        </Link>
      </div>
    </div>
  )
}

export default HireMe
