import React from 'react';
import TodoApp from './TodoApp';
import './App.css';

function App() {
  return (
    <div className="gradient-background">
      <div className="todo-wrapper fixed-box">
        <TodoApp />
      </div>
    </div>
  );
}

export default App;
