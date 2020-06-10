import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state.
const initialState = {
  transactions: []
};

// Create context.
export const GlobalContext = createContext(initialState);

// Provider component.
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions.
  const deleteTransaction = id => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  };

  const addTransaction = tx => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: tx
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
