import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = ({ cartItemsCount, wishlistItemsCount, isAuthenticated, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/products?search=${searchQuery}`);
    setSearchQuery('');
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white shadow-md fixed w-full z-50"
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-2xl font-bold text-[#FF4D00]">
          WardrobeWishes
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/categories">Categories</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/cart">
            Cart
            {cartItemsCount > 0 && (
              <span className="ml-1 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">
                {cartItemsCount}
              </span>
            )}
          </NavLink>
          <NavLink to="/wishlist">
            Wishlist
            {wishlistItemsCount > 0 && (
              <span className="ml-1 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">
                {wishlistItemsCount}
              </span>
            )}
          </NavLink>
        </div>

        {/* Search Bar */}
        {/* <form onSubmit={handleSearch} className="hidden md:flex items-center">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#FF4D00]"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-[#FF4D00] text-white rounded-r-md hover:bg-[#E64500] transition-colors duration-300"
          >
            Search
          </button>
        </form> */}

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* User Menu */}
        <div className="hidden md:flex items-center space-x-4">
          {isAuthenticated ? (
            <button
              onClick={onLogout}
              className="px-4 py-2 bg-[#FF4D00] text-white rounded-md hover:bg-[#E64500] transition-colors duration-300"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/auth"
              className="px-4 py-2 bg-[#FF4D00] text-white rounded-md hover:bg-[#E64500] transition-colors duration-300"
            >
              Login / Sign Up
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        className="md:hidden bg-white"
      >
        <div className="px-4 pt-2 pb-4 space-y-3">
          <MobileNavLink to="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
          <MobileNavLink to="/categories" onClick={() => setIsOpen(false)}>Categories</MobileNavLink>
          <MobileNavLink to="/products" onClick={() => setIsOpen(false)}>Products</MobileNavLink>
          <MobileNavLink to="/cart" onClick={() => setIsOpen(false)}>
            Cart
            {cartItemsCount > 0 && (
              <span className="ml-1 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">
                {cartItemsCount}
              </span>
            )}
          </MobileNavLink>
          <MobileNavLink to="/wishlist" onClick={() => setIsOpen(false)}>
            Wishlist
            {wishlistItemsCount > 0 && (
              <span className="ml-1 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">
                {wishlistItemsCount}
              </span>
            )}
          </MobileNavLink>
          {isAuthenticated ? (
            <button
              onClick={() => {
                onLogout();
                setIsOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-[#FF4D00] hover:bg-gray-100 transition-colors duration-300"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/auth"
              onClick={() => setIsOpen(false)}
              className="block w-full text-left px-4 py-2 text-[#FF4D00] hover:bg-gray-100 transition-colors duration-300"
            >
              Login / Sign Up
            </Link>
          )}
          <form onSubmit={handleSearch} className="flex items-center mt-4">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#FF4D00] w-full"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[#FF4D00] text-white rounded-r-md hover:bg-[#E64500] transition-colors duration-300"
            >
              Search
            </button>
          </form>
        </div>
      </motion.div>
    </motion.nav>
  );
};

const NavLink = ({ to, children }) => (
  <Link 
    to={to} 
    className="relative text-gray-700 hover:text-[#FF4D00] transition-colors duration-300 group"
  >
    {children}
    <motion.div
      className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF4D00] origin-left"
      initial={{ scaleX: 0 }}
      whileHover={{ scaleX: 1 }}
      transition={{ duration: 0.3 }}
    />
  </Link>
);

const MobileNavLink = ({ to, children, onClick }) => (
  <Link 
    to={to} 
    onClick={onClick}
    className="block text-gray-700 hover:text-[#FF4D00] transition-colors duration-300 py-2"
  >
    {children}
  </Link>
);

export default Navbar;

