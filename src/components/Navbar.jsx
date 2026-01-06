import { useEffect, useState } from 'react';
import {assets} from '../assets/assets'

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    useEffect( ()=>{
        if(showMobileMenu){
            document.body.style.overflow ="hidden"
        }else{
            document.body.style.overflow ="auto"
        }
        return()=>{
            document.body.style.overflow ="auto"
        };

    },[showMobileMenu])
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        {/*Logo */}
        <img className='w-28 h-28' src={assets.logo} alt="" />

        {/*Menu Items */}
        <ul className='hidden md:flex gap-7 text-green-200'>
            <a href="#Header" className='cursor-pointer hover:text-red-500'>Home</a>
             <a href="#About" className='cursor-pointer hover:text-red-500'>About</a>
              <a href="#Projects" className='cursor-pointer hover:text-red-500'>Projects</a>
               <a href="#Testimonials" className='cursor-pointer hover:text-red-500'>Testimonials</a>

        </ul>
        <button className='hidden md:block bg-amber-300 px-8 py-2 rounded-full'>Sign Up</button>
        <img onClick={() => setShowMobileMenu(true)} src={assets.menu_icon_open} className='md:hidden w-7 cursor-pointer' alt="" />
      </div>
      {/*Mobile Menu */}
      <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' :'h-0 w-0'}  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
        <div className='flex justify-end p-6 cursor-pointer'>
            <img onClick={()=> setShowMobileMenu(false)} className='w-6' src={assets.menu_icon_open} alt="" />
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 tetx-lg font-medium'>
            <a onClick={()=> setShowMobileMenu(false)} className='px-4 py-2 rounded-full inline-block' href="#Header">Home</a>
            <a onClick={()=> setShowMobileMenu(false)} className='px-4 py-2 rounded-full inline-block' href="#About">About</a>
            <a onClick={()=> setShowMobileMenu(false)} className='px-4 py-2 rounded-full inline-block' href="#Projects">Projects</a>
            <a onClick={()=> setShowMobileMenu(false)} className='px-4 py-2 rounded-full inline-block' href="#Testimonials">Testimonials</a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
