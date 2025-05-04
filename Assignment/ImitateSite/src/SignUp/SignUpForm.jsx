import React, {useState} from 'react';
import './SignUpForm.css';

//프로필사진 대체용
const PROFILE_COLORS = [
  '#6170fb', //기본색(파랑)
  '#f44336', //빨강
  '#4caf50', //초록
  '#ff9800', //주황
  '#9c27b0', //보라
  '#607d8b', //회색
];

function SignUpForm({onClose}) {
  const [profileColor, setProfileColor] = useState(PROFILE_COLORS[0]);
  const [name, setName] = useState('');
  const [baekjoonId, setBaekjoonId] = useState('');

  const isComplete = name.trim() && baekjoonId.trim();

  return (
    <div className="signup-box">
      <h2 className="signup-title">Sign Up</h2>
        <div className="profile-section">
          <div
            className="profile-avatar"
            style={{ background: profileColor }}
          >
            <img
              src="/logo192.png"
              alt="프로필 이미지"
              className="profile-img"
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
