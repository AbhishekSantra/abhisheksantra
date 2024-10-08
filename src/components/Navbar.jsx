import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from 'react-scroll';
const Navbar = () => {
    const [nav, setNav] = useState(false);
    const links = [
        {
            id: 1,
            link: "Home"
        },
        {
            id: 2,
            link: "About"
        },
        {
            id: 3,
            link: "Projects"
        },
        {
            id: 4,
            link: "Experience"
        },
        {
            id: 5,
            link: "Contacts"
        }
    ]
    return (
        <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-transparent fixed'>
            <div>
                <h1 className='text-5xl font-signature ml-2'>Abhishek</h1>
            </div>
            <ul className='hidden md:flex'>
                {
                    links.map(({ id, link }) => (
                        <li key={id}
                            className='px-4 touch cursor-pointer capitalize font-medium text-gray-100 hover:scale-105 duration-200'>
                            <Link to={link} smooth duration={500}>{link}</Link>
                        </li>
                    ))
                }
            </ul>
            
            <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
            {
                nav && (
                    <ul className='flex justify-center items-center flex-col absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-sky-900 to-gray-800 text-gray-500'>
                        {
                            links.map(({ id, link }) => (
                                <li key={id} className='px-4 py-6 cursor-pointer capitalize text-4xl'>
                                    <Link onClick={()=>setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
                                </li>
                            ))
                        }
                    </ul>
                )
            }
        </div>
    
    )
}

export default Navbar