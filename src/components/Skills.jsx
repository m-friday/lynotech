import React from 'react'

import HTML from '../assets/html-5.png';
import CSS from '../assets/css-3.png';
import JavaScript from '../assets/js.png';
import Java from '../assets/java.png';
import Python from '../assets/python.png';
import ReactImg from '../assets/physics.png';
import Github from '../assets/github.png';
import Database from '../assets/database.png';

const Skills = () => {
  return (
    <div name="skills" className='bg-[#0a192f] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-purple-600'>Experience</p>
                <p className='py-4'>// These are the technologies i have worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt='HTML icon'/>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt='HTML icon'/>
                    <p className='my-4'>CSS</p>
                </div> 
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt='HTML icon'/>
                    <p className='my-4'>JAVASCRIPT</p>
                </div> 
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Java} alt='HTML icon'/>
                    <p className='my-4'>JAVA</p>
                </div> 
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Python} alt='HTML icon'/>
                    <p className='my-4'>PYTHON</p>
                </div> 
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt='HTML icon'/>
                    <p className='my-4'>REACT</p>
                </div> 
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Github} alt='HTML icon'/>
                    <p className='my-4'>GITHUB</p>
                </div> 
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Database} alt='HTML icon'/>
                    <p className='my-4'>DATABASE</p>
                </div>    
            </div>
        </div>
    </div>
  )
}

export default Skills