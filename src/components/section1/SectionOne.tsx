import React from 'react'
import LineGradient from '../LineGradient'
import mediaQuery from '../../mediaQuery'
import { motion } from "framer-motion";

const SectionOne = () => {
  const isAboveMediumScreen = mediaQuery("(min-width: 1060px)");
  return (
    <section id="Products" className="pt-10 pb-24">
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            PRODUCTS
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
          Engineering and manufacturing the highest-quality product isn't something that just happens by chance. 
          The motivation and drive to achieve these goals has to be at the very core of a business and permeate the entire organization. 
          That's exactly the case at Oasis Windows.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveMediumScreen ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="./assets/windows.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="./assets/windows.png" />
          )}
        </div>
      </div>


      <div className="md:flex md:justify-between mt-16 gap-32">

        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-lora font-semibold text-5xl">01</p>
              <p className="font-lora font-semibold text-3xl mt-3">
                New Construction Windows
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <img src="./assets/construction.png" alt="new construction windows" />
        </motion.div>


        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-lora font-semibold text-5xl">02</p>
              <p className="font-lora font-semibold text-3xl mt-3">
                Replacement Windows
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <img src="./assets/replacement.png" alt="replacement windows" />
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-lora font-semibold text-5xl">03</p>
              <p className="font-lora font-semibold text-3xl mt-3">
                Sliding Glass Doors
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-[#d39146] absolute right-0 top-0 z-[-1]" />
          </div>
          <img src="./assets/sliding.png" alt="sliding glass doors" />
        </motion.div>
      </div>
    </section>
  )
}

export default SectionOne