import React from 'react'
import { motion } from "framer-motion";
import mediaQuery from "../../mediaQuery";
import { useDispatch, useSelector } from 'react-redux';
import { pageSelected, setSelectedPage } from '../navbar/navbarSlice';
import palmtree from '../../assets/palmtree.png';

const Hero = () => {
    const isAboveMediumScreen = mediaQuery("(min-width: 1060px)");
    const selectedPage = useSelector(pageSelected);
    const dispatch = useDispatch();

  return (
    <section id='Home' className='md:flex md:justify-between md:items-center md:h-full gap-16 py-10'>
      
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveMediumScreen ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
          >
            <img
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
              src={palmtree}
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[400px] md:max-w-[600px]"
            src={palmtree}
          />
        )}
      </div>
      <div className="z-30 basis-2/5 mt-12 md:mt-32">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Oasis {""} Windows
            {/* <span
              className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush
              before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
            >
              
            </span> */}
          </p>

          <p className="mt-10 mb-7 text-sm text-center md:text-start">
          Founded in 1989, Oasis Windows (Canada) Inc. with an international reputation for quality and service, is located in beautiful city of Surrey, BC Canada.
          </p>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <a
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
            onClick={() => dispatch(setSelectedPage('Products'))}
            href="#Products"
          >
            Products
          </a>
          <a
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => dispatch(setSelectedPage('Gallery'))}
            href="#Gallery"
          >
            <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
              Gallery
            </div>
          </a>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          
        </motion.div>
      </div>  

    </section>
  )
}

export default Hero