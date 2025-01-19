import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import productData from '../data/productData';

const SingleProductPage = ({ addToCart, addToWishlist, isAuthenticated, wishlistItems, cartItems }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [rentalDuration, setRentalDuration] = useState('daily');
  const [rentalPeriod, setRentalPeriod] = useState(1);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [activeTab, setActiveTab] = useState('description');
  const [reviewRating, setReviewRating] = useState('5');
  const [reviewTitle, setReviewTitle] = useState('');
  const [reviewContent, setReviewContent] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  useEffect(() => {
    const foundProduct = productData.categories.flatMap(category =>
      category.subcategories.flatMap(subcategory =>
        subcategory.products ? subcategory.products : (subcategory.subcategories || []).flatMap(sub => sub.products)
      )
    ).find(p => p.id === id);
    setProduct(foundProduct);
    if (foundProduct && foundProduct.sizes_available.length > 0) {
      setSelectedSize(foundProduct.sizes_available[0]);
    }
  }, [id]);

  useEffect(() => {
    if (startDate) {
      const start = new Date(startDate);
      let end = new Date(start);
      
      if (rentalDuration === 'daily') {
        end.setDate(end.getDate() + parseInt(rentalPeriod) - 1);
      } else if (rentalDuration === 'weekly') {
        end.setDate(end.getDate() + (parseInt(rentalPeriod) * 7) - 1);
      } else if (rentalDuration === 'monthly') {
        end.setMonth(end.getMonth() + parseInt(rentalPeriod));
        end.setDate(end.getDate() - 1);
      }
      
      setEndDate(end.toISOString().split('T')[0]);
    }
  }, [startDate, rentalPeriod, rentalDuration]);

  useEffect(() => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const diffTime = Math.abs(end - start);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;

      if (rentalDuration === 'daily') {
        setRentalPeriod(diffDays);
      } else if (rentalDuration === 'weekly') {
        setRentalPeriod(Math.ceil(diffDays / 7));
      } else if (rentalDuration === 'monthly') {
        const diffMonths = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()) + 1;
        setRentalPeriod(diffMonths);
      }
    }
  }, [endDate, startDate, rentalDuration]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const calculateTotalPrice = () => {
    let basePrice = product.price_per_day;
    if (rentalDuration === 'weekly') {
      basePrice *= 7;
    } else if (rentalDuration === 'monthly') {
      basePrice *= 30;
    }
    return (basePrice * rentalPeriod).toFixed(2);
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    console.log('Review submitted:', { rating: reviewRating, title: reviewTitle, content: reviewContent });
    setReviewRating('5');
    setReviewTitle('');
    setReviewContent('');
  };

  const handleAddToCart = () => {
    addToCart({
      ...product,
      rentalDuration,
      rentalPeriod,
      startDate,
      endDate,
      size: selectedSize,
      totalPrice: calculateTotalPrice()
    });
  };

  const isInWishlist = wishlistItems.some(item => item.id === product.id);
  const isInCart = cartItems.some(item => item.id === product.id);

  return (
    <div className="bg-gray-50 min-h-screen py-12 mt-5">
      <div className="container mx-auto px-4">
        <motion.div 
          className="bg-white rounded-lg shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="md:flex">
            <div className="md:flex-shrink-0 md:w-1/2">
              <img className="h-full w-full object-cover" src={product.image || "/placeholder.svg"} alt={product.name} />
            </div>
            <div className="p-8 md:w-1/2">
              <div className="uppercase tracking-wide text-sm text-[#FF4D00] font-semibold">{product.brand}</div>
              <h1 className="mt-2 text-3xl leading-8 font-semibold text-gray-900">{product.name}</h1>
              <p className="mt-1 text-sm text-gray-500">{product.category} / {product.subcategory}</p>
              {/* <div className="mt-2 flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-gray-600">{product.rating} ({product.reviews} reviews)</span>
              </div> */}

              <div className="mt-4">
                <span className="text-3xl font-bold text-gray-900">Rs {product.price_per_day}</span>
                <span className="text-gray-600">/day</span>
              </div>

              <div className="mt-6">
                <h2 className="text-sm font-medium text-gray-900">Size</h2>
                <div className="mt-2 flex flex-wrap gap-2">
                  {product.sizes_available.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-2 text-sm font-medium rounded-md ${
                        selectedSize === size
                          ? 'bg-[#FF4D00] text-white'
                          : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h2 className="text-sm font-medium text-gray-900">Rental Duration</h2>
                <div className="mt-2 flex flex-wrap gap-2">
                  {['daily', 'weekly', 'monthly'].map((duration) => (
                    <button
                      key={duration}
                      onClick={() => setRentalDuration(duration)}
                      className={`px-3 py-2 text-sm font-medium rounded-md ${
                        rentalDuration === duration
                          ? 'bg-[#FF4D00] text-white'
                          : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                      }`}
                    >
                      {duration.charAt(0).toUpperCase() + duration.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h2 className="text-sm font-medium text-gray-900">Rental Period</h2>
                <div className="mt-2 flex flex-wrap gap-4">
                  <div>
                    <label htmlFor="rental-period" className="block text-sm font-medium text-gray-700">
                      {rentalDuration === 'daily' ? 'Days' : rentalDuration === 'weekly' ? 'Weeks' : 'Months'}
                    </label>
                    <input
                      type="number"
                      id="rental-period"
                      min="1"
                      value={rentalPeriod}
                      onChange={(e) => {
                        e.preventDefault();
                        setRentalPeriod(parseInt(e.target.value) || 1);
                      }}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF4D00] focus:ring-[#FF4D00]"
                    />
                  </div>
                  <div>
                    <label htmlFor="start-date" className="block text-sm font-medium text-gray-700">Start Date</label>
                    <input
                      type="date"
                      id="start-date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF4D00] focus:ring-[#FF4D00]"
                    />
                  </div>
                  <div>
                    <label htmlFor="end-date" className="block text-sm font-medium text-gray-700">End Date</label>
                    <input
                      type="date"
                      id="end-date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF4D00] focus:ring-[#FF4D00]"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-lg font-semibold text-gray-900">Total: Rs {calculateTotalPrice()}</h2>
              </div>

              <div className="mt-8 flex space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleAddToCart}
                  className={`flex-1 px-6 py-3 rounded-md transition-colors duration-300 ${
                    isInCart
                      ? 'bg-gray-400 text-white cursor-not-allowed'
                      : 'bg-[#FF4D00] text-white hover:bg-[#E64500]'
                  }`}
                  disabled={isInCart}
                >
                  {isInCart ? 'Already in Cart' : 'Add to Cart'}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => addToWishlist(product)}
                  className={`flex-1 px-6 py-3 rounded-md transition-colors duration-300 ${
                    isInWishlist
                      ? 'bg-gray-200 text-gray-800'
                      : 'border border-[#FF4D00] text-[#FF4D00]'
                  }`}
                >
                  {isInWishlist ? 'In Wishlist' : 'Add to Wishlist'}
                </motion.button>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                {/* {['description', 'features', 'reviews'].map((tab) => ( */}
                {['description'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`${
                      activeTab === tab
                        ? 'border-[#FF4D00] text-[#FF4D00]'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </nav>
            </div>

            <div className="mt-8">
              {activeTab === 'description' && (
                <p className="text-gray-600">{product.description}</p>
              )}
              {/* {activeTab === 'features' && (
                <ul className="list-disc pl-5 text-gray-600">
                  {product.features && product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              )}
              {activeTab === 'reviews' && (
                <div className="space-y-8">
                  {[...Array(3)].map((_, index) => (
                    <div key={index} className="border-b pb-4">
                      <div className="flex items-center mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className={`h-5 w-5 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="ml-2 text-gray-600">4.0</span>
                      </div>
                      <h3 className="font-semibold text-gray-800">Great product!</h3>
                      <p className="text-gray-600 mt-2">This item exceeded my expectations. The quality is superb and it's very comfortable to wear.</p>
                    </div>
                  ))}

                  {isAuthenticated ? (
                    <form onSubmit={handleSubmitReview} className="mt-8">
                      <h3 className="text-lg font-semibold mb-4">Write a Review</h3>
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Rating</label>
                          <select
                            id="rating"
                            value={reviewRating}
                            onChange={(e) => setReviewRating(e.target.value)}
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-[#FF4D00] focus:border-[#FF4D00] sm:text-sm rounded-md"
                          >
                            {[1, 2, 3, 4, 5].map((value) => (
                              <option key={value} value={value}>
                                {value} Star{value !== 1 ? 's' : ''}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label htmlFor="review-title" className="block text-sm font-medium text-gray-700">Title</label>
                          <input
                            type="text"
                            id="review-title"
                            value={reviewTitle}
                            onChange={(e) => setReviewTitle(e.target.value)}
                            className="mt-1 focus:ring-[#FF4D00] focus:border-[#FF4D00] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            placeholder="Summarize your review"
                          />
                        </div>
                        <div>
                          <label htmlFor="review-content" className="block text-sm font-medium text-gray-700">Review</label>
                          <textarea
                            id="review-content"
                            rows={3}
                            value={reviewContent}
                            onChange={(e) => setReviewContent(e.target.value)}
                            className="mt-1 focus:ring-[#FF4D00] focus:border-[#FF4D00] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            placeholder="Write your review here"
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#FF4D00] hover:bg-[#E64500] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF4D00]"
                        >
                          Submit Review
                        </button>
                      </div>
                    </form>
                  ) : (
                    <p className="mt-4 text-gray-600">Please <Link to="/auth" className="text-[#FF4D00] hover:underline">log in</Link> to write a review.</p>
                  )}
                </div>
              )} */}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SingleProductPage;

