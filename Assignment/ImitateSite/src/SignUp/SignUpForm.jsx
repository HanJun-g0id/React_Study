import React, { useState, useRef } from 'react';
import './SignUpForm.css';

const PROFILE_COLORS = [
  '#6170fb', '#f44336', '#4caf50', '#ff9800', '#9c27b0', '#607d8b'
];

function SignUpForm({ onClose }) {
  const [profileColor, setProfileColor] = useState(PROFILE_COLORS[0]);
  const [name, setName] = useState('');
  const [baekjoonId, setBaekjoonId] = useState('');
  const [profileImg, setProfileImg] = useState('/logo192.png');
  const fileInputRef = useRef(null);

  const isComplete = name.trim() && baekjoonId.trim();

  const handleProfileImgChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (ev) => setProfileImg(ev.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleExclamationClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="signup-box">
      <h2 className="signup-title">Sign Up</h2>
      <div className="profile-section">
        <div className="profile-avatar-row">
          <div
            className="profile-avatar"
            style={{ background: profileColor }}
          >
            <img
              src={profileImg}
              alt="프로필 이미지"
              className="profile-img"
            />
          </div>
          <button
            className="profile-edit-btn"
            type="button"
            onClick={handleExclamationClick}
            title="프로필 사진 변경"
          >
            !
          </button>
          <input
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            ref={fileInputRef}
            onChange={handleProfileImgChange}
          />
        </div>
        <div className="profile-colors">
          {PROFILE_COLORS.map((color) => (
            <button
              key={color}
              className={`color-btn${profileColor === color ? ' selected' : ''}`}
              style={{ background: color }}
              onClick={() => setProfileColor(color)}
              aria-label={`프로필 색상 ${color}`}
              type="button"
            />
          ))}
        </div>
      </div>
      <div className="input-section">
        <h4>이름</h4>
        <input
          type="text"
          placeholder="이름을 입력해주세요"
          value={name}
          onChange={e => setName(e.target.value)}
          maxLength={12}
        />
        <h4>백준 ID</h4>
        <input
          type="text"
          placeholder="백준 ID를 입력해주세요"
          value={baekjoonId}
          onChange={e => setBaekjoonId(e.target.value)}
          maxLength={20}
        />
      </div>
      <button
        className="signup-confirm-btn"
        disabled={!isComplete}
        onClick={() => {
          if (isComplete) {
            alert('회원가입이 완료되었습니다!');
          }
        }}
      >
        설정 완료하기
      </button>
    </div>
  );
}

export default SignUpForm;
