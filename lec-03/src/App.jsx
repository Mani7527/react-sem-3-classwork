import React, { useState } from 'react';
import Navbar from './components/layout/Navbar/Navbar';
import HeroCarousel from './components/hero/HeroCarousel';
import MenuCategories from './components/menu/MenuCategories';
import BkWallBanner from './components/promo/BkWallBanner';
import Footer from './components/layout/Footer/Footer';

import LocationModal from './components/modals/LocationModal';
import LoginModal from './components/modals/LoginModal';
import CartDrawer from './components/modals/CartDrawer';
import DealsModal from './components/modals/DealsModal';
import MenuModal from './components/modals/MenuModal';

import './App.css';

export default function App() {
  // Service mode: 'dine-in' or 'delivery'
  const [serviceMode, setServiceMode] = useState('dine-in');

  // Selected store / delivery address (defaults to "No stores nearby" to match screenshot)
  const [selectedStore, setSelectedStore] = useState('No stores nearby');

  // Cart state
  const [cartItems, setCartItems] = useState([
    { id: 'p1', name: 'Veg Whopper®', price: 179, quantity: 1 }
  ]);

  // Modals state
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isDealsOpen, setIsDealsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Toast notification
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };

  const handleToggleMode = (mode) => {
    setServiceMode(mode);
    showToast(`Switched mode to ${mode === 'delivery' ? 'Delivery' : 'Dine-In / Takeaway'}`);
  };

  const handleSelectStore = (storeName) => {
    setSelectedStore(storeName);
    setIsLocationOpen(false);
    showToast(`Selected outlet: ${storeName}`);
  };

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    showToast(`Added ${product.name} to cart!`);
  };

  const handleUpdateQuantity = (productId, newQty) => {
    if (newQty <= 0) {
      setCartItems((prev) => prev.filter((item) => item.id !== productId));
    } else {
      setCartItems((prev) =>
        prev.map((item) => (item.id === productId ? { ...item, quantity: newQty } : item))
      );
    }
  };

  const handleApplyDeal = (deal) => {
    showToast(`Applied coupon "${deal.code}" successfully!`);
    setIsDealsOpen(false);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setIsMenuOpen(true);
  };

  const handleOrderNow = (slide) => {
    setIsMenuOpen(true);
  };

  const handleExploreFullMenu = () => {
    setSelectedCategory(null);
    setIsMenuOpen(true);
  };

  const totalCartCount = cartItems.reduce((acc, i) => acc + i.quantity, 0);

  return (
    <div className="bk-app">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="bk-toast-notification" role="status">
          <span>🔥</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1. Header Navigation */}
      <Navbar
        activeMode={serviceMode}
        onToggleMode={handleToggleMode}
        selectedStore={selectedStore}
        cartCount={totalCartCount}
        onOpenLocation={() => setIsLocationOpen(true)}
        onOpenLogin={() => setIsLoginOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenDeals={() => setIsDealsOpen(true)}
      />

      {/* 2. Main Page Content */}
      <main className="bk-main-content">
        {/* Promotional Hero Banner Carousel */}
        <HeroCarousel onOrderNow={handleOrderNow} />

        {/* Our Menu Categories Section */}
        <MenuCategories
          onSelectCategory={handleSelectCategory}
          onExploreFullMenu={handleExploreFullMenu}
        />

        {/* Feature Promo Banner: Explore The BK Wall */}
        <BkWallBanner onExploreWall={handleExploreFullMenu} />
      </main>

      {/* 3. Global Footer */}
      <Footer />

      {/* Interactive Modals */}
      <LocationModal
        isOpen={isLocationOpen}
        onClose={() => setIsLocationOpen(false)}
        onSelectStore={handleSelectStore}
      />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLoginSuccess={(phone) => showToast(`Welcome back, +91 ${phone}!`)}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onCheckout={() => {
          showToast('Proceeding to Burger King Secure Checkout...');
          setIsCartOpen(false);
        }}
      />

      <DealsModal
        isOpen={isDealsOpen}
        onClose={() => setIsDealsOpen(false)}
        onApplyDeal={handleApplyDeal}
      />

      <MenuModal
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        selectedCategory={selectedCategory}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}
