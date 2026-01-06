import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets'

const Projects = () => {
    const [currentIndex,setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(1);

    useEffect(()=> {
        const updateCardsToShow =()=>{
            if(window.innerWidth >=1024){
                setCardsToShow(projectsData.length);
            }else{
                setCardsToShow(1)
            };
        };
            updateCardsToShow();

            window.addEventListener('resize', updateCardsToShow);
            return ()=> window.removeEventListener('resize', updateCardsToShow);
        

    },[])

    //Functions for Next and Prev Button
    const nextProject = ()=>{
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length)
    }
    const prevProject = ()=>{
        setCurrentIndex((prevIndex) => prevIndex === 0 ? projectsData.lenght-1 : prevIndex-1)
    }
  return (
    <div className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow:hidden' id='Projects'>
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">Projects <span className='underline underline-offset-4 decoration-1 under font-light'>Completed</span></h1>
        <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Crafting Excitement, Building Legacies Explore Our Portfolio</p>

        {/*Slider Buttons */}
        <div className="flex justify-end items-center mb-8">
            <button onClick={prevProject} className='p-3 bg-slate-200 rounded mr-2 cursor-pointer' aria-label='Previous Project'>
                <img src={assets.arrow_left} alt="previous" />
            </button>
            <button onClick={nextProject} className='p-3 bg-slate-200 rounded mr-2 cursor-pointer' aria-label='Next Project'>
                <img  src={assets.arrow_right} alt="Next" />
            </button>
        </div>
        {/*Project Slider container */}
        <div className='overflow-hidden'>
            {/* Projects */}
            <div className='flex gap-8 transition-transform duration-500 ease-in-out'
            style={{transform: `translateX(-${(currentIndex *100)/cardsToShow}%)`}}
            >
                {projectsData.map((project, index)=> (
                    <div className='relative shrink-0 w-full h-96 bg-slate-900 opacity-80 sm:w-1/4 cursor-pointer hover:opacity-100' key ={index}>
                        <img className="w-full h-full object-cover mb-14" src={project.image} alt={project.title} />
                        <div className='absolute left-0 right-0 bottom-5 flex justify-center '>
                            <div className="inline-block bg-slate-100 w-3/4 px-4 py-2 shadow-md ">
                            <h2 className='text-xl text-center font-semibold text-gray-800'>{project.title}</h2>
                           
                            <p className='text-grey-500 text-sm text-center mt-4'>{project.price} <span className='px-1 text-red-600'>|</span><span className='text-green-600'>{project.status}</span></p>

                            </div>

                        </div>

                    </div>
                ))}
            </div>
        </div>

    </div>
  )
}

export default Projects