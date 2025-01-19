import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, name, brand, price_per_day, image, rating, reviews, category, subcategory, addToWishlist, isInWishlist, isInCart }) => {
  const handleToggleWishlist = (e) => {
    e.preventDefault();
    addToWishlist({ id, name, brand, price_per_day, image, rating, reviews });
  };

  return (
    <motion.div 
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <Link to={`/product/${id}`}>
        <div className="relative">
          <img 
            src={image || "https://source.unsplash.com/random/400x300?clothing"} 
            alt={name} 
            className="w-full h-96 object-cover"
          />
          <motion.button 
            whileTap={{ scale: 0.9 }}
            className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
            onClick={handleToggleWishlist}
          >
            <svg className={`w-5 h-5 ${isInWishlist ? 'text-red-500' : 'text-gray-400'}`} fill={isInWishlist ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </motion.button>
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-lg text-gray-800">{name}</h3>
            <p className="text-sm text-gray-500">{category} / {subcategory}</p>
            {/* <div className="flex items-center">
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
              <span className="ml-1 text-sm text-gray-600">{rating || "4.5"}</span>
            </div> */}
          </div>
          
          <div className="flex justify-between items-center">
            <div>
              <span className="text-2xl font-bold text-[#FF4D00]">Rs {price_per_day}</span>
              <span className="text-gray-500 text-sm">/day</span>
            </div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 ${isInCart ? 'bg-gray-400' : 'bg-[#FF4D00]'} text-white rounded-lg hover:bg-[#E64500] transition-colors duration-300`}
            >
              {isInCart ? 'Already in Cart' : 'Rent Now'}
            </motion.button>
          </div>
          
          <div className="mt-3 text-sm text-gray-500">
            {brand}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;

