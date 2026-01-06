import { assets } from "../assets/assets"


const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gradient-to-r from amber-300 to-amber-400 w-full overflow-hidden ' id="Footer">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
                <img className='w-10 h-10 ' src={assets.logo} alt="" />
                <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit doloribus corporis neque maiores eligendi eos laudantium dolor qui reprehenderit officiis! Asperiores consequuntur ipsum sunt quis et voluptates commodi? Voluptatum, voluptatem.</p>

            </div>
            <div className="w-full md:w-1/5 mb-8 md:mb-0">
                <h3 className="text-lg font-bold mb-4">Company</h3>
                <ul className="flex flex-col gap-2 text-slate-800">
                    <a href="#Header" className="hover:text-amber-600">Home</a>
                     <a href="#About" className="hover:text-amber-600">About</a>
                      <a href="#Projects" className="hover:text-amber-600">Projects</a>
                       <a href="#Contact" className="hover:text-amber-600">Contact</a>
                        <a href="#" className="hover:text-amber-600">Privacy Policy</a>
                </ul>
            </div>
            <div className="w-full md:w-1/3">
               <h3 className="text-lg font-bold mb-4">Subscribe to our newsletter</h3>
               <p className="mb-4 max-w-80">The latest news, articles, and resources sent to your inbox weekly</p>
               <div className="flex gap-2">
                <input type="email" name="Email" placeholder="Enter your email" className="p-2 rounded bg-gray-200 text-blue-400 border border-slate-300 focus:outline-none w-full md:w-auto" />
                <button className='py-2 px-4 rounded bg-slate-800 text-white'>Subscribe</button>
               </div>

            </div>
        </div>
        <div className='border-t border-gray-800 py-4 mt-10 text-center text-gray-600'>
            Copyright 2026 @anonymous_dev254 . All rights reserved.
        </div>
    </div>
  )
}

export default Footer