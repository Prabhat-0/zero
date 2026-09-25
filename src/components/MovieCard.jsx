import React from 'react'
import Buttons from './Buttons';
import { FaPlay, FaPlus, FaThumbsUp } from 'react-icons/fa';

const buttonContent = [{ text: "Watch", icon: <FaPlay className="w-4 h-4" /> }];

const MovieCard = ({ item }) => {
    const { Poster, Title, Type, Year, imdbID } = item;
    const posterSrc = Poster && Poster !== "N/A" ? Poster : "/fallback-poster.png";

    return (
        <div className='group relative z-0 hover:z-30 w-full transition-all duration-300 ease-out hover:scale-110 origin-center'>

            {/* Base card — always visible */}
            <div className='relative w-full aspect-2/3 rounded-lg overflow-hidden shadow-lg bg-brand-primary'>
                <img
                    src={posterSrc}
                    alt={Title}
                    className='object-cover w-full h-full transition-transform duration-500 group-hover:scale-105'
                    loading="lazy"
                />

                {/* Gradient always at bottom for subtle title hint even when not hovered */}
                <div className='absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-black/80 to-transparent group-hover:opacity-0 transition-opacity duration-300' />
                <h3 className='absolute bottom-2 left-2 right-2 text-white font-semibold text-sm truncate group-hover:opacity-0 transition-opacity duration-300'>
                    {Title}
                </h3>
            </div>

            {/* Hover overlay — expands & fades in with full details */}
            <div className='absolute inset-0 rounded-lg overflow-hidden opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 
                            transition-all duration-300 ease-out pointer-events-none group-hover:pointer-events-auto
                            bg-linear-to-t from-black via-black/90 to-black/40 flex flex-col justify-end p-4'>

                <h2 className='font-bold text-lg text-white leading-tight mb-1'>{Title}</h2>

                <div className='flex items-center gap-2 text-xs text-gray-300 mb-3'>
                    <span>{Year}</span>
                    <span className='w-1 h-1 rounded-full bg-gray-400' />
                    <span className='capitalize'>{Type}</span>
                </div>

                <div className='flex items-center gap-2 mb-2'>
                    <Buttons config={buttonContent[0]} />
                    <button className='w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 text-white hover:border-white transition-colors'>
                        <FaPlus className='w-3 h-3' />
                    </button>
                    <button className='w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 text-white hover:border-white transition-colors'>
                        <FaThumbsUp className='w-3 h-3' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MovieCard