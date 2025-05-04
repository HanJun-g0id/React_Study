import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginApp from './Study/Login/LoginApp';
import SignUpForm from './Study/SignUp/SignUpForm';
import Footer from './Study/Footer/Footer';
import Header from './Study/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<LoginApp />} />
        <Route path="/signup" element={<SignUpForm />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
