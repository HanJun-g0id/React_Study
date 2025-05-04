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
          <h3>회원가입으로 이동합니다!</h3>
          <button className="confirm-btn" onClick={() => navigate('/signup')}>
            확인
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
