import React from 'react';
import { StoreProvider, createStore } from 'easy-peasy';
import model from './model';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import './App.css';

const store = createStore(model);

function App() {
  return (
    <StoreProvider store={store}>
      <div className="container">
        <Todos />
        <AddTodo />
      </div>
    </StoreProvider>
  );
}

export default App;
