import React from 'react'
import { FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'

const footerLinks = [
    {
        heading: 'Explore',
        links: ['Movies', 'Series', 'New & Popular', 'My List'],
    },
    {
        heading: 'Company',
        links: ['About', 'Careers', 'Press', 'Contact'],
    },
    {
        heading: 'Legal',
        links: ['Terms of Use', 'Privacy', 'Cookie Preferences'],
    },
]

const Footer = () => {
    return (
        <footer className='w-full bg-black border-t border-white/10 text-gray-400 mt-16'>
            <div className='max-w-7xl mx-auto px-6 py-12'>

                <div className='flex flex-col md:flex-row md:justify-between gap-10'>

                    <div className='max-w-xs'>
                        <h2 className='text-white font-extrabold text-3xl tracking-wide mb-3'>
                            ZERO
                        </h2>
                        <p className='text-sm leading-relaxed'>
                            Your world of movies, one search away. Discover, explore and
                            never run out of something great to watch.
                        </p>
                        <div className='flex items-center gap-4 mt-5'>
                            <a href='#' className='hover:text-white transition-colors'>
                                <FaTwitter className='w-5 h-5' />
                            </a>
                            <a href='#' className='hover:text-white transition-colors'>
                                <FaInstagram className='w-5 h-5' />
                            </a>
                            <a href='#' className='hover:text-white transition-colors'>
                                <FaGithub className='w-5 h-5' />
                            </a>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 sm:grid-cols-3 gap-8'>
                        {footerLinks.map((col) => (
                            <div key={col.heading}>
                                <h3 className='text-white font-semibold text-sm mb-3 uppercase tracking-wider'>
                                    {col.heading}
                                </h3>
                                <ul className='space-y-2'>
                                    {col.links.map((link) => (
                                        <li key={link}>
                                                <a
                                                href='#'
                                                className='text-sm hover:text-white transition-colors'>
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3'>
                    <p className='text-xs'>
                        &copy; 2026 ZERO. All rights reserved.
                    </p>
                    <p className='text-xs'>
                        Movie data powered by{' '}
                            <a
                            href='https://www.omdbapi.com/'
                            target='_blank'
                            rel='noreferrer'
                            className='hover:text-white transition-colors underline'
                        >
                            OMDb API
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer