import React from 'react'
import { motion } from 'framer-motion'
import mediaQuery from '../../mediaQuery'
import Card from '../card/Card'
import { SiTypescript, SiPhp, SiJava, SiJavascript, SiReact, SiSpringboot, SiCsharp, SiPython, SiRuby, SiRubyonrails } from 'react-icons/si'

const Projects = () => {
  const phpUrl = 'https://github.com/mattkcw/cli-php'
  const rubyUrl = 'https://github.com/mattkcw/ruby-on-rails-project'
  const pythonUrl = 'https://github.com/mattkcw/weatherplotter-python'
  const javaUrl = 'https://github.com/mattkcw/springboot-stripe-mysql'
  const cSharpUrl = 'https://github.com/mattkcw/CarWinForm'
  const typeScriptUrl = 'https://github.com/mattkcw/mattkcw.github.io'


  return (
    <section id="Projects">
      <motion.div
          className="text-center pb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}>
          <p className="font-lora font-semibold text-3xl underline underline-offset-8 mt-10">
            PROJECTS
          </p>
        </motion.div>


      <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 justify-between lg:mx-44">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}>
          <Card title={'eCommerce'} description={'eCommerce site built with Ruby on Rails'} repoUrl={rubyUrl} 
            icons={[<SiRuby color='#e0115f' size={50} />, <SiRubyonrails color='#e0115f' size={50} />]} />
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}>
          <Card title={'CLI Application'} description={'Command Line Application for working with Google Drive and Sheets API'} repoUrl={phpUrl} 
            icons={[<SiPhp color='#777BB3' size={50} />]} />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}>
          <Card title={'Spring Boot Backend'} description={'Java backend with MySQL and Stripe'} repoUrl={javaUrl} 
            icons={[<SiJava size={50} />, <SiSpringboot color='#8BC34A' size={50} />]} />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}>
          <Card title={'Weather Plotter'} description={'Weather plotter built with Python using NWS API and Matplotlib'} repoUrl={pythonUrl} 
            icons={[<SiPython color='#646464' size={50} />]} />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}>
          <Card title={'Windows Form'} description={'Car data calculations with WinForms'} repoUrl={cSharpUrl} 
            icons={[<SiCsharp color='#B24BF3' size={50} />]} />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}>
          <Card title={'Portfolio Site'} description={'This site, made with React and TypeScript'} repoUrl={typeScriptUrl} 
            icons={[<SiReact color='#61dafb' size={50} />, <SiTypescript color='#3178C6' size={50} />]} />
        </motion.div>


        

        

           
      </div>
    </section>
  )
}

export default Projects