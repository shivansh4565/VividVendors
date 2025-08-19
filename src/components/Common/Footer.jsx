import React from 'react'
import { Link } from 'react-router-dom'
import { TbBrandMeta } from 'react-icons/tb'
import { IoLogoInstagram } from 'react-icons/io5'
import { RiTwitterXLine } from 'react-icons/ri'
import { FiLock, FiRefreshCw } from 'react-icons/fi'
import { HiOutlineShoppingBag } from 'react-icons/hi2'
import { FiPhone } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="bg-white border-t w-full">
      {/* Top features row */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <HiOutlineShoppingBag className="mx-auto mb-2 h-6 w-6" />
          <div className="font-semibold">FREE INTERNATIONAL SHIPPING</div>
          <div className="text-sm text-gray-500">On all orders over ₹499.00</div>
        </div>
        <div>
          <FiRefreshCw className="mx-auto mb-2 h-6 w-6" />
          <div className="font-semibold">45 DAYS RETURN</div>
          <div className="text-sm text-gray-500">Money back guarantee</div>
        </div>
        <div>
          <FiLock className="mx-auto mb-2 h-6 w-6" />
          <div className="font-semibold">SECURE CHECKOUT</div>
          <div className="text-sm text-gray-500">100% secured checkout process</div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Newsletter */}
          <div>
            <div className="font-semibold mb-2">Newsletter</div>
            <div className="text-sm text-gray-600 mb-2">
              Be the first to hear about new products, exclusive events, and online offers.
            </div>
            <div className="text-sm text-gray-800 mb-2 font-medium">
              Sign up and get 10% off your first order.
            </div>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="border rounded px-3 py-2 flex-1 focus:outline-none focus:border-[#3B0075]"
              />
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded font-semibold hover:bg-[#3B0075] transition"
              >
                Subscribe
              </button>
            </form>
          </div>
          {/* Shop */}
          <div>
            <div className="font-semibold mb-2">Shop</div>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>
                <Link to="/mens-top-wear">Men's Top Wear</Link>
              </li>
              <li>
                <Link to="/womens-top-wear">Women's Top Wear</Link>
              </li>
              <li>
                <Link to="/mens-bottom-wear">Men's Bottom Wear</Link>
              </li>
              <li>
                <Link to="/womens-bottom-wear">Women's Bottom Wear</Link>
              </li>
              <li>
                <Link to="/plants">Plants</Link>
              </li>
              <li>
                <Link to="/plant-accessories">Plant Accessories</Link>
              </li>
            </ul>
          </div>
          {/* Support */}
          <div>
            <div className="font-semibold mb-2">Support</div>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>Contact Us</li>
              <li>About Us</li>
              <li>FAQs</li>
              <li>Features</li>
            </ul>
          </div>
          {/* Follow Us */}
          <div>
            <div className="font-semibold mb-2">Follow Us</div>
            <div className="flex space-x-3 mb-3">
              <a href="#" className="text-gray-700 hover:text-[#3B0075]"><TbBrandMeta size={22} /></a>
              <a href="#" className="text-gray-700 hover:text-[#3B0075]"><IoLogoInstagram size={22} /></a>
              <a href="#" className="text-gray-700 hover:text-[#3B0075]"><RiTwitterXLine size={22} /></a>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-700 mb-1">
              <FiPhone className="h-4 w-4" />
              <span className="font-bold">0123-456-789</span>
            </div>
            <div className="text-xs text-gray-500">Call Us</div>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t text-center text-xs text-gray-500 py-4 bg-white">
        © 2024, VividVendors. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer
