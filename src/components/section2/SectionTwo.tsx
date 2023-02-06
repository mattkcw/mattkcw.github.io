import React from 'react'
import LineGradient from '../LineGradient'
import { motion } from "framer-motion";
import project1 from '../../assets/project-1.jpg';
import project2 from '../../assets/project-2.jpg';
import project3 from '../../assets/project-3.jpg';
import project4 from '../../assets/project-4.jpg';
import project5 from '../../assets/project-5.jpg';
import project6 from '../../assets/project-6.jpg';
import project7 from '../../assets/project-7.jpg';
import project8 from '../../assets/project-8.jpg';
import project9 from '../../assets/project-9.jpg';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
  
const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, projectImage }: {title: string, projectImage: string}) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        
      </div>
      <img src={projectImage} alt={projectTitle} />
    </motion.div>
  );
};

const SectionTwo = () => {
  return (
    <section id="Gallery" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-lora font-semibold text-4xl">
            GALLERY
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          We provide the right product at the right price for every room throughout your home.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* ROW 1 */}
          
          <Project title="Project 1" projectImage={project1} />
          <Project title="Project 2" projectImage={project2} />
          

          {/* ROW 2 */}
          <Project title="Project 3" projectImage={project3} />
          <Project title="Project 4" projectImage={project4} />
          <Project title="Project 5" projectImage={project5} />

          {/* ROW 3 */}
          <Project title="Project 6" projectImage={project6} />
          <Project title="Project 7" projectImage={project7} />
          <Project title="Project 8" projectImage={project8} />
          <Project title="Project 9" projectImage={project9} />
          
        </motion.div>
      </div>
    </section>
  )
}

export default SectionTwo