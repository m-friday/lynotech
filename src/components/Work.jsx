import React from 'react';
import WorkImg from '../assets/WorkingImg.jpeg';
import realEstate from '../assets/RealEstate.jpg';

// Define an array of projects
const projects = [
    {
        id: 1,
        name: 'Text to Speech Converter',
        description: 'Description of project 1',
        codeUrl: 'https://github.com/m-friday/text-to-speech-converter.git',
        image: WorkImg,
    },
    {
        id: 2,
        name: 'Sound Webpage',
        description: 'Description of project 2',
        codeUrl: 'https://github.com/m-friday/sound-webpage.git',
        image: realEstate,
    },
    {
        id: 3,
        name: 'Python Code',
        description: 'Description of project 3',
        codeUrl: 'https://github.com/m-friday/python_code.git',
        image: realEstate,
    },
];

const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-purple-600'>
                        Work
                    </p>
                    <p className='py-6'>// check out some of my recent work</p>
                </div>

                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-y-48'>
                    {projects.map(project => (
                        <div
                            key={project.id}
                            style={{ backgroundImage: `url(${project.image})` }}
                            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                            {/* Hover Effects*/}
                            <div className='group-hover: opacity-100'>
                                <span className='text-2xl font-bold text-white tracking-wider'>
                                    {project.name}
                                </span>
                                <div className='pt-8 text-center'>
                                    <a href={project.codeUrl}>
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                            Code
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Work;
