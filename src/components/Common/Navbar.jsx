import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CardDrawer from '../Layout/CardDrawer';
import {
    HiOutlineUser,
    HiOutlineShoppingBag,
    HiMagnifyingGlass,
    HiBars3BottomRight,
    HiXMark
} from 'react-icons/hi2';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const [drawerOpen, setDrawerOpen] = useState(false); // Cart drawer state

    const toggleCartDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    // Search toggle function
    const handleSearchToggle = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    // Search submit handler
    const handleSearch = (e) => {
        e.preventDefault();
        console.log("search Term : ", searchTerm);
        setIsSearchOpen(false);
    };

    return (
        <>
            <nav className="bg-white shadow-md relative z-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Search Bar Overlay */}
                    {isSearchOpen && (
                        <div className="fixed inset-0 bg-white z-50">
                            <div className="container mx-auto px-4 py-4">
                                <form onSubmit={handleSearch} className="flex items-center gap-4">
                                    <HiMagnifyingGlass className="h-6 w-6 text-gray-500" />
                                    <input
                                        type="text"
                                        placeholder="Search products..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="flex-1 p-2 text-lg border-b-2 border-gray-300 focus:border-[#3B0075] outline-none"
                                        autoFocus
                                    />
                                    <button
                                        type="submit"
                                        className="p-2 text-gray-700 hover:text-[#3B0075] transition-colors"
                                    >
                                        <HiMagnifyingGlass className="h-6 w-6" />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setIsSearchOpen(false)}
                                        className="p-2 text-gray-700 hover:text-[#3B0075] transition-colors"
                                    >
                                        <HiXMark className="h-6 w-6" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}

                    <div className="flex items-center justify-between h-16 sm:h-20">
                        {/* Left - Logo */}
                        <div className="flex-shrink-0">
                            <Link to="/" className="flex items-center space-x-2">
                                <img src="/logo.jpg" alt="VividVendors Logo" className="h-8 w-8 sm:h-20 sm:w-20" />
                                <span className="text-lg sm:text-xl font-bold text-[#3B0075]">VividVendors</span>
                            </Link>
                        </div>

                        {/* Center - Nav Links */}
                        <div className="hidden md:flex items-center justify-center space-x-4 lg:space-x-8">
                            <Link to="/collection" className="text-gray-700 hover:text-[#3B0075] transition-colors text-sm lg:text-base">Men</Link>
                            <Link to="/women" className="text-gray-700 hover:text-[#3B0075] transition-colors text-sm lg:text-base">Women</Link>
                            <Link to="/plants" className="text-gray-700 hover:text-[#3B0075] transition-colors text-sm lg:text-base">Plants</Link>
                            <Link to="/accessories" className="text-gray-700 hover:text-[#3B0075] transition-colors text-sm lg:text-base">Plant Accessories</Link>
                        </div>

                        {/* Right - Icons */}
                        <div className="flex items-center space-x-2 sm:space-x-4">
                            <Link to="/login" className="p-2 text-gray-700 hover:text-[#3B0075] transition-colors">
                                <HiOutlineUser className="h-5 w-5 sm:h-6 sm:w-6" />
                            </Link>
                            <button
                                className="p-2 text-gray-700 hover:text-[#3B0075] transition-colors"
                                onClick={toggleCartDrawer}
                            >
                                <HiOutlineShoppingBag className="h-5 w-5 sm:h-6 sm:w-6" />
                            </button>
                            <button
                                className="p-2 text-gray-700 hover:text-[#3B0075] transition-colors"
                                onClick={handleSearchToggle}
                            >
                                <HiMagnifyingGlass className="h-5 w-5 sm:h-6 sm:w-6" />
                            </button>
                            <button
                                className="p-2 md:hidden text-gray-700 hover:text-[#3B0075] transition-colors"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                <HiBars3BottomRight className="h-5 w-5 sm:h-6 sm:w-6" />
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="fixed inset-0 z-50 bg-white md:hidden">
                            <div className="p-4">
                                <div className="flex justify-end">
                                    <button
                                        onClick={() => setIsMenuOpen(false)}
                                        className="p-2 text-gray-700 hover:text-[#3B0075]"
                                    >
                                        <HiXMark className="h-6 w-6" />
                                    </button>
                                </div>
                                <div className="flex flex-col space-y-4 mt-4">
                                    <Link to="/collection" className="text-gray-700 hover:text-[#3B0075] transition-colors py-2 text-lg" onClick={() => setIsMenuOpen(false)}>Men</Link>
                                    <Link to="/women" className="text-gray-700 hover:text-[#3B0075] transition-colors py-2 text-lg" onClick={() => setIsMenuOpen(false)}>Women</Link>
                                    <Link to="/plants" className="text-gray-700 hover:text-[#3B0075] transition-colors py-2 text-lg" onClick={() => setIsMenuOpen(false)}>Plants</Link>
                                    <Link to="/accessories" className="text-gray-700 hover:text-[#3B0075] transition-colors py-2 text-lg" onClick={() => setIsMenuOpen(false)}>Plant Accessories</Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* Cart Drawer */}
            <CardDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
        </>
    );
};

export default Navbar;
