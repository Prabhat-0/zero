import React from 'react'
import Buttons from './Buttons'
import { FaPlus,FaPlay } from 'react-icons/fa'

const Hero = () => {
      const buttonConfigs = [
            { text: "Watch", icon: <FaPlay className="w-4 h-4" /> },
            { text: "My List", icon: <FaPlus className="w-4 h-4" /> }
        ];
  return (
    <main className='w-full h-[70vh] md:h-[70vh] lg:h-[80vh] relative z-10 overflow-hidden'>
 
        <div className='w-full h-full absolute inset-0 z-0'>
            <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7HgaBwAfs2abssLKCgE5x8wzF73iD4YDE5j9Euc2woUlYo1IMIpgr4BCy&s=10" 
            alt="Hero Banner"  
            className='w-full h-full object-cover object-center'
            />
            
            
            
        </div>

        <div className='
            absolute inset-y-0 left-0 z-10 w-full md:w-[60%] lg:w-[45%] 
            flex flex-col justify-end p-6 md:p-12
            bg-linear-to-r from-black/90 via-black/70 to-transparent leading-7 
            '>
                <div className='w-28 h-28 mb-8 hidden md:flex lg:flex sm:flex'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUvpGG_cX6LjNFlRxAtOkeLnDD53daz-P1MTy4tUMdqg&s=10" alt="Banner" className='object-cover h-full w-full  rounded-full'/></div>
            <h1 className="font-display text-2xl md:text-4xl lg:text-6xl text-white uppercase tracking-wider drop-shadow-xl">
                Spider-Man
            </h1>
            <p className="text-gray-300 max-w-md font-sans font-medium mt-2 drop-shadow
              text-lg/7 md:text-base/6 lg:text-3xl/10">
                Swing into action with cinema's iconic web-slinger as he faces his toughest battles yet.
            </p>
            <div className="flex gap-6 mt-6">
                {buttonConfigs.map((btnData, index) => (
                  <Buttons key={index} config={btnData} />
                ))}
            </div>
           
        </div>

    </main>

  )
}

export default Hero