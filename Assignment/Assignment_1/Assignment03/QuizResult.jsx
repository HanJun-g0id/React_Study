import React from 'react';

function QuizResult({score, total, onRestart}) {
  return (
    <div className="quiz-container">
      <h2>결과</h2>
      <div className="result-score">점수: {score} / {total}</div>
      <button className="restart-btn" onClick={onRestart}>재시작</button>
    </div>
  );
}

export default QuizResult;
