import React from 'react';
import { CrownIcon, CloseIcon } from '../common/Icons';
import './Modals.css';

const DEALS = [
  { id: 1, code: 'BKFIRST', title: 'Flat 50% OFF', desc: 'On orders above ₹199 for first time users', tag: 'TRENDING' },
  { id: 2, code: 'WHOPPERKING', title: 'Free Veg Whopper', desc: 'Add 2 meals and get a Veg Whopper absolutely free', tag: 'BEST VALUE' },
  { id: 3, code: 'PERIPERI20', title: 'Extra ₹100 Cashback', desc: 'Applicable on any Peri-Peri Fest combo meal', tag: 'LIMITED' }
];

export default function DealsModal({ isOpen, onClose, onApplyDeal }) {
  if (!isOpen) return null;

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
            <CrownIcon size={22} color="#D62300" />
            <h3 className="bk-modal-title">King Deals &amp; Offers</h3>
          </div>
          <button
            type="button"
            className="bk-modal-close"
            onClick={onClose}
            aria-label="Close deals"
          >
            <CloseIcon size={20} />
          </button>
        </div>

        <div className="bk-modal-body">
          <div className="bk-deals-list">
            {DEALS.map((deal) => (
              <div key={deal.id} className="bk-deal-card">
                <div className="bk-deal-badge">{deal.tag}</div>
                <div className="bk-deal-main">
                  <h4 className="bk-deal-title">{deal.title}</h4>
                  <p className="bk-deal-desc">{deal.desc}</p>
                </div>
                <div className="bk-deal-action">
                  <span className="bk-deal-coupon">{deal.code}</span>
                  <button
                    type="button"
                    className="bk-deal-apply-btn"
                    onClick={() => onApplyDeal(deal)}
                  >
                    APPLY
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
