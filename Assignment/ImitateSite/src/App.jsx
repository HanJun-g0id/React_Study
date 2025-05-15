import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import LoginApp from './Study/Login/LoginApp';
import SignUpForm from './Study/SignUp/SignUpForm';
import CompleteSignUp from './Study/SignUp/CompleteSignUp';
import Footer from './Study/Footer/Footer';
import Header from './Study/Header/Header';
import Home from './Study/Home/Home';
import CreateRoom from './Study/CreateRoom/CreateRoom';
import WaitingRoom from './Study/WaitingRoom/WaitingRoom';

function AppContent({ profileImg, setProfileImg }) {
  const location = useLocation();
  const hideHeaderPaths = ["/home", "/create-room","/waiting-room"];
  const isHeaderHidden = hideHeaderPaths.includes(location.pathname);

  return (
    <>
      {!isHeaderHidden && <Header profileImg={profileImg} />}
      <Routes>
        <Route path="/" element={<LoginApp />} />
        <Route
          path="/signup"
          element={
            <SignUpForm
              profileImg={profileImg}
              setProfileImg={setProfileImg}
            />
          }
        />
        <Route path="/complete" element={<CompleteSignUp />} />
        <Route
          path="/home"
          element={<Home profileImg={profileImg} />}
        />
        <Route path="/create-room" element={<CreateRoom profileImg={profileImg} />} />
        <Route path="/waiting-room" element={<WaitingRoom profileImg={profileImg} />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  const [profileImg, setProfileImg] = useState(() => {
    return localStorage.getItem('profileImg') || '/Profile.png';
  });

  useEffect(() => {
    localStorage.setItem('profileImg', profileImg);
  }, [profileImg]);

  return (
    <BrowserRouter>
      <AppContent profileImg={profileImg} setProfileImg={setProfileImg} />
    </BrowserRouter>
  );
}

export default App;
