import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

const App = () => {

  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  const handleClick = (currentItem) => {
    setRating(currentItem)
  }

  const handleMouseMove = (currentItem) => {
    setHover(currentItem)
  }

  const handleMouseLeave = () => {
    setHover(rating)
  }

  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen'>
      <div className='flex gap-2'>
      {
      [...Array(5)].map((item, index) => {
        index += 1
        return <FaStar 
        key={index}
        size={40}
        className={index <= (rating || hover) ? 'text-yellow-400' : 'text-gray-400'}
        onClick={() => handleClick(index)}
        onMouseMove={() => handleMouseMove(index)}
        onMouseLeave={() => handleMouseLeave()}
        />
      })}
      </div>
    </div>
  )
}

export default App
