import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const navigate = useNavigate();

  return (
    <header
      className="header"
      onClick={() => navigate('/')}
      title="로그인 화면으로 이동"
      tabIndex={0}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') navigate('/');
      }}
      role="button"
      aria-label="로그인 화면으로 이동"
    >
      <img src="/LOGO.png" alt="로고" className="header-logo" />
    </header>
  );
}

export default Header;
