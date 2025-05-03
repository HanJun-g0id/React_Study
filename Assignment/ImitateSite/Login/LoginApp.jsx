import React, {useState} from 'react';
import './LoginApp.css';

function LoginApp() {

  return (
    <div className="login-container">
      <h2>Log In</h2>
      <button className="login-btn">
        <img
          src="/GoogleLogo.png"
          alt="Google Logo"
          className="login-logo"
        />
        Log in with Google
      </button>
      <button className="login-btn">
        <img
          src="/GithubLogo.png"
          alt="Github Logo"
          className="login-logo"
        />
        Log in with Github
      </button>
    </div>
  ); 
}

export default LoginApp;
