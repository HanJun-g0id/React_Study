import React, { useState } from 'react';
import SignUp from '../SignUp/MoveSignUp';
import { useNavigate } from 'react-router-dom';
import './LoginApp.css';

function LoginApp() {
  const navigate = useNavigate();

  const [showSignUp, setShowSignUp] = useState(false);

  const handleLoginClick = () => {
    setShowSignUp(true);
  };

  const handleCloseSignUp = () => {
    setShowSignUp(false);
  };

  return (
    <div className="login-container">
      <h2>Log In</h2>
      <button className="login-btn" onClick={handleLoginClick}>
        <img
          src="/GoogleLogo.png"
          alt="Google Logo"
          className="login-logo"
        />
        Log in with Google
      </button>
      <button className="login-btn" onClick={handleLoginClick}>
        <img
          src="/GithubLogo.png"
          alt="Github Logo"
          className="login-logo"
        />
        Log in with Github
      </button>
      {showSignUp && <SignUp onClose={handleCloseSignUp} />}
      <div className="signup-link-row">
        <span
          className="signup-link"
          onClick={() => navigate('/signup')}
          tabIndex={0}
          role="button"
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') navigate('/signup');
          }}
        >
          회원가입
        </span>
      </div>
    </div>
  ); 
}

export default LoginApp;
