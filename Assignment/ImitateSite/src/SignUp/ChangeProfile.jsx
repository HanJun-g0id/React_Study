import React, { useState } from 'react';
import './ChangeProfile.css';

function ChangeProfile({ currentImg, onChange, onClose }) {
  const DEFAULT_IMG = '/Profile.png';
  const [profilePic, setProfilePic] = useState(currentImg || DEFAULT_IMG);
  const isChanged = profilePic !== DEFAULT_IMG;


  const handleReset = () => {
    setProfilePic(DEFAULT_IMG);
    onChange(DEFAULT_IMG);
  };

  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setProfilePic(ev.target.result);
        onChange(ev.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-box">
        <button className="modal-close" onClick={onClose} aria-label="닫기">&times;</button>
        <div className="profile-img-wrap">
          <img src={profilePic} alt="프로필" className="profile-img" />
        </div>
        <div className="btn-row">
          <button
            className="btn reset-btn"
            disabled={!isChanged}
            onClick={handleReset}
          >
            기존 프로필로 변경
          </button>
          <label className="btn upload-btn" htmlFor="file-upload">
            사진 불러오기
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </div>
      </div>
    </div>
  );
}

export default ChangeProfile;
