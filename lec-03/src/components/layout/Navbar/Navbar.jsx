import React, { useState } from 'react';
import bkLogo from '../../../assets/images/bk-logo.svg';
import {
  LocationPinIcon,
  StoreIcon,
  CrownIcon,
  UserIcon,
  CartIcon,
  SearchIcon,
  CloseIcon
} from '../../common/Icons';
import './Navbar.css';

export default function Navbar({
  activeMode = 'dine-in',
  onToggleMode,
  selectedStore = 'No stores nearby',
  cartCount = 0,
  onOpenLocation,
  onOpenLogin,
  onOpenCart,
  onOpenDeals
}) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bk-navbar-header">
      <div className="bk-navbar-container">
        {/* Left: Burger King Logo */}
        <div className="bk-navbar-brand">
          <a href="/" className="bk-logo-link" aria-label="Burger King Home">
            <img src={bkLogo} alt="Burger King" className="bk-logo-img" />
          </a>
        </div>

        {/* Center-Left: Service Mode Toggle (Delivery / Dine-In) */}
        <div className="bk-mode-toggle-wrapper">
          <div className="bk-mode-toggle">
            <button
              type="button"
              className={`bk-mode-btn ${activeMode === 'delivery' ? 'active' : ''}`}
              onClick={() => onToggleMode && onToggleMode('delivery')}
            >
              DELIVERY
            </button>
            <button
              type="button"
              className="bk-switch-pill"
              onClick={() =>
                onToggleMode && onToggleMode(activeMode === 'delivery' ? 'dine-in' : 'delivery')
              }
              aria-label="Toggle Service Mode"
            >
              <span className={`bk-switch-thumb ${activeMode === 'dine-in' ? 'right' : 'left'}`} />
            </button>
            <button
              type="button"
              className={`bk-mode-btn ${activeMode === 'dine-in' ? 'active' : ''}`}
              onClick={() => onToggleMode && onToggleMode('dine-in')}
            >
              DINE-IN/TAKEAWAY
            </button>
          </div>
        </div>

        {/* Center: Store Selector Pill */}
        <button
          type="button"
          className="bk-location-selector"
          onClick={onOpenLocation}
          title="Select Location / Store"
        >
          <span className="bk-location-pin">
            <LocationPinIcon size={16} color="#D62300" />
          </span>
          <span className="bk-location-text">{selectedStore}</span>
        </button>

        {/* Search Bar (Collapsible/Popup) */}
        {searchOpen && (
          <div className="bk-search-overlay">
            <div className="bk-search-input-wrap">
              <SearchIcon size={18} color="#D62300" />
              <input
                type="text"
                placeholder="Search Whopper, Burgers, Fries, Combos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <button
                type="button"
                className="bk-search-close"
                onClick={() => setSearchOpen(false)}
                aria-label="Close search"
              >
                <CloseIcon size={18} />
              </button>
            </div>
          </div>
        )}

        {/* Right Nav Actions */}
        <nav className="bk-nav-actions" aria-label="Main Navigation">
          <button
            type="button"
            className="bk-nav-item"
            onClick={onOpenLocation}
          >
            <StoreIcon size={18} color="#502314" />
            <span className="bk-nav-label">NEARBY STORES</span>
          </button>

          <button
            type="button"
            className="bk-nav-item"
            onClick={onOpenDeals}
          >
            <CrownIcon size={18} color="#502314" />
            <span className="bk-nav-label">KING DEALS</span>
          </button>

          <button
            type="button"
            className="bk-nav-item"
            onClick={onOpenLogin}
          >
            <UserIcon size={18} color="#502314" />
            <span className="bk-nav-label">LOGIN</span>
          </button>

          <button
            type="button"
            className="bk-nav-item bk-cart-item"
            onClick={onOpenCart}
          >
            <div className="bk-cart-icon-wrapper">
              <CartIcon size={18} color="#502314" />
              {cartCount > 0 && <span className="bk-cart-badge">{cartCount}</span>}
            </div>
            <span className="bk-nav-label">CART</span>
          </button>

          <button
            type="button"
            className="bk-search-toggle-btn"
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Search items"
          >
            <SearchIcon size={20} color="#502314" />
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="bk-hamburger-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span className="bk-bar" />
          <span className="bk-bar" />
          <span className="bk-bar" />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="bk-mobile-drawer">
          <div className="bk-mobile-actions">
            <button
              type="button"
              className="bk-mobile-nav-item"
              onClick={() => {
                onOpenLocation();
                setMobileMenuOpen(false);
              }}
            >
              <StoreIcon size={20} color="#D62300" />
              <span>NEARBY STORES</span>
            </button>
            <button
              type="button"
              className="bk-mobile-nav-item"
              onClick={() => {
                onOpenDeals();
                setMobileMenuOpen(false);
              }}
            >
              <CrownIcon size={20} color="#D62300" />
              <span>KING DEALS</span>
            </button>
            <button
              type="button"
              className="bk-mobile-nav-item"
              onClick={() => {
                onOpenLogin();
                setMobileMenuOpen(false);
              }}
            >
              <UserIcon size={20} color="#D62300" />
              <span>LOGIN / REGISTER</span>
            </button>
            <button
              type="button"
              className="bk-mobile-nav-item"
              onClick={() => {
                onOpenCart();
                setMobileMenuOpen(false);
              }}
            >
              <CartIcon size={20} color="#D62300" />
              <span>CART ({cartCount})</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
