import React from 'react';
import { CloseIcon, CartIcon } from '../common/Icons';
import './Modals.css';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems = [],
  onUpdateQuantity,
  onCheckout
}) {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = subtotal > 0 ? 39 : 0;
  const grandTotal = subtotal + deliveryFee;

  return (
    <div className="bk-drawer-backdrop" onClick={onClose}>
      <div
        className="bk-drawer-container"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="bk-drawer-header">
          <div className="bk-drawer-title-wrap">
            <CartIcon size={22} color="#D62300" />
            <h3 className="bk-drawer-title">Your Order ({cartItems.length})</h3>
          </div>
          <button
            type="button"
            className="bk-modal-close"
            onClick={onClose}
            aria-label="Close cart"
          >
            <CloseIcon size={20} />
          </button>
        </div>

        <div className="bk-drawer-body">
          {cartItems.length === 0 ? (
            <div className="bk-empty-cart">
              <span className="bk-empty-cart-icon">🍔</span>
              <h4>Your Cart is Hungry!</h4>
              <p>Add some delicious Whoppers, Combos, or Peri-Peri treats to get started.</p>
              <button
                type="button"
                className="bk-empty-cart-btn"
                onClick={onClose}
              >
                BROWSE MENU
              </button>
            </div>
          ) : (
            <div className="bk-cart-list">
              {cartItems.map((item) => (
                <div key={item.id} className="bk-cart-row">
                  <div className="bk-cart-item-details">
                    <p className="bk-cart-item-name">{item.name}</p>
                    <p className="bk-cart-item-price">₹{item.price}</p>
                  </div>
                  <div className="bk-quantity-control">
                    <button
                      type="button"
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}

              {/* Bill Details */}
              <div className="bk-bill-card">
                <h4 className="bk-bill-title">Bill Details</h4>
                <div className="bk-bill-row">
                  <span>Item Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="bk-bill-row">
                  <span>Delivery Partner Fee</span>
                  <span>₹{deliveryFee}</span>
                </div>
                <div className="bk-bill-row total">
                  <span>To Pay</span>
                  <span>₹{grandTotal}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="bk-drawer-footer">
            <button
              type="button"
              className="bk-checkout-btn"
              onClick={onCheckout}
            >
              <span>PAY ₹{grandTotal}</span>
              <span>CONTINUE &rarr;</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
