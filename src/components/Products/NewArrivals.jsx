import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

const NewArrivals = () => {
    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        const container = scrollContainerRef.current;
        const scrollAmount = direction === 'left' ? -container.offsetWidth : container.offsetWidth;
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };
    const products = [
        {
            _id: "1",
            name: "Premium Leather Jacket",
            price: 4999,
            description: "Crafted from genuine leather with a luxurious finish. Features zippered pockets and adjustable cuffs.",
            color: "Brown",
            size: ["S", "M", "L", "XL"],
            rating: 4.5,
            images: {
                url: "https://picsum.photos/500/600?random=1",
                altText: "Premium Leather Jacket"
            },
            category: "Outerwear"
        },
        {
            _id: "2",
            name: "Casual Denim Shirt",
            price: 1499,
            description: "Classic denim shirt with pearl buttons. Perfect for casual outings. Made from premium cotton.",
            color: "Blue",
            size: ["S", "M", "L", "XL"],
            rating: 4.2,
            images: {
                url: "https://picsum.photos/500/600?random=2",
                altText: "Casual Denim Shirt"
            },
            category: "Shirts"
        },
        {
            _id: "3",
            name: "Classic White Sneakers",
            price: 2999,
            description: "Minimalist white sneakers with comfortable cushioning. Perfect for everyday wear.",
            color: "White",
            size: ["UK6", "UK7", "UK8", "UK9", "UK10"],
            rating: 4.8,
            images: {
                url: "https://picsum.photos/500/600?random=3",
                altText: "Classic White Sneakers"
            },
            category: "Footwear"
        },
        {
            _id: "4",
            name: "Designer Sunglasses",
            price: 1299,
            description: "UV-protected designer sunglasses with polarized lenses. Includes protective case.",
            color: "Black/Gold",
            size: ["One Size"],
            rating: 4.3,
            images: {
                url: "https://picsum.photos/500/600?random=4",
                altText: "Designer Sunglasses"
            },
            category: "Accessories"
        },
        {
            _id: "5",
            name: "Slim Fit Chinos",
            price: 1799,
            description: "Comfortable slim-fit chinos with stretch fabric. Perfect for office or casual wear.",
            color: "Khaki",
            size: ["30", "32", "34", "36"],
            rating: 4.6,
            images: {
                url: "https://picsum.photos/500/600?random=5",
                altText: "Slim Fit Chinos"
            },
            category: "Pants"
        },
        {
            _id: "6",
            name: "Elegant Watch",
            price: 5999,
            description: "Premium stainless steel watch with Japanese movement. Water-resistant up to 30m.",
            color: "Silver",
            size: ["One Size"],
            rating: 4.9,
            images: {
                url: "https://picsum.photos/500/600?random=6",
                altText: "Elegant Watch"
            },
            category: "Accessories"
        },
        {
            _id: "7",
            name: "Cotton Polo Shirt",
            price: 999,
            description: "Soft cotton polo shirt with breathable fabric. Features embroidered logo.",
            color: "Navy",
            size: ["S", "M", "L", "XL", "XXL"],
            rating: 4.4,
            images: {
                url: "https://picsum.photos/500/600?random=7",
                altText: "Cotton Polo Shirt"
            },
            category: "Shirts"
        },
        {
            _id: "8",
            name: "Leather Wallet",
            price: 799,
            description: "Genuine leather wallet with multiple card slots and coin pocket. RFID blocking.",
            color: "Brown",
            size: ["One Size"],
            rating: 4.7,
            images: {
                url: "https://picsum.photos/500/600?random=8",
                altText: "Leather Wallet"
            },
            category: "Accessories"
        }
    ];

    return (
        <section className="py-16 px-4 lg:px-0">
            <div className="container mx-auto relative">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Explore New Arrivals</h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Discover the latest styles straight off the runway, freshly added to keep your wardrobe on the cutting edge of fashion.
                    </p>
                </div>
                
                {/* Scroll Buttons */}
                <button 
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 backdrop-blur-sm"
                    aria-label="Scroll left"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                
                <button 
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 backdrop-blur-sm"
                    aria-label="Scroll right"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Scrollable Container */}
                <div 
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto gap-6 scroll-smooth scrollbar-hide"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {products.map((product) => (
                        <div key={product._id} className="group flex-none w-[280px] md:w-[320px]">
                            <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                <img 
                                    src={product.images.url} 
                                    alt={product.images.altText}
                                    className="w-full h-[300px] object-cover transform transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-4 right-4">
                                    <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                                        {product.category}
                                    </span>
                                </div>

                            </div>
                            
                            <div className="mt-4 px-2">
                                <h3 className="text-lg font-medium text-gray-900 mb-1">{product.name}</h3>
                                <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.description}</p>
                                
                                <div className="flex items-center mb-2">
                                    <div className="flex items-center">
                                        {[...Array(5)].map((_, index) => (
                                            <svg
                                                key={index}
                                                className={`w-4 h-4 ${
                                                    index < Math.floor(product.rating)
                                                        ? 'text-yellow-400'
                                                        : 'text-gray-300'
                                                }`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                        <span className="ml-1 text-sm text-gray-600">({product.rating})</span>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-xl font-bold text-gray-900">₹{product.price}</span>
                                    <div className="flex gap-1">
                                        {product.size?.map((size) => (
                                            <span key={size} className="text-xs bg-gray-100 px-2 py-1 rounded">
                                                {size}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <Link 
                                    to={`/product/${product._id}`} 
                                    className="block w-full text-center bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800 transition-colors mt-2"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default NewArrivals
