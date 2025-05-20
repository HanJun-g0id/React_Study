import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./HomeHeader.css";

function HomeHeader({ profileImg }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [toggleOn, setToggleOn] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  // 페이지 진입 시 토스트 자동 표시
  useEffect(() => {
    if (location.pathname === "/waiting-room") {
      setToastMsg("친구들에게 초대링크를 보내세요!");
      const timer = setTimeout(() => setToastMsg(""), 1800);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  // 초대링크 복사
  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setToastMsg("초대링크가 복사되었습니다!");
      setTimeout(() => setToastMsg(""), 1800);
    } catch (err) {
      alert("복사에 실패했습니다.");
    }
  };

  return (
    <header className="main-header">
      <div className="header-center" />
      <div className="header-left">
        <img
          src="/LOGO.png"
          alt="DEV RACE 로고"
          className="header-logo"
          onClick={() => navigate('/home')}
        />
      </div>
      <div className="header-right">
        <button
          className={`header-toggle-btn${toggleOn ? " on" : ""}`}
          title="토글"
          onClick={() => setToggleOn((prev) => !prev)}
        >
          <span className={`toggle-circle${toggleOn ? " on" : ""}`} />
        </button>
        {location.pathname === "/waiting-room" ? (
          <button
            className="header-link header-link-invite"
            type="button"
            onClick={handleShare}
          >
            초대링크
          </button>
        ) : (
          <button className="header-link" type="button">
            초대링크
          </button>
        )}
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
      {toastMsg && (
        <div className="header-toast">
          {toastMsg}
        </div>
      )}
    </header>
  );
}

export default HomeHeader;
