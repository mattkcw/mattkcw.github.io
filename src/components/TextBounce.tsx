import React from 'react'
import { motion, transform } from 'framer-motion'

const TextBounce = () => {
  const mk = "Matthew Kang".split("");

  const bounce = () => {
    return {
      transform: [
        "scale(1, 1)",
        "scale(1.4, .5)",
        "scale(.76, 1.24)",
        "scale(1.2, .8)",
        "scale(.9, 1.01)",
        "scale(1, 1)",
      ]
    }
  }
  

  return (
    <p className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-white'>
      {mk.map((letter, index) =>{
        return (
          <motion.span 
            key={index}
            className='inline-block' 
            whileHover={bounce()}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        )
      })}
    </p>
  )
}

export default TextBounce