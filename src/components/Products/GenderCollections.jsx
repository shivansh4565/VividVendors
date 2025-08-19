import React from 'react'
import { Link } from 'react-router-dom'
import Men from '../Assests/mens-collection.webp'
import Women from '../Assests/womens-collection.webp'
const GenderCollections = () => {
  return (
   <section className='py-16 px-4 lg:px-0 rounded-b-sm'>
    <div className="container mx-auto flex flex-col md:flex-row gap-8">
        {/* womens collection*/}
        <div className="relative rounded-4xl flex-1 group overflow-hidden">
            <img 
                src={Women} 
                alt="Women's Collection"  
                className="w-full h-[700px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-6 rounded-lg shadow-lg transform transition-all duration-300 group-hover:translate-y-[-8px]">
                <h1 className='text-3xl font-bold text-gray-900 mb-3'>Women's Collection</h1>
             <Link 
  to="/collections/all?gender=Women" 
  className="inline-block text-gray-900 text-lg font-medium 
             hover:text-gray-700 
             transform hover:-translate-y-1 hover:scale-105 
             transition-all duration-300 ease-in-out"
>
  Shop Now →
</Link>

            </div>
        </div>

        {/* men's collection*/}
        <div className="relative rounded-4xl flex-1 group overflow-hidden">
            <img 
                src={Men} 
                alt="Men's Collection"  
                className="w-full h-[700px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-6 rounded-lg shadow-lg transform transition-all duration-300 group-hover:translate-y-[-8px]">
                <h1 className='text-3xl font-bold text-gray-900 mb-3'>Men's Collection</h1>
             <Link 
  to="/collections/all?gender=Women" 
  className="inline-block text-gray-900 text-lg font-medium 
             hover:text-gray-700 
             transform hover:-translate-y-1 hover:scale-105 
             transition-all duration-300 ease-in-out"
>
  Shop Now →
</Link>

            </div>
        </div>
    </div>

   </section>
  )
}

export default GenderCollections
