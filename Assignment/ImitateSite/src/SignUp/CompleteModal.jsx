import React from 'react';
import './CompleteModal.css';

function CompleteModal({ onClose, onConfirm }) {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-icon">
          <img
            src="/check.png"
            alt="가입 완료 체크"
            className="modal-check-img"
          />
        </div>
        <div className="modal-message">가입이 완료되었습니다.</div>
        <button className="modal-confirm-btn" onClick={onConfirm}>
          확인
        </button>
      </div>
    </div>
  );
}

export default CompleteModal;
