import React, { useState } from 'react';
import './MoveSignUp.css';
import { useNavigate } from 'react-router-dom';
import SignUpForm from './SignUpForm';


function SignUp({onClose}) {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);

  if (showForm) {
    return <SignUpForm onClose={onClose} />;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <button className="modal-close" onClick={onClose} aria-label="닫기">
          &times;
        </button>
        <div className="modal-content">
          <img src="/exclam.png" className="modal-icon" />
          <h3>회원가입으로 이동합니다!</h3>
          <p className="modal-desc">가입되지 않은 계정입니다.</p>
          <button className="confirm-btn" onClick={() => navigate('/signup')}>
            확인
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
