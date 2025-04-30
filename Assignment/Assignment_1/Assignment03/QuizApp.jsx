import React, {useState, useEffect} from 'react';
import QuizQuestion from './QuizQuestion';
import QuizResult from './QuizResult';
import './QuizApp.css';

//문제 리스트
const questions = [
  {
    questionText: '세계에서 가장 큰 대륙은?',
    answerOptions: [
      { answerText: '아프리카', isCorrect: false },
      { answerText: '유럽', isCorrect: false },
      { answerText: '오세아니아', isCorrect: false },
      { answerText: '아시아', isCorrect: true },
    ],
  },
  {
    questionText: '물의 화학식은?',
    answerOptions: [
      { answerText: 'CO₂', isCorrect: false },
      { answerText: 'H₂O', isCorrect: true },
      { answerText: 'O₂', isCorrect: false },
      { answerText: 'NaCl', isCorrect: false },
    ],
  },
  {
    questionText: 'React의 상태 관리 훅은?',
    answerOptions: [
      { answerText: 'useState', isCorrect: true },
      { answerText: 'useFetch', isCorrect: false },
      { answerText: 'useClass', isCorrect: false },
      { answerText: 'useHtml', isCorrect: false },
    ],
  },
];

function QuizApp() {
  //기본 상태 선언
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  //5초 후 자동 다음 문제
  useEffect(() => {
    if (!isFinished && isStarted) {
      const timer = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, isFinished, isStarted]);

  //마지막 문제 이후 결과 화면
  useEffect(() => {
    if (currentIndex >= questions.length && isStarted) {
      setIsFinished(true);
    }
  }, [currentIndex, isStarted]);

  //답을 골랐을 때 실행
  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore((prev) => prev + 1);
    setCurrentIndex((prev) => prev + 1);
  };

  //시작
  const handleStart = () => {
    setIsStarted(true);
    setCurrentIndex(0);
    setScore(0);
    setIsFinished(false);
  };

  //재시작
  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setIsFinished(false);
    setIsStarted(false);
  };

  //메인렌더링
  return (
    <div>
      {!isStarted ? (
        <div className="quiz-container">
          <h2>퀴즈 시작하기</h2>
          <button className="start-btn" onClick={handleStart}>
            Start
          </button>
        </div>
      ) : !isFinished ? (
        <QuizQuestion
          questionData={questions[currentIndex]}
          onAnswer={handleAnswer}
        />
      ) : (
        <QuizResult
          score={score}
          total={questions.length}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}

export default QuizApp;
