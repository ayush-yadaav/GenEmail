import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { RiTwitterXFill } from 'react-icons/ri'
import { IoLogoInstagram } from 'react-icons/io'
import { motion } from 'framer-motion'

function Footer() {
  return (
    <motion.footer
      className='md:h-40 h-90 md:px-25 py-13 px-20 dark:bg-black dark:text-white'
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div>
        <div className="flex lg:justify-between flex-col lg:flex-row items-center">
          {/* Logo */}
          <motion.h1
            className='md:text-4xl sm:text-3xl text-3xl font-extrabold mt-5'
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            GenEmail
          </motion.h1>

          {/* Links */}
          <motion.div
            className="flex gap-5 lg:flex-row flex-col text-center mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
            variants={{
              hidden: {},
              visible: {}
            }}
          >
            {['/', '#features', '#about', '/contact'].map((link, index) => (
              <motion.h3
                key={index}
                className="md:text-2xl sm:text-xl font-medium relative group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <a
                  href={link}
                  className="text-inherit transition-colors duration-300 group-hover:text-green-900"
                >
                  {['Home', 'Features', 'About us', 'Contact Us'][index]}
                  <span className="block h-0.5 max-w-0 bg-green-200 transition-all duration-300 group-hover:max-w-full"></span>
                </a>
              </motion.h3>
            ))}
          </motion.div>


          {/* Social Icons */}
          <motion.div
            className="flex gap-6 mt-7"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              { icon: <FaLinkedin />, color: "#0A66C2", label: "LinkedIn" },
              { icon: <RiTwitterXFill />, color: "#000000", label: "X" },
              { icon: <IoLogoInstagram />, color: "#E1306C", label: "Instagram" },
            ].map((item, i) => (
              <motion.a
                key={i}
                href="#"
                className="text-3xl lg:text-2xl p-3 rounded-full bg-white dark:bg-slate-800 shadow hover:shadow-lg transition-all duration-300"
                whileHover={{
                  scale: 1.2,
                  color: item.color,
                  boxShadow: `0px 0px 15px ${item.color}`,
                }}
                whileTap={{ scale: 0.9 }}
                title={item.label}
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>

        </div>

        {/* Divider */}
        <motion.div
          className="bg-black dark:bg-white lg:h-0.5 h-0.5 sm:h-0.5 mt-5"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ transformOrigin: 'left' }}
        ></motion.div>

        {/* Copyright */}
        <motion.p
          className='text-center lg:text-2xl text-2xl mt-5 py-1 mb-5 dark:mb-0'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          &#169; 2025 Made By Ayush. All rights reserved
        </motion.p>
      </div>
    </motion.footer>
  )
}

export default Footer
