import React from 'react'
import { fData } from '../utiles/data'
import { motion } from 'framer-motion'

function Features() {
  return (
    <motion.section
      id='features'
      className='min-h-screen px-6 md:px-12 lg:px-20 py-10 bg-white dark:bg-black text-black dark:text-white'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className='lg:text-4xl font-mono text-2xl'>Features</h2>

      {/* Top Heading */}
      <div className="text-center py-5">
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight'>
          Transform Your Email <br className='hidden sm:block' />
          Experience with AI
        </h1>
        <div className="py-4 text-base sm:text-lg md:text-xl font-mono max-w-3xl mx-auto">
          <p>
            Our AI email tool simplifies your communication by generating tailored emails in seconds.
          </p>
          <p>
            Experience the power of customization and efficiency at your fingertips.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8">
        {fData.map((item, index) => (
          <motion.div
            key={index}
            className='bg-white dark:bg-slate-950 text-black dark:text-white rounded-xl dark:shadow-[0_0_15px_rgba(168,85,247,0.3)] shadow-md p-4 hover:shadow-xl dark:hover:shadow-xl dark:transition transition duration-300'
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              className='w-full h-60 object-cover rounded-lg'
              src={item.image}
              alt={item.title}
            />
            <h2 className='text-2xl font-bold text-center mt-4'>{item.title}</h2>
            <p className='text-center text-base sm:text-lg mt-2'>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Features
