import React from 'react';
import './WaitingRoom.css';
import { useLocation } from 'react-router-dom';
import HomeHeader from '../Header/HomeHeader';

function WaitingRoom({ profileImg }) {
  const location = useLocation();
  const users = location.state?.users || [];
  return (
    
    <div className="waiting-room-background">
      <HomeHeader profileImg={profileImg} />
      <div className="waiting-room-card">
        <img src= "/loading.png" alt="로고" className="loading-logo" />
        <h2 className="waiting-room-count">{users.length}명</h2>
        <div className="waiting-room-desc">친구들을 기다리고 있어요!</div>
        <div className="waiting-room-list">
          {users.map((user, idx) => (
            <div className="waiting-room-user" key={user.name + idx}>
              <span className="waiting-room-number">{idx + 1}</span>
              {idx === 0 ? (
                <span className="waiting-room-leader">👑 {user.name}</span>
              ) : (
                <>
                  <span className="waiting-room-dot">●</span>
                  <span>{user.name}</span>
                </>
              )}
            </div>
          ))}
        </div>
        <button className="waiting-room-confirm-btn">확인</button>
      </div>
    </div>
  );
}

export default WaitingRoom;
