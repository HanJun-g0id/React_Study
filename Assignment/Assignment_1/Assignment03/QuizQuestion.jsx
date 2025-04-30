import React from 'react';

function QuizQuestion({questionData, onAnswer}) {
  if (!questionData) return null;
  return (
    <div className="quiz-container">
      <h2>{questionData.questionText}</h2>
      <div className="answer-options">
        {questionData.answerOptions.map((option, idx) => (
          <button key={idx} onClick={() => onAnswer(option.isCorrect)}>
            {option.answerText}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuizQuestion;
