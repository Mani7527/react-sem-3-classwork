import React from 'react';
import brickWallImg from '../../assets/images/bk-brick-wall.jpg';
import bkLogoRetro from '../../assets/images/bk-logo-retro.svg';
import { DISCLAIMER_TEXT } from '../../data/footerData';
import './BkWallBanner.css';

export default function BkWallBanner({ onExploreWall }) {
  return (
    <section className="bk-wall-section" aria-label="Explore The BK Wall">
      <div className="bk-wall-container">
        {/* Brick Wall Banner Card */}
        <div
          className="bk-wall-banner-card"
          style={{ backgroundImage: `url(${brickWallImg})` }}
          onClick={onExploreWall}
          role="button"
          tabIndex={0}
        >
          <div className="bk-wall-overlay">
            <div className="bk-wall-content">
              {/* Retro Logo */}
              <div className="bk-wall-logo-wrap">
                <img
                  src={bkLogoRetro}
                  alt="Burger King Retro"
                  className="bk-wall-logo"
                />
              </div>

              {/* Flame Font Typography */}
              <div className="bk-wall-text-wrap">
                <h2 className="bk-wall-heading">
                  <span className="bk-wall-word">EXPLORE THE</span>
                  <span className="bk-wall-brand">BK WALL</span>
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer Line */}
        <div className="bk-disclaimer-wrap">
          <p className="bk-disclaimer-text">{DISCLAIMER_TEXT}</p>
        </div>
      </div>
    </section>
  );
}
