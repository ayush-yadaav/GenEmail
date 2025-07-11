import React from 'react'
import { motion } from 'framer-motion'

function About() {
  return (
    <motion.section
      id='about'
      className='min-h-screen px-6 md:px-12 lg:px-20 bg-white dark:bg-black text-black dark:text-white'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Heading */}
      <motion.h2
        className='lg:text-4xl font-mono text-2xl py-5'
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About
      </motion.h2>

      <div className="flex lg:justify-around flex-col lg:flex-row items-center gap-10">
        
        {/* Left Content */}
        <motion.div
          className="w-full lg:h-150 lg:w-1/2 lg:py-10 lg:px-5"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className='text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4'>
            Transform Your Email Writing Experience Today
          </h3>
          <p className='text-base sm:text-lg md:text-xl mb-6'>
            Our AI Mood-Based Email Generator helps you craft tailored emails effortlessly.
            Save time and enhance your communication with personalized messages.
          </p>

          {/* Feature Boxes */}
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className='text-xl font-semibold'>Instant Personalization</h4>
              <p className='text-base mt-2'>
                Create emails that resonate with your recipient's mood and intent.
              </p>
            </motion.div>
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className='text-xl font-semibold'>User-Friendly Interface</h4>
              <p className='text-base mt-2'>
                Navigate easily through our clean and intuitive design for a seamless experience.
              </p>
            </motion.div>
          </div>

          {/* Button */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <button className="bg-slate-100 dark:bg-slate-900 dark:text-white px-6 py-2 text-lg md:text-xl font-bold rounded border-2 border-slate-700 hover:bg-slate-300 dark:hover:bg-slate-800 transition">
              <a href="/emails">Saved Emails</a>
            </button>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="w-full lg:w-[35%] bg-amber-700 rounded-2xl"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            className="object-cover w-full max-h-[550px] rounded-lg shadow-md"
            src="https://www.ox.ac.uk/sites/files/oxford/field/field_image_main/surface-2Wc28rVDygk-unsplash.jpg"
            alt="AI email illustration"
          />
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About
