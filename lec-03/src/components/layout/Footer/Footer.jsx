import React from 'react';
import bkLogoRetro from '../../../assets/images/bk-logo-retro.svg';
import appStoreBadge from '../../../assets/images/app-store.svg';
import googlePlayBadge from '../../../assets/images/google-play.svg';
import {
  FOOTER_SECTIONS,
  SOCIAL_LINKS,
  COPYRIGHT_TEXT
} from '../../../data/footerData';
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon
} from '../../common/Icons';
import './Footer.css';

export default function Footer() {
  const renderSocialIcon = (iconName) => {
    switch (iconName) {
      case 'facebook':
        return <FacebookIcon size={16} />;
      case 'instagram':
        return <InstagramIcon size={16} />;
      case 'twitter':
        return <TwitterIcon size={16} />;
      case 'youtube':
        return <YoutubeIcon size={16} />;
      default:
        return null;
    }
  };

  return (
    <footer className="bk-footer-root" role="contentinfo">
      <div className="bk-footer-container">
        {/* Upper Columns Section */}
        <div className="bk-footer-grid">
          {/* Link Columns */}
          {FOOTER_SECTIONS.map((section, idx) => (
            <div key={idx} className="bk-footer-col">
              <h3 className="bk-footer-title">{section.title}</h3>
              <ul className="bk-footer-links">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx} className="bk-footer-link-item">
                    <a href={link.url} className="bk-footer-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Download Our App Column */}
          <div className="bk-footer-col bk-app-col">
            <h3 className="bk-footer-title">DOWNLOAD OUR APP</h3>
            <div className="bk-app-badges">
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noreferrer"
                className="bk-app-badge-link"
                aria-label="Download on the App Store"
              >
                <img src={appStoreBadge} alt="App Store" />
              </a>
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noreferrer"
                className="bk-app-badge-link"
                aria-label="Get it on Google Play"
              >
                <img src={googlePlayBadge} alt="Google Play" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Logo, Copyright, Social Icons */}
        <div className="bk-footer-bottom-bar">
          {/* Bottom Left: BK Small Monochrome Logo */}
          <div className="bk-footer-brand">
            <img
              src={bkLogoRetro}
              alt="Burger King"
              className="bk-footer-logo-img"
            />
          </div>

          {/* Bottom Center: Copyright */}
          <div className="bk-footer-copyright">
            <p>{COPYRIGHT_TEXT}</p>
          </div>

          {/* Bottom Right: Social Icons */}
          <div className="bk-footer-socials">
            {SOCIAL_LINKS.map((soc) => (
              <a
                key={soc.name}
                href={soc.url}
                target="_blank"
                rel="noreferrer"
                className="bk-social-icon-btn"
                aria-label={`Visit Burger King on ${soc.name}`}
              >
                {renderSocialIcon(soc.icon)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
