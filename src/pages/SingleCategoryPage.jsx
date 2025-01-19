import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import productData from '../data/productData';

const SingleCategoryPage = ({ addToCart, addToWishlist, wishlistItems, cartItems }) => {
  const { category, subcategory } = useParams();
  const categoryData = productData.categories.find(cat => cat.categoryName.toLowerCase() === category.toLowerCase());

  if (!categoryData) {
    return <div>Category not found</div>;
  }

  let products = [];
  let title = '';
  let subcategories = [];

  if (subcategory) {
    const subcategoryData = categoryData.subcategories.find(sub => sub.subCategoryName.toLowerCase() === subcategory.toLowerCase());
    if (subcategoryData) {
      products = subcategoryData.products || [];
      title = `${subcategoryData.subCategoryName} - ${categoryData.categoryName}`;
    }
  } else {
    subcategories = categoryData.subcategories;
    products = categoryData.subcategories.flatMap(sub => sub.products || []);
    title = categoryData.categoryName;
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold text-center mb-12 mt-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h1>
        
        {!subcategory && subcategories.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Subcategories</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {subcategories.map((sub) => (
                <Link 
                  key={sub.subCategoryName} 
                  to={`/category/${category.toLowerCase()}/${sub.subCategoryName.toLowerCase()}`}
                  className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-lg font-medium text-gray-800">{sub.subCategoryName}</h3>
                </Link>
              ))}
            </div>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProductCard 
                key={product.id}
                {...product} 
                category={category}
                subcategory={subcategory || product.subcategory}
                addToCart={addToCart} 
                addToWishlist={addToWishlist}
                isInWishlist={wishlistItems.some(item => item.id === product.id)}
                isInCart={cartItems.some(item => item.id === product.id)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleCategoryPage;

