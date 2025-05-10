import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <img
        src="/LOGO.png"
        alt="로고"
        className="header-logo"
        onClick={() => navigate('/')}
        title="최초 화면으로 이동"
        tabIndex={0}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') navigate('/');
        }}
        role="button"
        aria-label="최초 화면으로 이동"
        style={{ cursor: 'pointer' }}
      />
    </header>
  );
}

export default Header;
