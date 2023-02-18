import React, { useEffect, useState } from 'react'
import { delay, motion } from "framer-motion";
import { useDispatch, useSelector } from 'react-redux';
import { pageSelected, setSelectedPage } from '../navbar/navbarSlice';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import Granim from 'granim';
import mountains from '../../assets/mountains-resized.png';

const Hero2 = () => {
  const dispatch = useDispatch();
  const [windowSize, setWindowSize] = useState([window.innerHeight, window.innerWidth]);
  const githubUrl: string = 'https://github.com/mattkcw?tab=repositories'
  const linkedinUrl: string = 'https://www.linkedin.com/in/kangcm'

  const createTiles = (windowSize: Array<number> ) => {
    let rows = Math.floor(windowSize[0] / 50);
    let columns = Math.floor(windowSize[1] /50);
    document.documentElement.style.setProperty('--rows', `${rows}`);
    document.documentElement.style.setProperty('--columns', `${columns}`);

    return (
      Array(rows * columns).fill(0).map((_, i) => <div className='' key={i}></div>)
    )
  }

  useEffect(() => {
    new Granim({
      element: '#canvas-image-blending',
      direction: 'diagonal',
      isPausedWhenNotInView: true,
      image : {
          source: mountains,
          blendingMode: 'multiply',
      },
      states : {
          "default-state": {
              gradients: [
                  ['#29323c', '#485563'],
                  ['#FF6B6B', '#556270'],
                  ['#80d3fe', '#7ea0c4'],
                  ['#f0ab51', '#eceba3']
              ],
              transitionSpeed: 5000
          }
      }
  });
    const handleWindowResize = () => {
      setWindowSize([window.innerHeight, window.innerWidth])
    };
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, [])

  const handleButtonClick = () => {
    let projectsSection = document.getElementById("Projects");
    if (projectsSection != null) {
      window.scrollTo({ top: (projectsSection.offsetTop + 50) , behavior: 'smooth'});
    }
  }

  return (
    <>
    <section id='Home' className=''>
      <canvas id='canvas-image-blending' className='z-0 bg-center'></canvas>
      <div id='tiles'>
        {createTiles(windowSize)}
      </div>
      
      <div className='absolute inset-0 flex  flex-col justify-center items-center z-10'>
        <motion.p className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-white'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.7 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          variants={{
            hidden: { opacity: 0, x: -100, y: 500},
            visible: { opacity: 1, x: 0, y: 0},
          }}
        >
          Matthew Kang
        </motion.p>
        <motion.p 
          className='md:text-2xl sm:text-md text-2xl font-serif'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: false, amount: 0.7 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          Full Stack Developer
        </motion.p>
        <div className='flex pt-8 pb-40'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: false, amount: 0.7 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <AiFillGithub size={50} className='mr-1 hover:cursor-pointer transform hover:fill-[#60b47c] hover:scale-125 transition duration-300 ease-in-out'
              onClick={() => { window.location.href = githubUrl; }} 
            />
          </motion.div>

          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: false, amount: 0.5 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            variants={{
              hidden: { opacity: 0, y: 60 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <AiFillLinkedin size={50} className='ml-1 hover:cursor-pointer transform hover:fill-[#00A0DC] hover:scale-125 transition duration-300 ease-in-out' 
              onClick={() => { window.location.href = linkedinUrl; }} 
            />
          </motion.div>

        </div>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: false, amount: 0.7 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <button className='bg-gradient-custom text-[#000000] rounded-lg py-3 px-7 font-semibold hover:bg-gradient-rainblue hover:text-white transition duration-300' 
            onClick={handleButtonClick}>View Projects</button>
        </motion.div>
      </div>
    </section>
    </>
     
  )
}

export default Hero2