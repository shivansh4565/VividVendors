import React from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../Assests/rabbit-hero.webp'

const Hero = () => {
  return (
    <section className='relative'>
      <img src={heroImg} alt="" className="w-full h-[400px] md:h-[600px] l:h-[752px] object-cover" />

      {/* Overlay content */}
      <div className="absolute inset-0 flex items-center justify-center bg-transparent bg-gradient-to-b from-gray-950 to-transparent">
        <div className="rounded-lg text-white text-center p-6">
          <h1 className="text-4xl md:text-9xl font-bold tracking-tighter uppercase shadow-lg">
            Vacation <br />Ready
          </h1>
          <p className="text-sm tracking-tighter md:text-lg mb-6">
            Explore our exclusive collection of vacation Collections and make your next getaway unforgettable.
          </p>
          <Link to='#' className="bg-white text-gray-950 px-6 py-2  rounded-sm text-lg"> Shop Now</Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
