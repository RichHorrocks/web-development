import React from 'react';
import { useStoreActions } from 'easy-peasy';

const TodoItem = ({ todo }) => {
  const { toggle, remove } = useStoreActions(actions => ({
    remove: actions.remove,
    toggle: actions.toggle
  }));

  return (
    <div
      className="todo"
      style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
    >
      <span onClick={() => toggle(todo.id)} style={{ cursor: 'pointer' }}>
        {todo.title}
      </span>
      <button onClick={() => remove(todo.id)}>
        <i className="fas fa-trash alt"></i>
      </button>
    </div>
  );
};

export default TodoItem;
