import React from 'react'
import { animate, motion, useMotionValue, useTransform } from 'framer-motion'

interface CardProps {
  title: string,
  description: string,
  repoUrl: string,
  icons: Array<JSX.Element>
}

const Card = ({ title, description, repoUrl, icons }: CardProps) => {
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const rotateX = useTransform(y, [0, 400], [15, -15])
  const rotateY = useTransform(x, [0, 400], [-15, 15])

  function handleMouse(event: any) {
      const rect = event.currentTarget.getBoundingClientRect();

      x.set(event.clientX - rect.left);
      y.set(event.clientY - rect.top);
  }

  return (
    <motion.div
      style={{
        width: 470,
        height: 360,
        display: "flex",
        placeItems: "center",
        placeContent: "center",
        borderRadius: 30,
        perspective: 400
      }}
      onMouseMove={handleMouse}
      onMouseLeave={() => {
        animate(x, 200);
        animate(y, 200);
      }}
    >
      <motion.div className="w-[360px] h-[240px] p-6 border border-[#dfdfdf] rounded-lg shadow bg-[#00000048]"
        style={{
          rotateX: rotateX,
          rotateY: rotateY
        }}
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-12">{description}</p>
        <div className='flex gap-2'>
          {icons.map((icon) => icon)}
        </div>
        

        <a href={repoUrl} target="_blank" className="z-0 inline-flex items-center pt-6 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            View Repo
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
      </motion.div>
    </motion.div>


  )
}

export default Card