import React from 'react';

function FilterButtons({filter, setFilter}) {
  return (
    <div>
      <button
        onClick={() => setFilter('all')}
        style={{ fontWeight: filter === 'all' ? 'bold' : 'normal' }}
      >
        전체
      </button>
      <button
        onClick={() => setFilter('active')}
        style={{ fontWeight: filter === 'active' ? 'bold' : 'normal' }}
      >
        미완료
      </button>
      <button
        onClick={() => setFilter('completed')}
        style={{ fontWeight: filter === 'completed' ? 'bold' : 'normal' }}
      >
        완료
      </button>
    </div>
  );
}

export default FilterButtons;
