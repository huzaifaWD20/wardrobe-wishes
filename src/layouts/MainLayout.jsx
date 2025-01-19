import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = ({ children, cartItems, wishlistItems, isAuthenticated, onLogout }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar 
                cartItemsCount={cartItems.length} 
                wishlistItemsCount={wishlistItems.length}
                isAuthenticated={isAuthenticated}
                onLogout={onLogout}
            />
            <main className="flex-grow container mx-auto px-4 py-6">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;

