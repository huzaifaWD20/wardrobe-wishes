import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import productData from '../data/productData';

const CategoriesPage = () => {
  const categories = productData.categories;

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Explore Categories
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.categoryName}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#FF4D00] rounded-full flex items-center justify-center mr-4">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-white">
                      <path d={getCategoryIcon(category.categoryName)} />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-800">{category.categoryName}</h2>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {category.subcategories.map((subcategory) => (
                    <Link 
                      key={subcategory.subCategoryName} 
                      to={`/category/${category.categoryName.toLowerCase()}/${subcategory.subCategoryName.toLowerCase()}`}
                      className="bg-gray-100 rounded-lg p-4 hover:bg-gray-200 transition-colors duration-300"
                    >
                      <h3 className="font-semibold text-gray-700">{subcategory.subCategoryName}</h3>
                      <p className="text-sm text-gray-500 mt-2">
                        {subcategory.products ? subcategory.products.length : 
                          (subcategory.subcategories ? subcategory.subcategories.reduce((acc, sub) => acc + sub.products.length, 0) : 0)} products
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const getCategoryIcon = (categoryName) => {
  switch (categoryName) {
    case 'Men':
      return 'M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z';
    case 'Women':
      return 'M12 4a6 6 0 0 1 6 6c0 2.97-2.16 5.44-5 5.92V22h-2v-6.09c-2.84-.48-5-2.94-5-5.91 0-3.31 2.69-6 6-6z';
    default:
      return 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z';
  }
};

export default CategoriesPage;

