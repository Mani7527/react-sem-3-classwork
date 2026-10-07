import React, { useState } from 'react';
import bkLogo from '../../assets/images/bk-logo.svg';
import { CloseIcon } from '../common/Icons';
import './Modals.css';

export default function LoginModal({ isOpen, onClose, onLoginSuccess }) {
  const [phone, setPhone] = useState('');
  const [step, setStep] = useState('phone'); // 'phone' | 'otp'
  const [otp, setOtp] = useState('');

  if (!isOpen) return null;

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (phone.length >= 10) {
      setStep('otp');
    }
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (otp.length === 4) {
      if (onLoginSuccess) onLoginSuccess(phone);
      onClose();
    }
  };

  return (
    <div className="bk-modal-backdrop" onClick={onClose}>
      <div
        className="bk-modal-container bk-login-container"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button
          type="button"
          className="bk-modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <CloseIcon size={20} />
        </button>

        <div className="bk-login-header">
          <img src={bkLogo} alt="Burger King" className="bk-login-logo" />
          <h3 className="bk-login-title">
            {step === 'phone' ? 'Login or Sign Up' : 'Enter 4-Digit OTP'}
          </h3>
          <p className="bk-login-sub">
            {step === 'phone'
              ? 'Get access to exclusive King Deals and rewards!'
              : `Code sent to +91 ${phone}`}
          </p>
        </div>

        {step === 'phone' ? (
          <form onSubmit={handleSendOtp} className="bk-login-form">
            <div className="bk-input-group">
              <span className="bk-country-code">+91</span>
              <input
                type="tel"
                placeholder="Enter 10-digit mobile number"
                maxLength={10}
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                autoFocus
                required
              />
            </div>
            <button
              type="submit"
              className="bk-submit-btn"
              disabled={phone.length < 10}
            >
              SEND OTP
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOtp} className="bk-login-form">
            <div className="bk-input-group otp-group">
              <input
                type="text"
                placeholder="Enter OTP (e.g. 1234)"
                maxLength={4}
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                autoFocus
                required
              />
            </div>
            <button
              type="submit"
              className="bk-submit-btn"
              disabled={otp.length < 4}
            >
              VERIFY &amp; PROCEED
            </button>
            <button
              type="button"
              className="bk-back-btn"
              onClick={() => setStep('phone')}
            >
              Change Mobile Number
            </button>
          </form>
        )}

        <div className="bk-login-footer">
          <p>By proceeding, you agree to Burger King's <a href="#terms">Terms &amp; Conditions</a> and <a href="#privacy">Privacy Policy</a>.</p>
        </div>
      </div>
    </div>
  );
}
