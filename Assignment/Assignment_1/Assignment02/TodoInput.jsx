import React, {useState} from 'react';

function TodoInput({addTodo}) {
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim()) {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <div>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="해야 할 일을 입력하세요!"
      />
      <button onClick={handleAdd}>추가</button>
    </div>
  );
}

export default TodoInput;
