import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Clock from "./Clock/Clock";

const root = ReactDOM.createRoot(document.getElementById("root"));

// setInterval을 사용해 1초마다 Tick 컴포넌트를 렌더링함
setInterval(() => {
  root.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode>
  );
}, 1000);

reportWebVitals();
