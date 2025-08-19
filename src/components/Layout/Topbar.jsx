import React from 'react'
import { TbBrandMeta } from 'react-icons/tb'
import { IoLogoInstagram } from 'react-icons/io5'
import { RiTwitterXLine } from 'react-icons/ri'

const Topbar = () => {
    return (
        <div className='bg-[#3B0075] text-white py-2'>
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    {/* Social Icons */}
                    <div className='flex items-center justify-center md:justify-start space-x-4'>
                        <a href="#" className="hover:text-gray-300 transition-colors">
                            <TbBrandMeta className='h-5 w-5' />
                        </a>
                        <a href="#" className="hover:text-gray-300 transition-colors">
                            <IoLogoInstagram className='h-5 w-5' />
                        </a>
                        <a href="#" className="hover:text-gray-300 transition-colors">
                            <RiTwitterXLine className='h-5 w-5' />
                        </a>
                    </div>

                    {/* Tagline */}
                    <div className="text-sm text-center order-first md:order-none">
                        <span>We Ship From Farms To Your Home</span>
                    </div>

                    {/* Phone Number */}
                    <div className="text-sm text-center md:text-right">
                        <a href="tel:+1234567890" className="hover:text-gray-300 transition-colors">
                            +1 (234)567-890
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
