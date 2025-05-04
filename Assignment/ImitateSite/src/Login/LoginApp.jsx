import React, { useState } from 'react';
import SignUp from '../SignUp/MoveSignUp';
import './LoginApp.css';

function LoginApp() {

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
    </div>
  ); 
}

export default LoginApp;
