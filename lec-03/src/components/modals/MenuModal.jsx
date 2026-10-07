import React, { useState } from 'react';
import { CloseIcon, SearchIcon } from '../common/Icons';
import { CATEGORIES_DATA } from '../../data/categoriesData';
import whopperImg from '../../assets/images/whopper.jpg';
import beveragesImg from '../../assets/images/beverages.jpg';
import valueMealImg from '../../assets/images/value-meal.jpg';
import './Modals.css';

const MENU_PRODUCTS = [
  { id: 'p1', name: 'Veg Whopper®', category: 'whopper', price: 179, desc: 'Signature flame-grilled patty with fresh veggies and mayonnaise.', image: whopperImg, veg: true },
  { id: 'p2', name: 'Chicken Whopper®', category: 'whopper', price: 219, desc: 'Our signature flame-grilled chicken patty topped with fresh lettuce and creamy mayo.', image: whopperImg, veg: false },
  { id: 'p3', name: 'Peri-Peri Veg Whopper', category: 'peri-peri-fest', price: 199, desc: 'Loaded with peri-peri seasoned spice, crispy veggies and spicy peri-peri drizzle.', image: whopperImg, veg: true },
  { id: 'p4', name: 'Peri-Peri Chicken Whopper', category: 'peri-peri-fest', price: 239, desc: 'Smoky grilled chicken patty drenched in fiery African Bird’s Eye chilli peri-peri sauce.', image: whopperImg, veg: false },
  { id: 'p5', name: 'Crispy Veg Value Meal', category: 'value-meals', price: 149, desc: 'Crispy Veg Burger + King Fries + Chilled Coca-Cola.', image: valueMealImg, veg: true },
  { id: 'p6', name: 'Chicken Royale Value Meal', category: 'value-meals', price: 199, desc: 'Crispy Chicken Royale Burger + King Fries + Chilled Coca-Cola.', image: valueMealImg, veg: false },
  { id: 'p7', name: 'Chocolate Thick Shake', category: 'beverages', price: 165, desc: 'Rich and creamy chocolate milkshake with whipped cream.', image: beveragesImg, veg: true },
  { id: 'p8', name: 'Chilled Coca-Cola', category: 'beverages', price: 79, desc: 'Classic ice-cold refreshing soft drink.', image: beveragesImg, veg: true },
  { id: 'p9', name: 'Take-Off Saver Combo', category: 'take-off-combos', price: 299, desc: '2 Burgers + King Fries + 2 Drinks Combo.', image: valueMealImg, veg: true }
];

export default function MenuModal({ isOpen, onClose, selectedCategory, onAddToCart }) {
  const [activeTab, setActiveTab] = useState(selectedCategory?.id || 'all');
  const [search, setSearch] = useState('');

  if (!isOpen) return null;

  const filteredProducts = MENU_PRODUCTS.filter((prod) => {
    const matchesCategory = activeTab === 'all' || prod.category === activeTab;
    const matchesSearch = prod.name.toLowerCase().includes(search.toLowerCase()) ||
                          prod.desc.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bk-modal-backdrop" onClick={onClose}>
      <div
        className="bk-modal-container bk-menu-modal-container"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="bk-modal-header">
          <div className="bk-modal-title-wrap">
            <h3 className="bk-modal-title">EXPLORE FULL MENU</h3>
          </div>
          <button
            type="button"
            className="bk-modal-close"
            onClick={onClose}
            aria-label="Close menu"
          >
            <CloseIcon size={20} />
          </button>
        </div>

        {/* Search & Categories Bar */}
        <div className="bk-menu-modal-search-wrap">
          <div className="bk-modal-search" style={{ marginBottom: 12 }}>
            <SearchIcon size={18} color="#8C827A" />
            <input
              type="text"
              placeholder="Search burgers, beverages, combos..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Category Tabs */}
          <div className="bk-menu-modal-tabs">
            <button
              type="button"
              className={`bk-menu-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Items
            </button>
            {CATEGORIES_DATA.slice(0, 6).map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`bk-menu-tab-btn ${activeTab === cat.id ? 'active' : ''}`}
                onClick={() => setActiveTab(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="bk-modal-body bk-menu-products-body">
          <div className="bk-products-grid">
            {filteredProducts.map((prod) => (
              <div key={prod.id} className="bk-product-card">
                <div className="bk-product-image-box">
                  <img src={prod.image} alt={prod.name} />
                  <span className={`bk-veg-indicator ${prod.veg ? 'veg' : 'nonveg'}`} />
                </div>
                <div className="bk-product-details">
                  <h4 className="bk-product-name">{prod.name}</h4>
                  <p className="bk-product-desc">{prod.desc}</p>
                  <div className="bk-product-bottom">
                    <span className="bk-product-price">₹{prod.price}</span>
                    <button
                      type="button"
                      className="bk-add-cart-btn"
                      onClick={() => onAddToCart(prod)}
                    >
                      ADD +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
