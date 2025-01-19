import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import productData from '../data/productData-original';

const CategorySlider = () => {
  const categories = productData.categories;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={category.categoryName}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link to={`/category/${category.categoryName.toLowerCase()}`} className="w-full">
              <motion.div
                className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center h-40 transition-all duration-300 hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-16 h-16 bg-[#FF4D00] rounded-full flex items-center justify-center mb-4">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-white">
                    <path d={getCategoryIcon(category.categoryName)} />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 text-center">{category.categoryName}</h3>
              </motion.div>
            </Link>
            <ul className="mt-2 text-sm text-gray-600 text-center">
              {category.subcategories.slice(0, 3).map((subcategory) => (
                <li key={subcategory.subCategoryName} className="truncate">
                  <Link to={`/category/${category.categoryName.toLowerCase()}/${subcategory.subCategoryName.toLowerCase()}`} className="hover:text-[#FF4D00]">
                    {subcategory.subCategoryName}
                  </Link>
                </li>
              ))}
              {category.subcategories.length > 3 && (
                <li className="text-[#FF4D00] font-medium">
                  <Link to={`/category/${category.categoryName.toLowerCase()}`}>
                    +{category.subcategories.length - 3} more
                  </Link>
                </li>
              )}
            </ul>
          </motion.div>
        ))}
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

export default CategorySlider;

