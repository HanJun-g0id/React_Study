import React from 'react';
import ReactDOM from 'react-dom/client';
//리액트랑 리액트 돔 라이브러리 불러옴

import './index.css';
//css 파일 불러옴

import App from './App';
// APP 컴포넌트 불러옴
import reportWebVitals from './reportWebVitals';
// 뭔가했는데 성능측정용이라고 함

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//리액트의 crateRoot를 써서 root을 찾고 렌더링 준비
reportWebVitals();
//성능측정 GO
