import React from 'react';

const Buttons = ({ config }) => {
  const { text, icon } = config;

  return (
    <button className='
      inline-flex items-center justify-center gap-2
      px-6 py-2.5 h-auto text-base font-bold tracking-wide uppercase
      bg-transparent text-white border-2 border-white/40 rounded-full
      transition-all duration-300 ease-in-out transform cursor-pointer 
      hover:bg-blue-200 
      hover:border-blue-200
      hover:text-black 
      hover:scale-105
      hover:shadow-[0_0_15px_rgba(191,219,254,0.6)]
    '>
      { icon}
      <span>{text}</span>
    </button>
  );
};

export default Buttons;
