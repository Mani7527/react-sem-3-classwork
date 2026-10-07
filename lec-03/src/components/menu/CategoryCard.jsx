import React from 'react';

export default function CategoryCard({ category, onClick, isSelected = false }) {
  const { name, image, badgeType, badgeText, badgeSub, tag, color, bg } = category;

  const renderBadgeGraphic = () => {
    switch (badgeType) {
      case 'plane':
        return (
          <div className="bk-badge-graphic plane" style={{ backgroundColor: bg }}>
            <span className="bk-badge-icon">✈️</span>
            <span className="bk-badge-main" style={{ color }}>{badgeText}</span>
            <span className="bk-badge-sub">{badgeSub}</span>
          </div>
        );
      case 'ticket':
        return (
          <div className="bk-badge-graphic ticket" style={{ backgroundColor: bg }}>
            <div className="bk-ticket-border">
              <span className="bk-badge-main" style={{ color }}>{badgeText}</span>
              <span className="bk-ticket-airplane">🛫</span>
            </div>
          </div>
        );
      case 'flame':
        return (
          <div className="bk-badge-graphic flame" style={{ backgroundColor: bg }}>
            <span className="bk-badge-icon">🌶️</span>
            <span className="bk-badge-main" style={{ color }}>{badgeText}</span>
            <span className="bk-badge-sub" style={{ backgroundColor: color }}>{badgeSub}</span>
          </div>
        );
      case 'monsoon':
        return (
          <div className="bk-badge-graphic monsoon" style={{ backgroundColor: bg }}>
            <div className="bk-monsoon-umbrella">☔</div>
            <span className="bk-monsoon-title">MONSOON</span>
            <span className="bk-monsoon-sub">{badgeSub}</span>
          </div>
        );
      case 'kids':
        return (
          <div className="bk-badge-graphic kids" style={{ backgroundColor: bg }}>
            <span className="bk-kids-crown">👑</span>
            <span className="bk-kids-title" style={{ color }}>Kids Friendly</span>
            <span className="bk-kids-badge">FREE TOY</span>
          </div>
        );
      case 'crown':
        return (
          <div className="bk-badge-graphic crown" style={{ backgroundColor: bg }}>
            <span className="bk-crown-gold">👑</span>
            <span className="bk-crown-title">CRAZY</span>
            <span className="bk-crown-sub">APP DEALS</span>
          </div>
        );
      case 'two_for':
        return (
          <div className="bk-badge-graphic two-for" style={{ backgroundColor: bg }}>
            <span className="bk-two-big">2</span>
            <div className="bk-two-text">
              <span className="bk-two-for">FOR</span>
              <span className="bk-two-off">OFFER</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`bk-category-card-wrapper ${isSelected ? 'selected' : ''}`}
      onClick={() => onClick && onClick(category)}
      role="button"
      tabIndex={0}
      aria-label={name}
    >
      <div className="bk-category-card">
        {tag && <span className="bk-card-tag">{tag}</span>}

        {image ? (
          <div className="bk-card-image-wrap">
            <img src={image} alt={name} className="bk-card-image" />
          </div>
        ) : (
          renderBadgeGraphic()
        )}
      </div>

      <div className="bk-category-name">
        <span>{name}</span>
      </div>
    </div>
  );
}
