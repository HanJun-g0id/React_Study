import React, { useState, useRef } from 'react';
import './SignUpForm.css';

function SignUpForm() {
  const [profileImg, setProfileImg] = useState('/logo192.png');
  const fileInputRef = useRef(null);
  const [name, setName] = useState('');
  const [baekjoonId, setBaekjoonId] = useState('');

  const isComplete = name.trim() && baekjoonId.trim();

  const handleProfileImgChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (ev) => setProfileImg(ev.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleEditClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="center-container">
      <div className="signup-card">
        <h2 className="signup-title">Sign Up</h2>
        <div className="profile-row">
          <div className="profile-avatar">
            <img src={profileImg} alt="프로필" className="profile-img" />
            <button
              className="profile-edit-btn"
              type="button"
              onClick={handleEditClick}
              title="프로필 사진 변경"
            >
            <img src="./pencil.png" alt="프로필 사진 변경"/>
            </button>
            <input
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              ref={fileInputRef}
              onChange={handleProfileImgChange}
            />
          </div>
        </div>
        <div className="input-section">
          <label htmlFor="name-input" className="input-label">이름을 작성해주세요.</label>
          <input
            id="name-input"
            type="text"
            placeholder="이름을 입력하세요."
            value={name}
            onChange={e => setName(e.target.value)}
            maxLength={12}
          />
          <label htmlFor="baekjoon-input" className="input-label">백준 id를 입력하세요.</label>
          <input
            id="baekjoon-input"
            type="text"
            placeholder="이메일을 제외한 아이디만 적어주세요."
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
    </div>
  );
}

export default SignUpForm;
