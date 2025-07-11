import React, { useEffect, useState } from 'react'
import { MdClose, MdDarkMode, MdMenu } from 'react-icons/md'
import { CiLight } from 'react-icons/ci'
import { motion } from 'framer-motion' // ✅ added

function Navbar() {
  const [darkMode, setdarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const [menu, setmenu] = useState(false);
  const handleMenu = () => setmenu(!menu);

  return (
    <motion.nav
      className='bg-gray-50 dark:bg-black text-black dark:text-white dark:border-2 dark:border-slate-900'
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center sm:gap-10 justify-between py-6 px-10 md:py-5 md:px-25 sm:py-4 sm:px-10">
        <h1 className='md:text-4xl sm:text-3xl text-3xl font-extrabold'><a href="/">GenEmail</a></h1>
        <div className="nav-list md:flex sm:flex gap-5 hidden">
          <h3 className='md:text-2xl font-medium hover:text-gray-600 sm:text-xl'><a href='/'>Home</a></h3>
          <h3 className='md:text-2xl font-medium hover:text-gray-600 sm:text-xl'><a href='/genrate'>Generate</a></h3>
          <h3 className='md:text-2xl font-medium hover:text-gray-600 sm:text-xl'><a href='/emails'>Emails</a></h3>
        </div>

        <div className="flex items-center justify-center">
          <div className="">
            <button
              onClick={() => setdarkMode(!darkMode)}
              className='text-black dark:text-white px-4 py-2 rounded text-2xl lg:text-3xl'
            >
              {darkMode ? <CiLight /> : <MdDarkMode />}
            </button>
          </div>
          <div className="md:hidden sm:hidden text-2xl" onClick={handleMenu}>
            {menu ? <MdClose /> : <MdMenu />}
          </div>
        </div>
      </div>

      {menu && (
        <div className="md:hidden sm:hidden absolute top-16 right-0 overflow-hidden w-[50%] h-[40%] flex items-center flex-col justify-center px-6 py-4 bg-gray-100 dark:bg-black dark:text-white dark:border-2 dark:border-slate-900 text-base z-50 shadow-md gap-5">
          <h3 className='text-xl font-medium hover:text-gray-600 transition sm:text-xl'><a href='/'>Home</a></h3>
          <h3 className='text-xl font-medium hover:text-gray-600 sm:text-xl'><a href='/genrate'>Generate</a></h3>
          <h3 className='text-xl font-medium hover:text-gray-600 sm:text-xl'><a href='/emails'>Emails</a></h3>
          <h3 className='text-xl font-medium hover:text-gray-600 sm:text-xl'><a href='/contact'>Contact</a></h3>
        </div>
      )}
    </motion.nav>
  )
}

export default Navbar;
