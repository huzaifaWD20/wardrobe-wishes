import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const WishlistPage = ({ wishlistItems, removeFromWishlist, addToCart }) => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.h1 
          className="text-3xl font-bold text-gray-900 mb-8 mt-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Your Wishlist
        </motion.h1>
        {wishlistItems.length === 0 ? (
          <p className="text-gray-500 text-center">Your wishlist is empty.</p>
        ) : (
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <ul className="divide-y divide-gray-200">
              {wishlistItems.map((item) => (
                <motion.li 
                  key={item.id} 
                  className="px-4 py-4 sm:px-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img className="h-10 w-10 rounded-full" src={item.image || `https://source.unsplash.com/random/100x100?${item.name}`} alt="" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{item.name}</div>
                        <div className="text-sm text-gray-500">${item.price_per_day} per day</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Link
                        to={`/product/${item.id}`}
                        className="bg-[#FF4D00] text-white px-4 py-2 rounded-md mr-2 text-sm hover:bg-[#E64500] transition-colors duration-300"
                      >
                        View Details
                      </Link>
                      <button 
                        className="text-red-600 hover:text-red-800 text-sm"
                        onClick={() => removeFromWishlist(item)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;

