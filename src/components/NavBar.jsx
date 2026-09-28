import React, { useState} from 'react';
import { FaSearch } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi'; // 1. Imported FiX for the close button
import { NavLink } from 'react-router-dom';

const NavBar = ({searchMovie}) => {
  const navLists = [
    { value: 'Home', path: '/' },
    { value: 'Movies', path: '/movies' },
    { value: 'TvShows', path: '/' },
    { value: 'ContactUs', path: '/contactUs' }
  ];
	const [input,setInput]=useState("");
  	const [hamburger, setHamburger] = useState(false);
    const handleSearch = () => {
		searchMovie(input);
		setInput("");
		setHamburger(false); // close mobile drawer after searching
    };


  return (
    <nav className='w-full h-20 p-4 bg-transparent  text-white flex items-center justify-between lg:justify-around relative z-50'>
      
      
      <div className='
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
      </div>

      
      <ul className='hidden lg:flex items-center gap-4 list-none m-0 p-0'>
        {navLists.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path} end
              className='
                text-xl text-gray-300 font-sans no-underline px-4 py-2 
                inline-flex items-center justify-center cursor-pointer  
                border-2 border-transparent
                transition-all duration-300 ease-in-out transform
                hover:rounded-2xl hover:border-white/20 hover:border-b-red-300/60
                hover:translate-x-1 hover:bg-white/5
                hover:shadow-[0_8px_12px_-3px_rgba(255,255,255,0.2)]
                hover:text-white
              '
            >
              {item.value}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className='hidden lg:flex relative w-[30%] h-14 px-4 border-2 border-white/20 rounded-full items-center bg-transparent' >
        <input 
          type="text" 
		  value={input}
		  onChange={(e)=>{setInput(e.target.value)}}
      
        	onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder={input===""?"Search movies...":input}
          className='w-[85%] font-sans bg-transparent outline-none border-none text-white placeholder-gray-400 text-lg appearance-none h-full'
        />
        <button className='absolute right-4 top-1/2 -translate-y-1/2 outline-none border-none bg-transparent p-0 cursor-pointer text-gray-400 hover:text-white transition-colors h-full' onClick={handleSearch}>
          <FaSearch className='w-6 h-6' />
        </button>
      </div>

      
      <div 
        className="w-8 h-8 lg:hidden flex justify-center items-center cursor-pointer z-50 text-white" 
        onClick={() => setHamburger(prev => !prev)}
      >
        {hamburger ? <FiX className="w-full h-full" /> : <FiMenu className="w-full h-full" />}
      </div>

      {/* 
        ========================================================================
        MOBILE EXPANDABLE DRAWER PANEL
        ========================================================================
      */}
     <div className={`
			absolute top-20 left-0 w-full bg-black/95 backdrop-blur-xl
			flex flex-col items-center gap-6  transition-all duration-300 ease-in-out text-xl text-gray-300 font-sans no-underline px-4 py-2 
                 justify-center cursor-pointer  
                border-2 border-transparent
                transform
                hover:rounded-2xl hover:border-white/20 hover:border-b-red-300/60
                hover:translate-x-1 hover:bg-white/5
                hover:shadow-[0_8px_12px_-3px_rgba(255,255,255,0.2)]
                hover:text-white lg:hidden
			${hamburger ? 'opacity-100 translate-y-0 visible border-b border-white/10' : 'opacity-0 -translate-y-5 invisible pointer-events-none'}
			`}>
			<ul className='flex flex-col items-center gap-6 list-none m-0 p-0 w-full'>
				{navLists.map((item, index) => (
				<li key={index} className="w-full text-center">
					<NavLink
						to={item.path}  end
						onClick={() => setHamburger(false)} 
						className='  border-b  active:text-red-500 text-xl text-gray-300 font-sans no-underline px-4 py-2 
							inline-flex items-center justify-center cursor-pointer  
							border-2 border-transparent
							transition-all duration-300 ease-in-out transform
							hover:rounded-2xl hover:border-white/20 hover:border-b-red-300/60
							hover:translate-x-1 hover:bg-white/5
							hover:shadow-[0_8px_12px_-3px_rgba(255,255,255,0.2)]
							hover:text-white' 
						>
						{item.value}
					</NavLink>
				</li>
				))}
			</ul>

			<div className='relative w-[85%] sm:w-[60%] h-12 px-4 border-2 border-white/20 rounded-full flex items-center bg-transparent mt-2 focus-within:border-white/40 transition-colors duration-200'>
				<input 
				type="text" 
				placeholder={input===""?"Search movies...":input}
				className='w-[85%] font-sans bg-transparent outline-none border-none text-white placeholder-gray-500 text-base appearance-none'
          value={input}
		  onChange={(e)=>{setInput(e.target.value)}}
onKeyDown={(e) => e.key === "Enter" && handleSearch()}
				/>
				<button className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white bg-transparent border-none p-0 cursor-pointer transition-colors duration-200  ' onClick={handleSearch} >
				<FaSearch className='w-5 h-5' />
				</button>
			</div>
		</div>


    </nav>
  );
};

export default NavBar;
