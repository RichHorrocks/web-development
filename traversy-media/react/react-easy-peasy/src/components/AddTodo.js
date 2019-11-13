import React, { useState } from 'react';
import { useStoreActions } from 'easy-peasy';

const AddTodo = () => {
  const [title, setTitle] = useState('');

  const add = useStoreActions(actions => actions.add);

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          add({ title: title, completed: false });
          setTitle('');
        }}
      >
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Add todo title..."
        />
        <input type="submit" value="Add Todo" />
      </form>
    </div>
  );
};

export default AddTodo;
