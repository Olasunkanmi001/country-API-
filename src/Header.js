import React from 'react'
import { MdOutlineDarkMode } from "react-icons/md";

const Header = () => {

    const toggleTheme = () => {
        document.documentElement.classList.toggle("dark")
    }
  return (
    <div className='flex justify-around bg-[#F8FAFC] dark:bg-[#111827] h-24 pt-8 shadow-md'>
        <h1 className='font-bold dark:text-white text-lg lg:text-4xl'>Where in the world?</h1>

       <div className='flex gap-1'> 
       <button className='h-3 lg:h-6'><MdOutlineDarkMode className='lg:h-8 lg:w-10 dark:text-white' onClick={toggleTheme} /></button>
        <h6 className=' font-bold text-xs lg:text-2xl dark:text-white '>Dark Mode</h6>
        </div>



    </div>
  )
}

export default Header