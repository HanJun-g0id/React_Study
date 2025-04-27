import React from 'react';

function TodoItem({todo, toggleTodo, deleteTodo}) {
  return (
    <li>
      <span
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          color: todo.completed ? '#aaa' : '#222'
        }}
      >
        {todo.text}
      </span>
      <button
      style={{marginLeft: '12px'}} 
      onClick={() => toggleTodo(todo.id)}>
        {todo.completed ? '취소' : '완료'}
      </button>
      <button
      onClick={() => deleteTodo(todo.id)}>삭제</button>
    </li>
  );
}

export default TodoItem;
