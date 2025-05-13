import React, { useState } from 'react';
import './CreateRoom.css';
import HomeHeader from '../Header/HomeHeader';

function CreateRoom({ profileImg }) {
  const [problemNum, setProblemNum] = useState('');
  const isComplete = problemNum.trim();

  const handleCreateRoom = () => {
    if (isComplete) {
      alert(`문제 번호 ${problemNum}로 방을 생성합니다!`);
    }
  };

  return (
    <div className="create-room-background">
      <HomeHeader profileImg={profileImg} />
      <div className="create-room-box">
        <img
          src="/create.png"
          alt="방 생성 로고"
          className="create-room-logo"
        />
        <h2>방 생성하기</h2>
        <h3>문제 번호를 입력하여 방을 생성하세요!</h3>
        <label htmlFor="problem-number" className="input-label"></label>
        <input
          id="problem-number"
          type="text"
          className="create-room-input"
          placeholder="문제 번호를 입력하세요 예) 1234"
          value={problemNum}
          onChange={e => setProblemNum(e.target.value)}
          maxLength={20}
        />
        <button
          className="create-confirm-btn"
          disabled={!isComplete}
          onClick={handleCreateRoom}
        >
          확인
        </button>
      </div>
    </div>
  );
}

export default CreateRoom;
