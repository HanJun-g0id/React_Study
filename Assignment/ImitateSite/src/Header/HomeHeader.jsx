import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomeHeader.css";

function HomeHeader({ profileImg }) {
  const navigate = useNavigate();
  const [toggleOn, setToggleOn] = useState(false);

  return (
    <header className="main-header">
      <div className="header-center" />
      <div className="header-left">
        <img src="/LOGO.png" alt="DEV RACE 로고" className="header-logo" />
      </div>
      <div className="header-right">
        <button
          className={`header-toggle-btn${toggleOn ? " on" : ""}`}
          title="토글"
          onClick={() => setToggleOn((prev) => !prev)}
        >
          <span className={`toggle-circle${toggleOn ? " on" : ""}`} />
        </button>
        <button className="header-link" type="button">
          내코드
        </button>
        <button
          className="header-link"
          type="button"
          onClick={() => navigate("/")}
        >
          로그아웃
        </button>
        <div className="header-profile">
          <img
            src={profileImg || "/Profile.png"}
            alt="프로필"
            className="header-profile-img"
          />
        </div>
      </div>
    </header>
  );
}

export default HomeHeader;
