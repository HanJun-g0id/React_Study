# 🗒️ React Todo List

## 과제 소개

React를 활용한 투두 리스트(To-Do List)
할 일 추가, 완료/취소, 삭제, 필터(전체/미완료/완료) 등의 기본적인 기능을 제공.  
보기 좋은 배경과, 고정된 크기의 투두 박스, 깔끔한 UI를 목표로 개발.

---

## 구현 목표

- 할 일을 입력하고 추가할 수 있다.
- 할 일 목록을 리스트로 보여준다.
- 각 할 일 항목에 완료/취소, 삭제 버튼이 있다.
- 완료된 할 일은 취소선과 연한 색상으로 표시된다.
- 전체/미완료/완료 보기 필터 버튼을 제공한다.
- 투두 리스트는 고정된 크기의 박스 안에서만 스크롤된다.
- 외부 배경은 파란색 그라데이션으로 꾸민다.
- 컴포넌트 구조를 분리하여 유지보수가 쉽도록 한다.

---

## 컴포넌트 구조

- `App` : 전체 레이아웃 및 배경
  - `TodoApp` : 투두 리스트의 상태 및 로직 관리
    - `TodoInput` : 할 일 입력 및 추가
    - `FilterButtons` : 필터(전체/미완료/완료) 버튼
    - `TodoList` : 할 일 목록 렌더링
      - `TodoItem` : 개별 할 일 항목(완료/취소, 삭제)

--- 
