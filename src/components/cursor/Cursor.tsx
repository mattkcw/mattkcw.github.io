import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { cursorPosition, getCursorPosition } from './cursorSlice';

const Cursor = () => {
  const dispatch = useDispatch();
  const cursorXY = useSelector(cursorPosition);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      dispatch(getCursorPosition([e.clientX, e.clientY]))
    }

    window.addEventListener("mousemove", mouseMove);

    return () => window.removeEventListener("mousemove", mouseMove);

  }, [])

  const variants = {
    default: {
      x: cursorXY[0] - 72,
      y: cursorXY[1] - 72,
      backgroundColor: "white",
      opacity: 0.8
    }
  }
  
  return (
    <motion.div
      className='h-36 w-36 rounded-full fixed z-10 blur-[120px] pointer-events-none'
      variants={variants}
      animate='default'
    ></motion.div>
  )
}

export default Cursor