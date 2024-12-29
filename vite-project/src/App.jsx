import React from 'react'
import { FaStar } from 'react-icons/fa'

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen'>
      <div className='flex gap-2'>
      {
      [...Array(5)].map((item, index) => {
        index += 1
        return <FaStar 
        key={index}
        size={40}
        className='text-gray-400'
        />
      })}
      </div>
    </div>
  )
}

export default App
