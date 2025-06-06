# 🗒️ React Quiz-App

## 과제 소개

React를 활용한 퀴즈(Quiz) 앱.
퀴즈 3개가 연속으로 나오고 제한시간 내에 푼 만큼 점수를 보여주는 앱. 
보기 좋은 배경과, 고정된 크기의 퀴즈 박스, 깔끔한 UI를 목표로 개발.

---

## 구현 목표

- 퀴즈 출제 : 3개의 객관식 문제(질문과 4지선다) 제공
- 점수 : 보기 중 하나 클릭 시 정답 여부 처리 후 다음 문제 이동.
- 진행 : 시간이 5초 지나면 자동으로 다음 문제로 이동
- 결과 : 모든 문제가 지난 후 [최종 점수/총 문제 수] 표시
## 추가 구현
- 게임 시작 전 화면 추가(Start 버튼으로 시작)
- 재시작 버튼을 통해 처음부터 다시 시작.
- 외부 배경은 파란색으로 변경.
- 컴포넌트 구조를 분리하여 유지보수 쉽게함.

---

## 컴포넌트 구조

- `QuizApp` : 전체 앱, 문제 데이터와 상태 보유
- `QuizQuestion questionData, onAnswer` : 퀴즈 질문과 보기 출력
- `QuizResult score, total` : 퀴즈 완료 후 결과 보여줌

--- 
