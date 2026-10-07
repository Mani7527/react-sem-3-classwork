import React, { useState } from 'react';
import { LocationPinIcon, CloseIcon, SearchIcon } from '../common/Icons';
import './Modals.css';

const SAMPLE_STORES = [
  { id: 1, name: 'Burger King - Connaught Place', area: 'Central Delhi', distance: '1.2 km', open: true },
  { id: 2, name: 'Burger King - Mall of India', area: 'Sector 18, Noida', distance: '3.5 km', open: true },
  { id: 3, name: 'Burger King - Cyber Hub', area: 'DLF Cyber City, Gurugram', distance: '5.8 km', open: true },
  { id: 4, name: 'Burger King - Select Citywalk', area: 'Saket, New Delhi', distance: '4.1 km', open: true }
];

export default function LocationModal({ isOpen, onClose, onSelectStore }) {
  const [search, setSearch] = useState('');

  if (!isOpen) return null;

  const filteredStores = SAMPLE_STORES.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.area.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bk-modal-backdrop" onClick={onClose}>
      <div
        className="bk-modal-container"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="bk-modal-header">
          <div className="bk-modal-title-wrap">
            <LocationPinIcon size={22} color="#D62300" />
            <h3 className="bk-modal-title">Select Your Location / Store</h3>
          </div>
          <button
            type="button"
            className="bk-modal-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            <CloseIcon size={20} />
          </button>
        </div>

        <div className="bk-modal-body">
          {/* Location search bar */}
          <div className="bk-modal-search">
            <SearchIcon size={18} color="#8C827A" />
            <input
              type="text"
              placeholder="Search by area, landmark or pincode..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              autoFocus
            />
          </div>

          <div className="bk-current-location-btn" onClick={() => onSelectStore('Connaught Place, Delhi')}>
            <span className="bk-detect-icon">📍</span>
            <div>
              <p className="bk-detect-title">Use Current Location</p>
              <p className="bk-detect-sub">Using GPS / Network</p>
            </div>
          </div>

          <div className="bk-store-list-section">
            <h4 className="bk-store-list-heading">Nearby Outlets</h4>
            <div className="bk-store-list">
              {filteredStores.map((store) => (
                <div
                  key={store.id}
                  className="bk-store-item"
                  onClick={() => onSelectStore(store.name)}
                >
                  <div className="bk-store-info">
                    <p className="bk-store-name">{store.name}</p>
                    <p className="bk-store-area">{store.area} • {store.distance}</p>
                  </div>
                  <span className="bk-store-badge">SELECT</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
