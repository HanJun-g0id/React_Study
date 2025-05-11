import React, { useState } from 'react';
import ChangeProfile from './ChangeProfile';
import MoveBJ from './MoveBJ';
import './SignUpForm.css';

function SignUpForm({profileImg,setProfileImg}) {
  
  const [name, setName] = useState('');
  const [baekjoonId, setBaekjoonId] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMoveBJOpen, setIsMoveBJOpen] = useState(false);

  const isComplete = name.trim() && baekjoonId.trim();

  const handleProfileChange = (newImg) => {
    setProfileImg(newImg);
    setIsModalOpen(false);
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
              onClick={() => setIsModalOpen(true)}
              title="프로필 사진 변경"
            >
              <img src="./pencil.png" alt="프로필 사진 변경"/>
            </button>
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
              setIsMoveBJOpen(true);
            }
          }}
        >
          설정 완료하기
        </button>
      </div>
      {isModalOpen && (
        <ChangeProfile
          currentImg={profileImg}
          onChange={handleProfileChange}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      {isMoveBJOpen && (
        <MoveBJ
        onClose={() => setIsMoveBJOpen(false)}
        profileImg={profileImg}
        name={name}
        baekjoonId={baekjoonId}
      />
      )}
    </div>
  );
}

export default SignUpForm;
