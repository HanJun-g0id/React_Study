import React from 'react';
import TodoItem from './TodoItem';

function TodoList({todos, toggleTodo, deleteTodo}) {
  return (
    <ul>
      {todos.length === 0 && <li>해당 항목이 없어요,,</li>}
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
