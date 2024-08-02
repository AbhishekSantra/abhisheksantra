import React from 'react'
import Abhishek from "../assets/Abhishek.jpg";
import { FaLinkedin, FaGithub} from 'react-icons/fa';
import {CgMail} from 'react-icons/cg'
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import { Link } from 'react-scroll';
import "./home.css"
const Home = () => {
  return (
    <div className="hoverbg">
    <div name="Home" className='home h-screen w-full bg-scroll hover:bg-sky-700'>
        <div className='flex flex-col justify-center items-center max-w-screen-lg h-full mx-auto md:flex-row'>
            <div className='portfolio bg-gradient-to-b from-cyan-700 '>
                <img src={Abhishek} alt="My-portfolio" className='portfolio_img'/>
                <h1 className='portfolio_heading'>Abhishek Santra</h1>
                <p>AWS Cloud Developer</p> 
                <div className='flex flex-row justify-center items-center text-white'>
                    <a href="https://www.linkedin.com/in/abhishek-santra-0979a9207/"target='_blank' rel="noreferrer"><FaLinkedin className='portfolio_link'/></a>
                    <a href="https://github.com/AbhishekSantra"target='_blank' rel="noreferrer"><FaGithub className='portfolio_link'/></a>
                    <a href="mailto:santrabhishek@gmail.com"target='_blank' rel="noreferrer"><CgMail className='portfolio_link'/></a>
                </div>
                <a href='https://drive.google.com/file/d/1GahAIF6Pzbx_4FIIylvkploioQ_8zaHr/view?usp=share_link' target='_blank' rel="noreferrer">
                <button className='portfolio_btn group text-white w-fit px-6 py-3 my-3 flex items-center rounded-md bg-gradient-to-b from-cyan-950 to-black-500'>
                    CV
                    <span className='group-hover:rotate-90'><MdOutlineKeyboardArrowRight/></span>
                </button> 
                </a>          
            </div>
            <div className='details flex flex-col justify-center h-full'>
                <h2 className='bg-gradient-to-r from-indigo-500 text-4xl sm:text-7xl font-bold bg-clip-text text-transparent'>I'm a Cloud Developer</h2>
                <p className='text-gray-500 py-4 max-w-md'>I design, build, and manage scalable applications using cloud services and infrastructure while ensuring security, performance, and cost-efficiency.</p>
                <div className='details_btn'>
                    <Link to='Projects' className='group text-white w-fit px-6 py-3 my-3 flex items-center rounded-md bg-gradient-to-b from-cyan-900 to-black-200 hover:cursor-pointer'>
                        Projects
                        <span className='group-hover:rotate-90'><MdOutlineKeyboardArrowRight/></span>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Home