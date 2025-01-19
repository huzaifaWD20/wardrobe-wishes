import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import CategorySlider from '../components/CategorySlider';
import ProductCard from '../components/ProductCard';
import productData from '../data/productData';

const HomePage = ({ addToWishlist, wishlistItems, cartItems }) => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Get 3 random products for featured section
    const allProducts = productData.categories.flatMap(category =>
      category.subcategories.flatMap(subcategory =>
        subcategory.products ? subcategory.products : (subcategory.subcategories || []).flatMap(sub => sub.products)
      )
    );
    const shuffled = allProducts.sort(() => 0.5 - Math.random());
    setFeaturedProducts(shuffled.slice(0, 3));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/products?search=${searchQuery}`);
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.header 
        style={{ opacity, scale }}
        className="relative h-screen flex items-center justify-center bg-gradient-to-r from-[#FF4D00] via-[#FF6B00] to-[#FF8800] overflow-hidden"
      >
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grid)" />
          </svg>
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
            </pattern>
          </defs>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Dress to Impress with WardrobeWishes
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Rent the perfect outfit for any occasion
          </motion.p>
          <motion.div 
            className="flex flex-col md:flex-row justify-center gap-4 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSearch} className="flex w-full">
              <input 
                type="text" 
                placeholder="What do you want to wear?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-6 py-3 rounded-l-lg text-lg focus:outline-none focus:ring-2 focus:ring-[#FF4D00] w-full"
              />
              <button 
                type="submit"
                className="px-8 py-3 bg-[#FF4D00] text-white rounded-r-lg text-lg font-semibold hover:bg-[#E64500] transition-colors duration-300"
              >
                Find Outfits
              </button>
            </form>
          </motion.div>
        </div>
      </motion.header>

      {/* Categories Section */}
      <section className="py-16 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Explore Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productData.categories.map((category, index) => (
              <Link key={category.categoryName} to={`/category/${category.categoryName.toLowerCase()}`}>
                <motion.div
                  className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold text-gray-800">{category.categoryName}</h3>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">Featured Rentals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  {...product} 
                  addToWishlist={addToWishlist}
                  isInWishlist={wishlistItems.some(item => item.id === product.id)}
                  isInCart={cartItems.some(item => item.id === product.id)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose WardrobeWishes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "👗",
                  title: "Quality Guaranteed",
                  description: "All our rental items are professionally maintained and cleaned"
                },
                {
                  icon: "🚚",
                  title: "Fast Delivery",
                  description: "Same day delivery available for urgent fashion needs"
                },
                {
                  icon: "💰",
                  title: "Best Prices",
                  description: "Competitive prices with flexible rental periods"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 rounded-xl bg-white shadow-md"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 bg-[#FF4D00]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Upgrade Your Wardrobe?</h2>
            <p className="text-xl mb-8">Join thousands of satisfied customers who trust WardrobeWishes for all their fashion rental needs</p>
            <Link to="/products" className="inline-block px-8 py-3 bg-white text-[#FF4D00] rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Get Started Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

