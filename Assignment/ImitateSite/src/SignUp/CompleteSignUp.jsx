import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './CompleteSignUp.css';

function CompleteSignUp() {
  const location = useLocation();
  const navigate = useNavigate();

  const { profileImg, name, baekjoonId } = location.state || {};

  if (!profileImg || !name || !baekjoonId) {
    navigate('/');
    return null;
  }

  return (
    <div className="complete-container">
      <div className="complete-card">
        <h2 className="complete-title">Sign Up</h2>
        <img src={profileImg} alt="프로필" className="complete-profile-img" />
        <div className="complete-name">{name}</div>
        <div className="complete-id">{baekjoonId}</div>
        <button
          className="complete-btn"
          onClick={() => navigate('/')}
        >
          가입 완료하기
        </button>
      </div>
    </div>
  );
}

export default CompleteSignUp;
