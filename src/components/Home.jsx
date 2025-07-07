import React from 'react'
import Footer from './Footer'
import myimg from '../assets/myimg.jpg'; // 


function Home() {
  return (
    <div className='text-white bg-gradient-to-b from-[#0f172a] to-[#1e293b]  flex justify-between w-full items-start p-10 md:p-20'>
        <div className='md:w-2/4 md:pt-10'>
            <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'>Hello' I am Jaymin</h1>
            <p className='text-sm md:text-2xl tracking-tight'>
             I'm a passionate frontend developer and Computer Engineering student, focused on building clean, responsive, and user-friendly web applications using modern technologies like React and Tailwind CSS.

            </p>
            <button onClick={() => {
    document.getElementById('Footer')?.scrollIntoView({ behavior: 'smooth' });
  }}
  className="mt-5 md:mt-10 text-white py-2 px-4 text-sm md:text-lg font-semibold rounded-3xl bg-[#465697] hover:opacity-85 duration-300 hover:scale-105">
                Contact Me
            </button>
        </div>
        <div><img
  className="w-72 h-72 md:w-80 md:h-80 rounded-full object-cover shadow-lg border-4 border-white"
  src={myimg}
  alt="my_img"
/>

</div>
    </div>
  )
}

export default Home
