import React from 'react';
import './MoveBJ.css';

function MoveBJ({onClose}) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <button className="modal-close" onClick={onClose} aria-label="닫기">
          &times;
        </button>
        <div className="modal-content">
          <img src="/exclam.png" className="modal-icon" />
          <h3>백준페이지로 이동합니다!</h3>
          <p className="modal-desc">solved를 연동시켜주세요.</p>
          <button className="confirm-btn" onClick={onClose}>
            확인
          </button>
        </div>
      </div>
    </div>
  );
}

export default MoveBJ;
