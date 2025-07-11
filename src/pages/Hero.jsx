import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <motion.section
      id="home"
      className="w-full px-6 md:px-12 lg:px-20 py-8 min-h-screen flex items-center light:bg-white dark:bg-black text-black dark:text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col-reverse lg:flex-row justify-evenly md:ml-16 items-center md:items-stretch w-full h-full gap-10">
        
        {/* Left Content */}
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold px-2 sm:px-4 lg:px-0 mt-4">
            Revolutionize Your Email Experience With AI
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl px-4 lg:px-0 py-4">
            Welcome to the future of email communication. Our AI-powered tool
            simplifies your email writing process, making it faster and more effective.
          </p>
          <div className="mt-4">
            <button className="bg-slate-100 dark:bg-slate-900 dark:text-white px-6 py-2 text-lg md:text-xl font-bold rounded border-2 border-slate-700 hover:bg-slate-300  dark:hover:bg-slate-800 transition">
              <a href="/genrate">Get Started</a>
            </button>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="lg:w-1/2 px-4"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <img
            className="object-cover w-full md:w-[80%] max-h-[500px] rounded-lg shadow-md"
            src="https://static.toiimg.com/thumb/msid-106895079,imgsize-78006,width-900,height-1200,resizemode-6/106895079.jpg"
            alt="AI email illustration"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Hero;
