import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { useState } from 'react';


const NavBar = () => {
    // const navLinks=["Home","Movies","TvShows","ContactUs"];
     const navLists=[
    {value:'Home',path:'/'},
    {value:'Movies',path:'/movies'},
    {value:'TvShows',path:'/tvshows'},
    {value:'ContactUs',path:'/contact'}]
    
    const[hamburger,setHamburger]=useState(false);
    console.log(hamburger);
    return (
         // Removed text-center (redundant with items-center)
    <nav className='w-full h-20 p-2 bg-transparent text-white flex items-center justify-around '>
      
        <span className='
            text-red-600 font-bold text-3xl p-3 inline-block cursor-pointer
            bg-transparent border-2 border-transparent border-b-transparent
            backdrop-blur-md
            transition-all duration-300 ease-in-out transform
            hover:rounded-2xl 
            hover:border-white/20 
            hover:border-b-red-300/60
            hover:translate-x-1 
            hover:bg-white/5
            hover:shadow-[0_5px_10px_rgba(255,255,255,0.5)]
            hover:text-white
            '>
            ZERO
        </span>

        {/* NavBar Links  */}
    <ul className='flex items-center gap-4 list-none m-0 p-0 '>
  {navLists.map((item, index) => (
    <li key={index}>
      <a 
        href={item.path} 
        className='
        text-xl
         text-gray-300 font-sans  no-underline px-4 py-2 
          inline-flex items-center justify-center cursor-pointer  
          border-2 border-transparent
          transition-all duration-300 ease-in-out transform
          hover:rounded-2xl 
          hover:border-white/20 
          hover:border-b-red-300/60
          hover:translate-x-1 
          hover:bg-white/5
          hover:shadow-[0_8px_12px_-3px_rgba(255,255,255,0.2)]
          hover:text-white
        '
      >
        {item.value}
      </a>
    </li>
  ))}

</ul>

        {/* Input Container  */}
      <div className='relative w-[30%] h-14 px-4 border-2 border-white/20 rounded-full flex items-center bg-transparent'>
        
        <input 
          type="text" 
          placeholder="Search movies..."
          className='w-[85%] font-sans bg-transparent outline-none border-none text-white placeholder-gray-400 text-lg appearance-none'
        />
       
        <button className='absolute right-4 top-1/2 -translate-y-1/2 outline-none border-none bg-transparent p-0 cursor-pointer text-gray-400 hover:text-white transition-colors'>
          <FaSearch className='w-6 h-6' />
        </button>
        
      </div>

        {/*hamburger*/}
      <div className="w-12 lg:hidden flex h-12 justify-center items-center" onClick={()=>setHamburger(prev=>!prev)}>
        <FiMenu className="w-full h-full hover:opacity-70"/>
      </div>
    </nav>
    )
}

export default NavBar