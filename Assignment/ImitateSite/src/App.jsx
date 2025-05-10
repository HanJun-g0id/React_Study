import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import LoginApp from './Study/Login/LoginApp';
import SignUpForm from './Study/SignUp/SignUpForm';
import CompleteSignUp from './Study/SignUp/CompleteSignUp';
import Footer from './Study/Footer/Footer';
import Header from './Study/Header/Header';
import Home from './Study/Home/Home';

function AppContent() {
  const location = useLocation();
  const hideHeaderPaths = ["/home"];
  const isHeaderHidden = hideHeaderPaths.includes(location.pathname);

  return (
    <>
      {!isHeaderHidden && <Header />}
      <Routes>
        <Route path="/" element={<LoginApp />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/complete" element={<CompleteSignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
