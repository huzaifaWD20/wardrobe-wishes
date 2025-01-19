import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CartPage = ({ cartItems, removeFromCart }) => {
  const calculateItemTotal = (item) => {
    let price = item.price_per_day;
    if (item.rentalDuration === 'weekly') {
      price *= 7;
    } else if (item.rentalDuration === 'monthly') {
      price *= 30;
    }
    return price * (item.rentalPeriod || 1);
  };

  const total = cartItems.reduce((sum, item) => sum + calculateItemTotal(item), 0);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.h1 
          className="text-3xl font-bold text-gray-900 mb-8 mt-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Your Cart
        </motion.h1>
        {cartItems.length === 0 ? (
          <div className="text-center">
            <p className="text-gray-500 mb-4">Your cart is empty.</p>
            <Link 
              to="/products" 
              className="inline-block bg-[#FF4D00] text-white px-6 py-3 rounded-md hover:bg-[#E64500] transition-colors duration-300"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <ul className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <motion.li 
                  key={item.id} 
                  className="px-4 py-4 sm:px-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img className="h-16 w-16 object-cover rounded-md" src={item.image || `https://source.unsplash.com/random/100x100?${item.name}`} alt="" />
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                        <p className="text-sm text-gray-500">Rs {item.price_per_day} per day</p>
                        <p className="text-sm text-gray-500">
                          Rental: {item.rentalDuration} ({item.rentalPeriod} {item.rentalDuration === 'daily' ? 'day(s)' : item.rentalDuration === 'weekly' ? 'week(s)' : 'month(s)'})
                        </p>
                        <p className="text-sm text-gray-500">
                          Period: {item.startDate} to {item.endDate}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <p className="text-lg font-medium text-gray-900 mr-4">
                        Rs {calculateItemTotal(item).toFixed(2)}
                      </p>
                      <button 
                        className="text-red-600 hover:text-red-800"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
            <div className="px-4 py-4 sm:px-6 bg-gray-50">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Total</p>
                <p>Rs {total.toFixed(2)}</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
              <div className="mt-6">
                <Link
                  to="/checkout"
                  className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#FF4D00] hover:bg-[#E64500]"
                >
                  Checkout
                </Link>
              </div>
              <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                <p>
                  or{' '}
                  <Link to="/products" className="text-[#FF4D00] font-medium hover:text-[#E64500]">
                    Continue Shopping
                    <span aria-hidden="true"> &rarr;</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;

