import React, { useRef, useState } from 'react';
import { CATEGORIES_DATA } from '../../data/categoriesData';
import CategoryCard from './CategoryCard';
import { ChevronLeftIcon, ChevronRightIcon } from '../common/Icons';
import './MenuCategories.css';

export default function MenuCategories({ onSelectCategory, onExploreFullMenu }) {
  const scrollRef = useRef(null);
  const [selectedId, setSelectedId] = useState('whopper');

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const handleSelect = (category) => {
    setSelectedId(category.id);
    if (onSelectCategory) {
      onSelectCategory(category);
    }
  };

  return (
    <section className="bk-menu-section" aria-label="Our Menu Categories">
      <div className="bk-menu-container">
        {/* Section Header */}
        <div className="bk-menu-header">
          <h2 className="bk-menu-title">OUR MENU</h2>
          <button
            type="button"
            className="bk-see-all-btn"
            onClick={onExploreFullMenu}
          >
            <span>See All</span>
            <ChevronRightIcon size={14} color="#D62300" />
          </button>
        </div>

        {/* Carousel Container */}
        <div className="bk-carousel-outer">
          {/* Left Arrow Button */}
          <button
            type="button"
            className="bk-nav-arrow left"
            onClick={scrollLeft}
            aria-label="Scroll menu left"
          >
            <ChevronLeftIcon size={20} color="#502314" />
          </button>

          {/* Cards Track */}
          <div className="bk-cards-track" ref={scrollRef}>
            {CATEGORIES_DATA.map((cat) => (
              <CategoryCard
                key={cat.id}
                category={cat}
                isSelected={selectedId === cat.id}
                onClick={handleSelect}
              />
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            type="button"
            className="bk-nav-arrow right"
            onClick={scrollRight}
            aria-label="Scroll menu right"
          >
            <ChevronRightIcon size={20} color="#502314" />
          </button>
        </div>

        {/* Center CTA Button */}
        <div className="bk-explore-menu-wrap">
          <button
            type="button"
            className="bk-explore-menu-btn"
            onClick={onExploreFullMenu}
          >
            EXPLORE FULL MENU
          </button>
        </div>
      </div>
    </section>
  );
}
