import React, { useState, useEffect } from 'react';
import { HERO_SLIDES } from '../../data/heroSlides';
import { ChevronLeftIcon, ChevronRightIcon } from '../common/Icons';
import './HeroCarousel.css';

export default function HeroCarousel({ onOrderNow }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalSlides = HERO_SLIDES.length;

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, totalSlides]);

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section
      className="bk-hero-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Promotional Banners"
    >
      <div className="bk-hero-container">
        {/* Banner Slide Image & Content */}
        <div className="bk-slide-card">
          <img
            src={slide.image}
            alt={slide.title}
            className="bk-slide-image"
          />

          {/* Overlay Graphics & Text */}
          <div className="bk-slide-overlay">
            {/* Top Tag or Details */}
            <div className="bk-slide-top">
              {slide.type === 'peri-peri' && (
                <div className="bk-fest-header-badge">
                  <span className="bk-flame-icon">🔥</span>
                  <span>AUTHENTIC GLOBAL FLAVOURS</span>
                </div>
              )}
            </div>

            {/* Floating Order Button & Crest */}
            <div className="bk-slide-cta-wrap">
              <button
                type="button"
                className="bk-order-now-btn"
                onClick={() => onOrderNow && onOrderNow(slide)}
              >
                {slide.ctaText}
              </button>
            </div>
          </div>

          {/* Left / Right Nav Chevrons */}
          <button
            type="button"
            className="bk-hero-arrow prev"
            onClick={goToPrev}
            aria-label="Previous Slide"
          >
            <ChevronLeftIcon size={24} color="#502314" />
          </button>

          <button
            type="button"
            className="bk-hero-arrow next"
            onClick={goToNext}
            aria-label="Next Slide"
          >
            <ChevronRightIcon size={24} color="#502314" />
          </button>
        </div>

        {/* Bottom Banner Bar */}
        <div className="bk-hero-bottom-bar">
          <div className="bk-hero-tc">
            <span>*T&amp;C APPLY</span>
          </div>

          {/* Carousel Indicator Dots */}
          <div className="bk-hero-dots">
            {HERO_SLIDES.map((s, idx) => (
              <button
                key={s.id}
                type="button"
                className={`bk-hero-dot ${idx === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Sprite Partnership & Limited Time Badge */}
          <div className="bk-hero-promo-badge">
            <span className="bk-limited-time">{slide.badge}</span>
            <div className="bk-sprite-badge">
              <span className="bk-sprite-text">{slide.subBadge}</span>
              <span className="bk-sprite-icon">🥤</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
