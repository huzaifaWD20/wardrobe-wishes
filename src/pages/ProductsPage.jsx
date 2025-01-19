import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import productData from '../data/productData';

const ProductsPage = ({ addToCart, addToWishlist, wishlistItems, cartItems }) => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(9);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSubcategory, setSelectedSubcategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 10000]);

  useEffect(() => {
    const allProducts = productData.categories.flatMap(category =>
      category.subcategories.flatMap(subcategory =>
        subcategory.products ? subcategory.products : (subcategory.subcategories || []).flatMap(sub => sub.products)
      )
    );
    setProducts(allProducts);
  }, []);

  const categories = ['All', ...new Set(productData.categories.map(category => category.categoryName))];
  const subcategories = ['All', ...new Set(productData.categories.flatMap(category =>
    category.subcategories.map(subcategory => subcategory.subCategoryName)
  ))];

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
    const subcategoryMatch = selectedSubcategory === 'All' || product.subcategory === selectedSubcategory;
    const priceMatch = product.price_per_day >= priceRange[0] && product.price_per_day <= priceRange[1];
    return categoryMatch && subcategoryMatch && priceMatch;
  });

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Products
        </motion.h1>
        <div className="mb-8 flex flex-wrap justify-center space-x-4">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="p-2 border rounded-md"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <select
            value={selectedSubcategory}
            onChange={(e) => setSelectedSubcategory(e.target.value)}
            className="p-2 border rounded-md"
          >
            {subcategories.map(subcategory => (
              <option key={subcategory} value={subcategory}>{subcategory}</option>
            ))}
          </select>
          <div className="flex items-center space-x-2">
            <input
              type="range"
              min="0"
              max="10000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
              className="w-48"
            />
            <span>Rs {priceRange[0]} - Rs {priceRange[1]}</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProductCard 
                key={product.id}
                {...product} 
                addToCart={addToCart} 
                addToWishlist={addToWishlist}
                isInWishlist={wishlistItems.some(item => item.id === product.id)}
                isInCart={cartItems.some(item => item.id === product.id)}
              />
            </motion.div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          {Array.from({ length: Math.ceil(filteredProducts.length / productsPerPage) }, (_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`mx-1 px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-[#FF4D00] text-white' : 'bg-gray-200'}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;

